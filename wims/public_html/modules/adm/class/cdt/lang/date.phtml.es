
!distribute items $wims_read_parm into r_,date_ 
!goto $r_
:1
!formselect jday from 1 to 31
!formselect jmonth from 1 to 12 prompt $months
!formselect jyear from $creyear to $expyear
!exit

:2
!formselect dday$i from 1 to 31
!formselect dmonth$i from 1 to 12 prompt $months
!formselect dyear$i from $creyear to $expyear
!exit

:3
!formselect jday list 0,$v prompt ---,$v
!formselect jmonth from 1 to 12 prompt $months
!formselect jyear from $creyear to $expyear
!exit

:4
!formselect jday2 list 0,$v prompt ---,$v
!formselect jmonth2 from 0 to 12 prompt ---,$months
!formselect jyear2 list 0,$v1 prompt ---,$v1
!exit

:5
!let day=!char 7 to 8 of $date_
!let month=!char 5 to 6 of $date_
!let year=!char 1 to 4 of $date_
!if $cdt_nbmonth>12  
 $day/$month/$year
!else 
 $day/$month
!endif
!exit