!! to be checked
!distribute items $wims_read_parm into r_,date_ 
!goto $r_
:1
!formselect jyear from $creyear to $expyear
!formselect jmonth from 1 to 12 prompt $months
!formselect jday from 1 to 31
!exit

:2
!formselect byear$i from $creyear to $expyear
!formselect bmonth$i from 1 to 12 prompt $months
!formselect bday$i from 1 to 31
!exit

:3
!formselect bhour$i list 08,09,10,11,12,13,14,15,16,17,18,19,20
!formselect bmin$i list 00,05,10,15,20,25,30,35,40,45,50,55
!exit

:4
!formselect ehour$i list 08,09,10,11,12,13,14,15,16,17,18,19,20
!formselect emin$i list 00,05,10,15,20,25,30,35,40,45,50,55
!exit

:33
!formselect jyear from $creyear to $expyear
!formselect jmonth from 1 to 12 prompt $months
!formselect jday list 0,$v prompt ---,$v
!exit

:44
!formselect jyear2 list 0,$v1 prompt ---,$v1
!formselect jmonth2 from 0 to 12 prompt ---,$months
!formselect jday2 list 0,$v prompt ---,$v
!exit

:5
!let year=!char 1 to 4 of $date_
!let month=!char 5 to 6 of $date_
!let day=!char 7 to 8 of $date_
!if $cdt_nbmonth>12  
 $year/$month/$day
!else 
 $month/$day
!endif
!exit