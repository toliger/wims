!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set classname=<b><font color=green>$wims_classname</font></b>\
 of <b><font color=green>$wims_institutionname</font></b>

!set months=Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sept,Oct,Nov,Dec

!set title=Configuration and Maintenance

!distribute items exercices,feuilles de travail,examens,documents,questionnaires,cahier de texte,\
	comptes des participants,compte d'enseignant,forum de discussion,message du jour,livret de comp�tences,\
	s�quences p�dagogiques,messages du forum\
	into name_exo,name_sheet,name_exam,name_doc,name_vote,name_cdt,\
	name_user,name_sup,name_forum,name_motd,name_livret,name_seq,name_forum_mesg

!distribute items zones,participants,exercices,documents,enseignants,feuilles d'exercices\
into wims_name_zones,wims_name_participants,wims_name_exercises,wims_name_docs,wims_name_teachers,\
name_sheets

!distribute item messages of the day,\
	exercise,worksheet,exam,document,participant\
	into name_motd,name_exo,name_sheet,name_exam,name_doc,name_user	

!distribute item messages of the day,\
	exercises,worksheets,exams,documents,participants\
	into name_motds,name_exos,name_sheets,name_exams,name_docs,name_users

!if $job=arch
 !set title=Backup and Restoration
 !set name_intro=You can download a backup copy of your class, in the following format 
 !set name_tosend=To upload backup archives into your class, please give the backup file name
 !set name_namefile=veuillez donner le nom du fichier de sauvegarde
 !set name_help=You will be prompted for the selection of resources to restore to your class.
 
 !set name_deposit=!nosubst Your backup file <tt>$wims_deposit</tt> contains the following resources.
Please check those you want to restore to your class.
 
 !set name_no_restore=Cannot be restored because you are sharing resources of\
	another class. Restoration can only be done on the class originating\
	the sharing.
  !distribute lines Nothing is selected for restoration.\
   Restore everything except class configuration and supervisor account.\
 <font color=red>Danger!</font> <small>See notes below.</small>\
   Class configuration setup.\
    Supervisor account (including your password)\
   participant accounts\
   Existing accounts\
   documents\
   Existing documents\
   exercices\
   Existing exercises\
   worksheets\
   Implies restoration of class exercises\
   Existing sheets\
   exam sheets\
   Implies restoration of work sheets and exercises\
   Existing exams\
   forum messages\
   Existing messages\
   Participant activity register and server-computed scores. Implies restoration participant accounts.\
   Teacher-defined grades\
   Existing grades\
   un agenda de la classe\
   un agenda existant\
   Un livret de comp�tences\
   un livret existant\
   S�quences p�dagogiques\
   Implique la restauration de feuilles de travail, d'exercices, des examens et des documents\
   S�quences existantes\
   Restoration method\
   Replacement\
   replace existing corresponding resources by restored ones.\
   Merge\
   replace existing corresponding resources except participant accounts and class exercises; for the latter, those with the same name will be replaced byrestored data, while the others will remain\
   Restore the selected resources\
 into name_noselect,name_all,name_danger,name_config,name_teacher,name_part,name_part1,name_doc,\
   name_doc1,name_exo,name_exo1,name_sheet,name_sheet0,name_sheet1,name_exam,name_exam0,name_exam1,name_forum,\
   name_forum1,name_activity,name_manual,name_manual1,name_cdt,name_cdt1,name_livret,name_livret1,name_seq,\
   name_seq0,name_seq1,name_method,name_replace,name_replace1,name_merge,name_merge1,\
   name_selectrestore
   
!distribute lines Backup resources restored to the class\
  Restoration of participant accounts (as well as activity register) is refused because there is not enough space left.\
  Class expiration date has been modified after restoration, because the uploaded date is\
into name_restore1,name_restore2,name_restore3

 !distribute items unrecognizable, too early, too late into ebad,eearly,elate
 
 !distribute lines Sorry, we have failed to archive your class.\
   Here is the backup file of your class\
  Cliquez dessus pour l'enregistrer sur votre ordinateur.\
  You can also make a \
  selective backup\
  to modify the backup file and save it.\
 into name_download1,name_download2,name_download3,name_download4,name_download5,\
   name_selective1,name_selective2,name_selective3

 !set name_download5=This backup file may be too big to be sent back to the server (which limits
 the size of file it accepts). In order to reduce the backup size, you can
 make a selective backup
  
 !goto commun
