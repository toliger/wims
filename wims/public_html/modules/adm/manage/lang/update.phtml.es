!if $wims_read_parm!=$empty
  !goto $wims_read_parm
!endif

!distribute lines Testing mode. Will only write to the testing directory.\
  WIMS system update is under way. Here is the current script output summary.\
  It is the most recent public version of the software. You don't need to update.\
  The most recent public version is\
  You are more recent than the public version! Nothing to update to.\
  Output of last update\
  summary\
  Click here\
into name_test,name_warning, name_mostrecent,name_mostrecent2,name_morerecent,\
  name_output,name_summary,name_click
  
!set name_sorry=!subst Sorry, we have failed to download the new WIMS version from <tt>$download</tt>. Please try again later.
!set name_summary=!subst Summary of the last update: (Please send it to $wims_maintainer in case of error.)
!set name_detailed=!subst Detailed output of the last update: (Please send it to $wims_maintainer in case of error.)
!set name_sorry2=!subst Sorry, the WIMS download site <tt>$download</tt> is unreachable.
!set name_version=!subst This WIMS site is currently under version $wims_version.

!exit
:update
to download WIMS $pubversion from <tt>$download</tt> and update the
server. <b><font color=red>$wims_name_warning</font></b> This will create
momentary unavailabilities of the server.
<em>Don't update when the server is busy.</em>
<p>
<b>Note</b>. Updating the server will not disturb your local resources on it
(classes, exercises, documents, modules under development).
<p>
<b><font color=red>IMPORTANT</font></b> You must make a file permissions
check after the software update!
