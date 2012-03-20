/*
*********************************************************************************
* J.M. Evers 10/2010                                                            *
* This is all amateur scriblings... So no copyrights.                           *
* This source code file, and compiled objects derived from it,                  *
* can be used and distributed without restriction, including for commercial use *
* No warrenty whatsoever                                                         *
*********************************************************************************
Orignally Written by: http://www.cs.tut.fi/~jkorpela/c/eng.html 7/2000

Corrected usage of 'asprintf()' and modified for wims usage 2/2012 

Used in chemistry and physics to present data in the correct amount of significant digits,
and in a scientiffic notation.(according the precision of the 'experimental' data)

!exec scienceprint number,significance,type
number: a number
desired significance : precision
type (optional args): calc = 0 / html = 1 / latex = 2  / prefix =3 : default 0 or empty

default  : 10-pow notation : 120000,3 -> 120*10^3
type = 0 : 10-pow notation : 120000,3,0 -> 120*10^3
type = 1 : html notation   : 120000,3,1 -> 120&times;10<sup>3</sup>
type = 2 : latex notation  : 120000,3,2 -> 120 \times 10^{3}
type = 3 : prefix-notation : 120000,3,3 -> 120.0 k
type = 3 : prefix-notation : 1200000,4,3 -> 1.200 M

multiple conversion: use space between arguments
!exec scienceprint 120000,4 122900,5 120036,6,3 --> 120.0*10^3,122.90*10^3,120.036 k

Secure usage of asprintf() : 
-- if ( asprintf() < 0 ) return NULL;
-- free(tmp_memory);
-- check on illegal chars in input
*/

#define _GNU_SOURCE //" needed before stdio.h...warning: implicit declaration of function 'asprintf'"
#include <stdio.h>
#include <math.h>
#include <string.h>
#include <stdlib.h>
#define MICRO "�"
#define PREFIX_START (-24)
#define PREFIX_END (PREFIX_START+(int)((sizeof(prefix)/sizeof(char *)-1)*3))


  
int main( int argc , char *argv[]){

    if( argc < 2){
	fprintf(stdout,"syntax error : number1,significance1,type1 number2,significance2,type2 ... number_n,significance_n,type_n \n");
	return 0;
    }
    
    char *result = NULL;
    
    char *printscience(double value, int sig, int format ){
	static char *prefix[] = {
	    "y", "z", "a", "f", "p", "n", MICRO, "m", "",
	    "k", "M", "G", "T", "P", "E", "Z", "Y"
	};
        double display, fract;
	char *sign = NULL;
        int exponent10;
	result = "\0";

	if(value < 0.0) {
	    sign = "-";
	    value = -value;
	} 
        else 
	{
	    sign = "";
	}

	exponent10 = lrint( floor( log10(value) ) );//correctly round to desired precision
	value *= pow(10.0, sig - 1 - exponent10);
	fract = modf(value, &display);
        if(fract >= 0.5){display += 1.0;}
	value = display * pow(10.0, exponent10 - sig + 1);
        if(exponent10 > 0){
	    exponent10 = (exponent10/3)*3;
	}
	else
	{
	    exponent10 = ((-exponent10+3)/3)*(-3);
	}
	value *= pow(10.0, -exponent10);
	if (value >= 1000.0) {
	    value /= 1000.0;
	    exponent10 += 3;
	}
	else
	{
	    if(value >= 100.0){
		sig -= 2;
	    }
	    else
	    {
		if(value >= 10.0){
		    sig -= 1;
		}
	    }
	}
	if(exponent10 == 0){format = 3;}
	if(sig < 1){sig = 1;}
	if(format == 0 || format == 1 || format == 2 || (exponent10 < PREFIX_START) || (exponent10 > PREFIX_END)){
	    if( format == 0){ // 'calculable' presentation
		if( asprintf(&result, "%s%.*f*10^%d", sign, sig-1, value, exponent10) < 0){ free(result); return NULL;} // secure usage of asprintf()
	    }
	    else
	    {
		if( format == 1 ){ // html presentation
		    if( asprintf(&result, "%s%.*f&times;10<sup>%d</sup>", sign, sig-1, value, exponent10) < 0){ free(result);return NULL;} // secure usage of asprintf()
		}
	        else // latex presentation
		{
		    if( asprintf(&result, "%s%.*f \\times 10^{%d}", sign, sig-1, value, exponent10) < 0){ free(result);return NULL;} // secure usage of asprintf()
		}
	    }
	}	    
	else // format = 3 : prefix presentation
	{
	    if( asprintf(&result, "%s%.*f %s", sign, sig-1, value,prefix[(exponent10-PREFIX_START)/3]) < 0){ free(result);return NULL;} // secure usage of asprintf()
	}
	return result;
    }

    double number = 0;
    int significance = 0,type = 0,first = 0,idx = 0,cnt = 1;
    char *input = "\0",*ptr = "\0";

    /* test for illegal characters */
    const char *invalid_characters = "\n\"\'!=ABCDFGHIJKLMNOPQRSTUVWXYZabcdfghijklmnopqrstuvwxyz@#$%^*&()[]{};:~><?/\\|";
    /* Ee +- are allowed : 12.34e+05  12.34e-08 */

    /* walk through argument 1 to end, and call function scienceprint(a,b,c) */
    input = argv[cnt];
    while( input != NULL ){
        while (*input){ // loop through invalid chars.
	    if ( strchr(invalid_characters, *input) ){
		fprintf(stdout,"\nerror : found illegal character in argument\n");
		return(0);
	    }
	    input++;
	}
	// reset input to actual value
	input = argv[cnt];
	ptr = (char *) strtok(input,",");
	idx = 0;
	type = 0;
	while( ptr != NULL ){
	    switch( idx ){
		case 0: number = atof(ptr); break;
		case 1: significance = atoi(ptr); break;
		case 2: type = atoi(ptr); if(type != 0 && type != 1 && type != 2 && type != 3){type = 0;} break;
		default: break;
	    }
	    idx++;
	    ptr = (char *) strtok(NULL,",");
	}
	// number and precision are mandatory:  default type=0 
	if( idx < 2 || idx > 3){fprintf(stdout,"syntax error : number1,significance1,type1 number2,significance2,type2 ... number_n,significance_n,type_n \n");return 0;}
	if(first == 0){ first = 1; fprintf(stdout,"%s", printscience(number, significance, type ) );} else { fprintf(stdout,",%s", printscience(number, significance, type ) );}
	cnt++;
	input = argv[cnt];
    }
    fprintf(stdout,"\n");
    free(result); // free memory pointer
    return 0;
}
