#! /bin/sh

wims_home=`pwd`;
wims_dirtest="$wims_home/wimstest/dirtest";

export wims_rawmath_variables=T
export wims_rawmath_functions=toto
export wims_warn_rawmath=
export htmlmath_gtlt=
export force_mathml=
$wims_home/src/wims test $wims_dirtest rawmath 't1 t2 t3 t4'
