#! /bin/sh

wims_home=`pwd`;
wims_dirtest="$wims_home/wimstest/dirtest";

test="test1 test2 test3 test4"

for a in $test; do
 $wims_home/src/wims test $wims_dirtest lookup $a
done;
