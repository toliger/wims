#! /bin/sh
### execute from wims_home

wims_home=`pwd`;
wims_dirsrc="$wims_home/wimstest/dirsrc";
wims_tmp="$wims_home/wimstest/tmp";
wims_res="$wims_home/wimstest/dirres";
wims_dirtest="$wims_home/wimstest/dirtest";

wims_exec=`ls $wims_home/public_html/modules/moduletest/src`;
echo $wimsexec
mkdir -p $wims_tmp
mkdir -p $wims_tmp/diroef
if [ "$1" ] ; then
  for a in $(seq $#) ; do opt=$1;
    $wims_dirsrc/$opt.sh > $wims_tmp/$opt;
    echo $opt:
    shift
  done;
else
  for i in `ls $wims_dirsrc/*.sh`; do
   j=`basename $i .sh`;
   echo "Testing $j... \c"
   $i > $wims_tmp/$j 2>&1
   if [ "$j" = "oef" ] ; then
     for ii in `ls $wims_dirtest/diroef/*` ; do
      jj=`basename $ii`; echo "Testing $jj... \c"
       if ! cmp $wims_tmp/diroef/$jj $wims_res/diroef/$jj; then
         diff -c $wims_res/diroef/$jj $wims_tmp/diroef/$jj > $wims_tmp/diroef/$jj.diff;
         echo "CHANGE $jj"
       else
         echo "OK $jj";
         rm -f $wims_tmp/diroef/$jj.diff;
       fi
     done
   else
     if ! cmp $wims_tmp/$j $wims_res/$j; then
      diff -c $wims_res/$j $wims_tmp/$j > $wims_tmp/$j.diff;
      echo "CHANGE $j"
     else
      echo "OK $j";
      rm -f $wims_tmp/$j.diff;
     fi
   fi
  done
fi;

#! /bin/sh
list='append
commandtext
evalue
execution
hex
if
list
lookup
matrix
random record replace
solve
sort
texmath text
cutit'

for j in $list ; do
    $wims_home/src/wims test $wims_dirtest $j test> $wims_tmp/$j 2>&1
    echo "Testing $j ...";
     if ! cmp $wims_tmp/$j $wims_res/$j; then
      diff -c $wims_res/$j $wims_tmp/$j > $wims_tmp/$j.diff;
      echo "CHANGE $j"
     else
      echo "OK $j";
      rm -f $wims_tmp/$j.diff;
     fi
done

for j in $wims_exec ; do
  echo "Testing $j ...";
  wget "http://127.0.0.1/wims/wims.cgi?module=moduletest&cmd=new&special_parm=$j" -nv -O  $j.html 2>&1
  $wims_home/wimstest/tag.pl --file=$j --out=$wims_tmp
   if ! cmp $wims_tmp/$j $wims_res/$j; then
      diff -c $wims_res/$j $wims_tmp/$j > $wims_tmp/$j.diff;
      echo "CHANGE $j"
     else
      echo "OK $j"
      rm -f $wims_tmp/$j.diff; rm $j.html;
     fi
done