!endif

!if $job=clean
 !set title=Clean up the class
 !set name_lines=participant activity lines
 !set name_empty=Your class is empty!<p> There is no resource in your class that can be cleaned up.
 !set name_no_erase=Cannot be cleaned because you are sharing those of another class.

 !distribute lines Clean up everything cleanable\
   Will also erase activity register\
   Will also erase exam sheets\
   Backup the class\
   Actual resources in your class\
 into name_cleanall,name_erase1,name_warning_exam,name_saveclass,name_ressource
  !set name_warning_clean=Resources erased by this page cannot be recovered!
 !goto commun
!endif

!if $job=neighbor
 !set title=Class neighbors
 !set name_noclass=You cannot define class neighbors because there is no other class on this site.
 !set name_toomany=here are too many virtual classes on this site. Please give a keyword\
  to search for classes that you want.
 !set name_toomany2= There are too many classes corresponding to your search. Please
  give a more precise keyword.

 !distribute lines Search for a class\
  No class is found for your search. Try again.\
  Neighboring relations between virtual classes allow resource exchange and/or inter-class travel.\
 Click on a class name to change your neighboring properties with it.\
 Classes in the same language as yours\
  Classes in other languages\
  Examples\
into name_research,name_noclass,name_exampleclass,name_help,name_changeneigh,\
  name_samelanguage,name_otherlanguage,name_example

 !distribute lines Neighborhood<br>declaration\
   Resource sharing\
   by you\
   by the other\
   Active mutually sharing.\
   You are sharing its resources.\
   Sharing your resources.\
   Mutually allowing sharings.\
   Allowed to share your resources.\
   Allows you to share its resources.\
   Stop this sharing\
   Share\
   import everybody\
   Teaching resources\
   Import other resources\
   Classes allowed to share your resources\
   Resource allowed\
   active\
   List of other classes\
   Resource sharing info\
   Afficher les classes d'exemple du serveur\
 into name_declaration,name_sharing,name_byyou,name_other,name_actif,name_share1,name_share2,\
 name_permit1,name_permit2,name_permit3,name_stopsharing,name_share,name_everybodyimport,name_teaching,\
 name_otherone,name_classsharing,name_ressourceallowed,name_active,name_listclass,name_info,name_exampleclass
 
 !distribute lines Neighboring relations\
   has not declared yours as its neighbor\
   accepts yours as its neighbor for\
   with\
   You are sharing the following resources originating from the class\
   has no importable resources for you\
   has the following importable resources\
   Same title in your class\
   Empty\
   under preparation\
   Replace\
   Login name already in use in your class\
   Erased user exists in your class\
   Importation from the class\
   Successfully transfered\
   participant accounts from the neighbor\
   Verify the result\
 into name_neighbor_relation,name_text1,name_text2,name_with,name_sharealready,\
   name_no_ressource,name_importable,name_same_title,name_empty,name_inpreparation,\
   name_replace,name_existinglogin,name_part_erased,name_import,name_transfered,\
   name_neigh_account,name_verify

 !set name_inactif=!subst The imported $(name_$itype) is put to inactive status, so that you can
  modify it if you wish.
 
 !set name_accept=!nosubstDo you accept the class <em><font color=blue>\
   $nei_description</font></em> as your neighbor for?
   
 !if $job2=stopshare
  !set title=Stop sharing
  !set name_warning=Your class has active score register, and the shared\
 resources are not empty. If you stop this sharing now, you \
 cannot share them back again later.\
 <p>Are you sure you want to definitely stop this sharing?
 
 !set name_stop=stop it.
 !endif
 !if $job2=sharelist
  !set title= Resource sharing information.
  !set name_sharelist=!nosubst You are sharing $(name_$rec) originating from
  !distribute  You are not sharing resources originating from other classes.\
   You are sharing resources of other classes\
  into name_noresource,name_resource
  !endif
  
  !if $job2=addshare
    !set title=Share resources on class 
    !set name_class_share=This class <em><font color=blue>$nei_description</font></em>\
      allows you to share its following resources.
  !distribute lines available\
    You are actually sharing them.\
    You cannot share them because you are already sharing that of another class.\
    clean your own resources\
    if it is possible\
    Sharing supervisor account is VERY dangerous! \
  into name_available,name_actually_sharing,name_nosharing,name_cleanup,name_ifpossible,\
    name_dangerous
  
  !set name_warning1=You cannot share them because you are allowing other \
    classes to share such resources from you. Cascaded sharing is not \
    supported. So you must stop allowing these shares before you can share from others.
  !set name_warning2=!nosubst You cannot share them because your own $(name_$r) are not empty.
   Before sharing can be made, you should first
  !set name_warning_erase=!nosubst This will ERASE your own existing $(name_$r)! They will be definitely\
     lost if you have no backup.
   
  !endif
  
  !distribute items ---,<small>supervisor</small>,\
	<small>participants</small>,\
	<small>everybody</small> into n_n0, n_n1, n_n2, n_n3
	
 !goto commun
