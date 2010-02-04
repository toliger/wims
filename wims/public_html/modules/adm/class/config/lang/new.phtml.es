<p>
!if $backdays>7
 !if $backdays>100
  Your class is not backed up for more than 100 days.
 !else
  Last backup of your class: $backdays days ago.
 !endif
 !if backup iswordof $warn
  <p><font color=red><b>WARNING.</b></font>
  It is the teachers' responsability to backup their own teaching resources!
  Don't count on the server's backup for your lost work. Moreover,
  virtual classes not regularly
  backed up will be considered as inactive and unimportant by the software,
  and may be erased at any time to make space for others.
 !else
  <p> Protect yourself against server incidents!
 !endif
 !href cmd=reply&job=arch Backup the class
 regularly.
 <p>
!endif

!if creation iswordof $warn
 <p><b>WARNING</b>. Your virtual class is too old! It already has $creatdays days.
 <p>
 It is highly recommended that you regenerate a new virtual class structure at
 the end of each academic year. Continue using an old virtual class structure over
 the years will result in registry file and disk quota overflow, which risks
 to block access to your class at crucial moments.
 !if $class_type notin 13
  <p>
  Here is how to regerate your virtual class without recreating your teaching
  resources.
  <ol>
  <li><p>
  !href cmd=reply&job=arch Backup
  your class at the end of the academic year.
  <li><p>
  <a href="$wims_ref_name?lang=$lang&module=adm/class/regclass">Create</a>
  a new virtual class (or class group or institution gateway) at the beginning
  of the next academic year.
  <li><p>Restore the teaching resources you backed up to the new class.
  (Without restoring student accounts and activities that are obsolete.)
  </ol>
 !else
  <p>
  Please tell this to the administrator of the class group gateway to which
  your class belongs.
  <p>
  You can
  !href cmd=reply&job=arch backup
  the teaching resources of your current class then retore them to the newly
  created one.
 !endif
!endif

!if $warn=$empty
 !set job=list
 <p>
 !changeto list.phtml
!else
 <p><center>
  !href cmd=reply&job=list Continue with class maintenance.
 </center>
!endif