!endif

!if $job=connect
 !set title=Connect to other servers / platforms
 !set name_listserver=List of server connections

 !distribute Test a server connection\
   Test a connected class\
   Add a connecting class\
   Manage a connected class\
   local class, remote class\
   class definition, user list, score averages, score details,all but class definition\
   Remote class\
   Remote server\
   Synchronize\
   (with the other one) for\
   Manage\
   Destroy remote class\
   This connection to the remote server is working.\
   The connection has been added to your class, but the remote server returns an error message\
   The remote server does not reply. Please report to the\
  The connection is rejected by the remote server. Error message\
  Checked remote class\
  This connection is working. Data returned from the remote class\
  To connect to a class on the above server, please specify\
  Identifier of the remote class\
  If the remote class is empty, the server will create a new class on the remote server, duplicating the properties of this one.\
  Automatically update the remote class for changes made on this one\
  Allow the remote class to modify this one\
  This class has no connections to other servers.\
  You have declared the following connections to other servers.\
  Server\
  Actually, this WIMS server has the following connectable servers.\
 into wims_name_connecttest,wims_name_classtest,wims_name_addconnection,wims_name_connectmanage,name_prompt1,\
   name_prompt2,name_synchronize,name_withotherone,name_remoteclass,name_remoteserver,wims_name_Manage,\
   wims_name_destroy,name_working,name_error1,name_errornoreply,name_errorreject,name_check,name_data,\
   name_toconnect,name_identifier,name_help,name_automatically,name_allow,name_noconnection,name_declaration,\
   wims_name_server,name_listserver

 !goto commun
!endif

!if $job=access
 !set title=Resource access configuration
 !goto commun
!endif

!if $job=grestrict
 !set title=Score restriction
 !goto commun
!endif

!if $job=present
 !set title=Configuration of appearances of the class.
 !goto commun
!endif

!if $job=oefdefault
 !set title=Default configuration for OEF modules
  !distribute One series will have\
   Level of severity\
   Time limit\
   seconds\
   Number of items shown in multiple choices\
   Give solution (if available) ?\
   never,if the score is not maximal,always\
   Always contain good reply\
   Penalty for bad replies in multiple choices.\
   Show good reply.\
   Allow hint (if available).\
  into name_series,name_severity,name_chrono,name_secondes,name_qcm,\
    name_solution,name_prompt,name_prompt1,name_prompt2,name_prompt3,name_prompt4

   !set name_warning=ou can put two numbers into the time limit,a smaller limit followed by a bigger one.\
In this case, the first limit starts score reduction, which will got to 0 if the second limit is reached.
  
 !goto commun
!endif

!if $job=security
 !set title=Available security management activities
 !set name_see_activity2=You should be the origin of all these activities; if this is not \
   the case, you should verify where there is a leak of your supervisor's password.
 !set name_see_activity1=See the log file of management activities of your class. 
 !distribute lines Set up the class-wide restriction\
 of sites allowed to get scores.\
 Other security setups in the\ 
 class configuration\
 into name_restriction1,name_restriction2,name_otherrestriction1,name_otherrestriction2
 !goto commun
!endif

!if $job=authtype
 !set title=Ldap authentification
 !set name_intro_authtype=Select <tt>ldap</tt> and fill in this page if \
   you use an authentification by ldap.
 !goto commun
!endif

!if $job=import
 !set code1=None
 !set code2=$wims_name_yes but different
 !set code3=$wims_name_yes, active and different
!endif

!if $job=propagate
  !if $wims_supertype=2
   !set name_thisclass=du portail
   !set name_subclasses=sous-classes
  !else
   !set name_thisclass=de la zone actuelle
   !set name_subclasses=zones d�pendantes
  !endif
   
 !distribute lines Setups successfully sent to $name_subclasses\
  You can choose to send the following setups of the $name_thisclass to all its $name_subclasses\
 into name_propagate_succes,name_propagate_choose

 !set name_warning=Please note that $name_subclasses will not automatically share later \
   changes of the setups of $name_thisclass. You must send the changes each time you \
   want them to be effective in $name_subclasses.

!endif

!if $job=log
  !set name_warning_log=Here is the log of certain managing activities of your class. This log\
allows you to verify whether there are suspicious activities.
!endif

!if $job=index
  !set title=!nosusbt Actualisation de l'index $tit
  !set name_done=Done
  !set name_result=Script output

  !if $job2=structure
   !set tit=Subclass index update
  !endif
  !if $job2=userlist
   !set tit=Participant index update
  !endif
  !if $job2=teacherlist
   !set tit=Teacher index update
  !endif
  !if $job2=oef
   !set tit=Exercise index update
  !endif
  !if $job2=doc
    !set tit=Document index update
   !endif
!endif

!if $job=list
  !distribute line Institution name\
    Class name\
    Option words\
    Modtool Account\
    Connection lock level\
    Number of the best scores\
    Participant number limit\
    Expiration date\
    Registration of exercises\
    Registration of exams\
    visible by students\
    Other configurations\
    Pr�f�rences personnelles\
    R�percuter les configurations aux zones d�pendantes\
    D�finir des classes voisines\
    des liens vers d'autres serveurs\
    Utiliser une authentification\
    des participants par annuaire ldap\
    Actualiser les index\
   dont le changement de\
    Faire une sauvegarde ou restauration de la classe\
    restreindre les ressources accessibles\
    restreindre les sites \
    pour lequels les scores sont enregistr�s\
    faire un nettoyage s�lectif\
   Configurer les\
    Utilisation actuelle d'espace disque\
    La limite est\
  into name_name_institution,name_name_class,name_optionword,name_devaccount,name_lock_level,\
    name_bestscore,name_limit,name_expirationdate,name_register_exo,name_register_exam,\
    name_visible,name_apparence,name_pref,name_dependant_zone,name_neigh,name_link,name_useauth,name_ldap,name_index,\
    name_change,name_load,name_restriction1,name_restriction2,name_score,name_clean,\
    name_config,name_disk,name_limit

!endif

:commun
!distribute line Authentification\
My personal preferences\
Resource restrictions\
OEF configuration\
Class neighbors\
Security management\
Selective cleanup\
Rebuild\
Other servers\
Passwords\
Send setups to subclasses\
Appearances\
Score restriction\
Platform address\
of\
into wims_name_config_auth,wims_name_config_pref,wims_name_config_restr,wims_name_config_oef,\
wims_name_config_neigh,wims_name_config_secure,wims_name_config_clean,wims_config_refresh,\
wims_name_config_otherserver,wims_name_config_passwd,wims_name_config_propagate,wims_name_config_present,\
wims_name_config_score,wims_name_config_ent,name_of

!distribute lines Secure hosts\
   Style sheet\
   Logo of the class\
   Position of the logo\
   top left corner, top right corner\
   Style theme of the class\
   Icones\
   Academic level\
   Hosts allowed for scores\
   Password for participant registration\
   Supervisor password\
   Registration limits of exercises and exams\
   Links on another plateform\
   Page background color\
   Menu background color\
   Menu link color\
   Background image file\
   download a css-style file\
   D�grad� de couleurs des scores (de 0 � 10) \
  into name_secure,name_css,name_logo,name_position_logo,name_logo_side,name_theme,\
   name_theme_icon,name_level,name_security,name_password,name_supass,name_exolog,name_ent,\
   name_background_color,name_menu_color,name_refmenu_color,name_image,name_css_transfer,name_colorscore

!set name_content_style = You can define your class-wide stylesheet here\
<br>(when <tt>$name_css</tt> is on <tt>class</tt>)&nbsp;:

!set name_content_style2=or copy here the css stylesheet

!exit
:arch

 You have uploaded resources backed up from another class. If you
 restore incompatible resources to your class, it will simply be destroyed.
 !href cmd=help&special_parm=dependencies Why?
 <p>
 !href cmd=reply&job=list Stop
 if you are not completely sure of what you are doing. (In any case, keep a
 backup of the current status before continuing.)
 
 :arch_end
 <p><b>IMPORTANT</b>. <ul><li> There is no check of integrity in your uploaded data,
and manual modification of the backup archives is not supported by the
system. Errors introduced by manual modification of archives will result
in unpredictable behavior of your class.

<li> Whenever possible, avoid restoring 
<font color=red>class configuration</font> and
<font color=red>supervisor account</font>.
Errors in the uploaded data for these two fields may make you
completely lose control of your class.

<li> You can use the backup of a class to install a new one. In this case,
avoid restoring scores and grades (server-computed and manual). These two
resources cannot be erased once they are installed (security measure).
And many class maintenance operations will be unavailable if there are
non-empty score data.
</ul>
!exit

:clean
You cannot erase resources of the class
 when participant activities have already started.
 <p>
 This is an important security measure. If you feel that it is an
 inconvenience, think of the following two aspects.
 <p>
 On the one hand, suppose that a student steals your password. If (s)he
 comes to this page and erases everything, honest students will
 suffer a lot, and your teaching activities will be greatly disturbed.
 <p>
 On the other hand, different resources of the class are inter-dependent.
 If you
 erase some resources without erasing those depending on them, your class
 will no longer work.
 !href cmd=help&special_parm=dependencies Examples.
 <p>
 Anyway, if you really want to clean this class, you can always expire it
 (by setting its expiration date to today; the class will disappear the next
 morning), or
 <a href="mailto:$wims_site_manager?subject=Please erase my class">ask
 the site manager</a> to erase it for you.
 
 !exit
 
 :clean2
<b>Remark</b>. 1. This page is only available when the class is being set
up. Once student activity has started, cleaning will no longer be possible.
<p>
2. Shared resources can only be cleaned from the class
originating the sharing. The other class should first
!href cmd=reply&job=neighbor&job2=sharelist stop the sharing
 of the resources before erasing them.

:connect_first_info
Server / platform connection allows your class to directly communicate with
one on another WIMS server or another web e-learning platform. Participants
can transparently navigate between the connected classes.
<p>
In particular, you can mirror this class to a remote WIMS server,
so that if this server becomes momentarily unavailable, work
may continue on the mirror class. Scores on the mirror can be merged later.
!exit
:connect_first

This WIMS server has not declared any connectable remote server. In order
 to use this connection feature, the
 <a href="mailto:$wims_site_manager?subject=server connection">site
 manager</a> must declare such remote server, and the remote server must also
 declare this WIMS server as connectable. 
 (The site manager can refer to the file
 <tt>$basedir/log/classes/.connections/myself</tt> for details of how to
 declare site connections.)
 
 !exit
 
:import2
 The work sheet you want to import may use exercises defined in the
   neighboring class.
   <p>
   If the same exercises do not exist in your class, the imported worksheet
   won't work correctly. Please verify carefully whether all the class
   exercises in the neighbor are duplicated in your class.
:import3
   Exam sheets are based on work sheets to make up their
   contents. <p>
   Importing an exam sheet makes sense only if you have exactly the same 
   active work sheets as your neighbor, and only if these sheets are in the
   same order within the two classes.
   <p>
   If this is not the case, the imported exam sheet will almost certainly
   behave erratically.
!exit 
:import4

You are about to replace an existing $(name_$itype)
  in your class by
  the imported resource. No recovery will be possible after this
  operation, and your existing $(name_$itype), which is different from the
  imported one, will be definitely lost.
!exit

:import5
 Aucun compte de participant n'est ajout� � votre classe. V�rifiez si votre
 classe est pleine (et s'il y a encore de la place dans le site pour ajouter
 de nouveaux participants).
!exit

:auth1
This configuration tool is only accessible to secure hosts.
<p>
As you haven't defined any secure hosts, we are checking your authentification
by sending a secret code to your email address. Please check your mail, pick
the code, and type it below.

!exit
:auth2

<b>Note</b>. This authentification is to ensure that even if your password
is stolen or leaked, damages to your class will be limited.
Defining correct secure hosts will simplify the class
configuration procedure, while keeping a high security level.
!exit

:download
<b>Remark</b>. Depending on the class activities, usually it is participant
activities, forum messages and class documents that are of large size. You
may also consider the possibility of making several selective backups for
different resources.

!exit