!set lang_exists=yes

!if $wims_read_parm!=
  !goto $wims_read_parm
!endif

!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>

!set months=En,Feb,Mar,Abr,May,Jun,Jul,Ag,Sept,Oct,Nov,Dic

!set title=Configuraci�n y Administraci�n

!distribute items exercices,feuilles de travail,examens,documents,questionnaires,cahier de texte,\
	comptes des participants,compte d'enseignant,forum de discussion,message du jour,livret de comp�tences,\
	s�quences p�dagogiques,messages du forum\
	into name_exo,name_sheet,name_exam,name_doc,name_vote,name_cdt,\
	name_user,name_sup,name_forum,name_motd,name_livret,name_seq,name_forum_mesg

!distribute items zonas,participantes,ejercicios, documentos, profesores\
into wims_name_zones,wims_name_participants,wims_name_exercises,wims_name_docs,wims_name_teachers


!distribute item message du jour,\
	exercice,feuille de travail,examen,document,participant\
	into name_motd,name_exo,name_sheet,name_exam,name_doc,name_user

!distribute item messages du jour,\
	exercices,feuilles de travail,examens,documents,participants\
	into name_motds,name_exos,name_sheets,name_exams,name_docs,name_users

!if $job=arch
 !set title=Copias de seguridad y Recuperaci�n
 !set name_intro=Vous pouvez t�l�charger une copie de sauvegarde de votre classe, en format   
 !set name_tosend=Pour envoyer une sauvegarde dans votre classe
 !set name_namefile=veuillez donner le nom du fichier de sauvegarde&nbsp;
 !set name_help=on vous demandera de s�lectionner les ressources de la classe � restaurer
 !set name_no_restore=Impossible de restaurer car vous partagez les ressources d'une autre\
	classe. La restauration ne peut �tre faite que par la classe ma�tre du partage.
 !set name_deposit=!nosubst Votre fichier de sauvegarde <tt>$wims_deposit</tt> contient les ressources\
  suivantes. Marquez ce que vous voulez restaurer dans votre classe.

 !distribute lines Aucune ressource � restaurer n'est s�lectionn�e.\
   Restaurer tout sauf la configuration de la classe et le compte d'enseignant.\
   <font color=red>Danger!</font> <small>Voir ci-dessous.</small>\
   Configuration de la classe.\
   Compte d'enseignant (y compris votre mot de passe)\
   comptes de participants\
   Comptes existants\
   documents\
   Documents existants\
   exercices\
   exercices existants\
   feuilles de travail\
   Implique la restauration des exercices\
   Feuilles existantes\
   feuilles d'examen\
   Implique la restauration de feuilles de travail et d'exercices\
   Examens existants\
   messages de discussion\
   Messages existants\
   Registre d'activit�s de participants et scores automatiques. Implique la restauration de comptes de participants.\
   Notes entr�es par l'enseignant\
   Notes existantes\
   un agenda de la classe\
   un agenda existant\
   Un livret de comp�tences\
   un livret existant\
   S�quences p�dagogiques\
   Implique la restauration de feuilles de travail, d'exercices, des examens et des documents\
   S�quences existantes\
   M�thode de restauration\
   Remplacement\
remplacer les ressources existantes par les ressources restaur�es\
   Fusion\
remplacer les ressources existantes except� les comptes de  participants et les exercices de la classe. Pour ces derniers, ceux ayant m�mes noms seront remplac�s par les donn�es restaur�es et les autres seront gard�s\
   Restaurer les ressources s�lectionn�es\
 into name_noselect,name_all,name_danger,name_config,name_teacher,name_part,name_part1,name_doc,\
   name_doc1,name_exo,name_exo1,name_sheet,name_sheet0,name_sheet1,name_exam,name_exam0,name_exam1,name_forum,\
   name_forum1,name_activity,name_manual,name_manual1,name_cdt,name_cdt1,name_livret,name_livret1,name_seq,\
   name_seq0,name_seq1,name_method,name_replace,name_replace1,name_merge,name_merge1,\
   name_selectrestore
   
!distribute lines Ressources de sauvegarde restaur�es dans la classe&nbsp;\
   La restauration des comptes de participants (et des registres d'activit�) est refus�e car il n'y a plus d'espace disponible.\
   La date d'expiration de la classe a �t� modifi�e apr�s la restauration, car la date restaur�e est\
 into name_restore1,name_restore2,name_restore3

 !distribute items m�connaissable, trop t�t, trop tard into ebad,eearly,elate
 
 !distribute lines D�sol�, l'archivage de votre classe n'a pas abouti. Erreur interne.\
  Voici le fichier de sauvegarde de votre classe\
  Cliquez dessus pour l'enregistrer sur votre ordinateur.\
  Vous pouvez aussi s�lectionner les donn�es � sauvegarder. Cliquez alors sur\
  Sauvegarde s�lective\
  pour modifier le fichier de sauvegarde ci-dessus et enregistrez-le.\
 into name_download1,name_download2,name_download3,\
   name_selective1,name_selective2,name_selective3

 !set name_download5=Ce fichier de sauvegarde a une taille qui peut d�passer la limite autoris�e\
  pour un envoi au serveur. Pour r�duire la taille du fichier, vous pouvez aussi\
  s�lectionner les donn�es � sauvegarder
 
 !goto commun
!endif

!if $job=clean
 !set title=Eliminaci�n de la clase
 !set name_lines=lignes dans les registres d'activit� de participants.
 !set name_empty=Votre classe est vide&nbsp;!<p>\
 Il n'y a pas de ressources dans votre classe pouvant �tre effac�es.
 !set name_no_erase=Ne peuvent pas �tre nettoy�s car vous partagez ceux d'une autre classe.

 !distribute lines Nettoyer tout ce qui peut �tre nettoy�\
   Les registres d'activit� seront aussi effac�s\
   Les feuilles d'examen seront aussi effac�es\
   sauvegardez la classe\
   Les ressources actuelles de votre classe\
 into name_cleanall,name_erase1,name_warning_exam,name_saveclass,name_ressource
  !set name_warning_clean=Les ressources effac�es par cette page ne peuvent pas �tre \
 r�cup�r�es &nbsp;! Avant d'effacer quoi que ce soit,
 !goto commun
!endif

!if $job=neighbor
 !set title=Clases vecinas
  !set name_noclass=Vous ne pouvez pas d�finir des classes voisines car il n'y a aucune autre\
 classe sur ce site.
 !set name_toomany=Il y a trop de classes virtuelles sur le site. Donnez un mot cl� pour\
  rechercher les classes qui vous concernent&nbsp;
 !set name_toomany2=Il y a encore trop de classes correspondant � votre recherche. Veuillez\
  donner un mot cl� plus pr�cis.

 !distribute lines Rechercher une classe\
  Aucune classe n'est trouv�e pour votre recherche. R�essayez.\
  Afficher les classes d'exemple du serveur\
  Les relations de voisinage entre des classes virtuelles permettent l'�change de ressources et/ou d�placement entre les classes.\
  Cliquez sur le nom d'une classe pour changer vos relations de voisinage avec elle.\
  Classes dans la m�me langue que la v�tre\
  Classes dans une autre langue\
  Exemples\
into name_research,name_noclass,name_exampleclass,name_help,name_changeneigh,\
  name_samelanguage,name_otherlanguage,name_example

 distribute lines Declaraci�n<br>vecindad\
   Compartir un recurso\
   por usted\
   por otro\
   Relaciones mutuas de compartir activas.\
   Usted comparte sus recursos.\
   Comparte sus recursos.\
   Permisos mutuos para compartir.\
   Tiene permiso para compartir sus recursos.\
   Le permite compartir sus recursos.\
   Arr�ter le partage\
   Partager\
   les importer tous\
   Ressources d'enseignement\
   Importer d'autres ressources\
   Classes pouvant partager vos ressources\
   Ressources permises\
   actif\
   Liste d'autres classes\
   Information partage de ressources\
   Afficher les classes d'exemple du serveur\
 into name_declaration,name_sharing,name_byyou,name_other,name_actif,name_share1,name_share2,\
 name_permit1,name_permit2,name_permit3,name_stopsharing,name_share,name_everybodyimport,name_teaching,\
 name_otherone,name_classsharing,name_ressourceallowed,name_active,name_listclass,name_info,name_exampleclass
 
 !distribute lines Relation de voisinage\
   n'a pas d�clar� votre classe comme voisine\
   vous accepte comme classe voisine pour\
   avec\
   Vous partagez d�j� les ressources suivantes de la classe\
   n'a pas de ressources que vous pouvez importer\
   a les ressources importables suivantes\
   M�me titre dans votre classe\
   Vide\
   en pr�paration\
   Remplacer\
   Login d�j� utilis� dans votre classe\
   Participant effac� existant dans votre classe\
   Importation � partir de la classe\
   Transf�r� avec succ�s\
   comptes de participants de la classe voisine\
   V�rifier le r�sultat\
 into name_neighbor_relation,name_text1,name_text2,name_with,name_sharealready,\
   name_no_ressource,name_importable,name_same_title,name_empty,name_inpreparation,\
   name_replace,name_existinglogin,name_part_erased,name_import,name_transfered,\
   name_neigh_account,name_verify
 
 !set name_inactif=!subst Le(a) $(name_$itype) est mis(e) en �tat inactif pour vous permettre de le\
  modifier si vous le voulez.

 !set name_accept=!nosubst Acceptez-vous la classe <em><font color=blue> $nei_description</font></em>\
   comme votre voisine pour
   
 !if $job2=stopshare
  !set title=Arr�ter un partage
  !set name_warning=Votre classe a un registre d'activit�s actif et les\
 ressources partag�es ne sont pas vides. Si vous arr�tez ce partage\
 maintenant, vous ne pourrez plus les repartager plus tard.\
 <p> �tes-vous s�r de vouloir d�finitivement arr�ter ce partage&nbsp;?
 
 !set name_stop=arr�ter.
 !endif
 !if $job2=sharelist
  !set title= Information de partages de ressources.
  !set name_sharelist=!nosubst Vous partagez $(name_$rec) de
  !distribute lines Vous ne partagez aucune ressource d'autres classes.\
  Vous partagez les ressources d'autres classes\
  into name_noresource,name_resource
  !endif
  
  !if $job2=addshare
  !set title=Compartir los recursos de una clase
  !set name_class_share=La classe <em><font color=blue>$nei_description</font></em> \
      vous permet de partager ses ressources suivantes.
  !distribute lines disponible(s)\
    Vous �tes en cours de partage.\
    Vous ne pouvez pas les partager car vous partagez d�j� celles d'une autre classe.\
    nettoyer vos propres ressources\
    (si c'est possible).\
    Il est tr�s dangereux de partager le compte d'enseignant&nbsp;!\
  into name_available,name_actually_sharing,name_nosharing,name_cleanup,name_ifpossible,\
    name_dangerous
  
  !set name_warning1=Vous ne pouvez pas les partager car vous permettez � d'autres classes\
   de partager VOS ressources du m�me type. Les partages en cascade ne sont pas\
   autoris�s. Donc vous devez d'abord arr�ter les permissions de partage\
   avec l'autre classe avant de pouvoir partager celles de la classe 
  !set name_warning2=!nosubst Vous ne pouvez pas les partager car vos propres $(name_$r) ne sont pas\
   vides. Avant le partage, vous devez d'abord
  !set name_warning_erase=!nosubst Le partage va EFFACER vos $(name_$r) existant(es)&nbsp;! \
     Elles seront d�finitivement perdues si vous n'avez pas de sauvegarde.
   
  !endif
  
  !distribute items ---,<small>enseignant</small>,\
	<small>participants</small>,\
	<small>enseignant et participants</small> into n_n0, n_n1, n_n2, n_n3
	
 !goto commun
!endif

!if $job=connect
 !set title=Conectar a otros servidores / plataformas
 !set name_listserver=Liste de connexions des serveurs

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
 !set title=Configuraci�n del acceso a los recursos
 !goto commun
!endif

!if $job=grestrict
 !set title=Restricci�n del acceso a la puntuaci�n
 !goto commun
!endif

!if $job=present
 !set title=Configuraci�n de la apariencia de la clase
 !goto commun
!endif

!if $job=oefdefault
 !set title=Parametrizaci�n por defecto de los m�dulos OEF
 !distribute Une s�rie aura\
   Niveau de s�v�rit�\
   Chronom�tre\
   secondes\
   Nombre de r�ponses affich�es dans les QCM\
   Donner une solution (si disponible) ?\
   jamais,si la note est non maximale,toujours\
   Toujours afficher une bonne r�ponse dans les QCM.\
   P�nalit� pour mauvaise r�ponse dans les QCM.\
   Afficher la bonne r�ponse.\
   Permettre les indications (si disponibles).\
  into name_series,name_severity,name_chrono,name_secondes,name_qcm,\
    name_solution,name_prompt,name_prompt1,name_prompt2,name_prompt3,name_prompt4

   !set name_warning=Vous pouvez mettre deux nombres dans le chronom�tre, une petite\
     limite suivie d'une plus grande. Dans ce cas, la premi�re limite d�clenche \
   la r�duction du score, qui sera �  0 quand la seconde limite est atteinte.
  
 !goto commun
!endif

!if $job=security
 !set title=Actividades de gesti�n de seguridad disponibles
 !set name_see_activity2=Vous devez �tre l'origine de toutes ces activit�s&nbsp;; si ce \
   n'est pas le cas, il faut v�rifier s'il n'y a pas une fuite de votre mot de passe d'enseignant.
 !set name_see_activity1=Voir l'enregistrement d'activit� de gestion de votre classe
 !distribute lines Configurer la restriction par classe\
 des sites ayant acc�s aux scores.\
 Autres d�finitions de s�curit� dans\ 
 la configuration de la classe\
 into name_restriction1,name_restriction2,name_otherrestriction1,name_otherrestriction2
 !goto commun
!endif

!if $job=authtype
 !set title=Autenticaci�n por un anuario ldap
 !set name_intro_authtype=S�lectionnez <tt>ldap</tt> et remplissez cette page si \
   vous d�sirez utiliser une authentification par un annuaire ldap.
 !goto commun
!endif
!if $job=import
 !set code1=Aucun
 !set code2=$wims_name_yes mais diff�rent
 !set code3=$wims_name_yes, actif et diff�rent
!endif

!if $job=propagate
  !if $wims_supertype=2
   !set name_thisclass=du portail
   !set name_subclasses=sous-classes
  !else
   !set name_thisclass=de la zone actuelle
   !set name_subclasses=zones d�pendantes
  !endif
   
 !distribute lines Configurations envoy�es aux $name_subclasses avec succ�s&nbsp;\
  Vous pouvez choisir d'envoyer les configurations suivantes $name_thisclass � toutes ses $name_subclasses&nbsp;\
 into name_propagate_succes,name_propagate_choose

 !set name_warning=Notez que les $name_subclasses ne r�percuteront pas les changements ult�rieurs \
   des configurations $name_thisclass. Vous devez r�envoyer les changements chaque fois \
   que vous voulez les r�percuter dans les $name_subclasses.

!endif

!if $job=log
  !set name_warning_log=Voici l'enregistrement de certaines activit�s de gestion de votre classe.\
    Cet enregistrement vous permet de v�rifier s'il y a des activit�s suspectes.
!endif

!if $job=index
 !set title=Actualisation de l'index $tit
 !set name_done=Fait.
 !set name_result=R�sultat du script

  !if $job2=structure
   !set tit=des zones
  !endif
  !if $job2=userlist
   !set tit=des participants
  !endif
  !if $job2=teacherlist
   !set tit=des enseignants
  !endif
  !if $job2=oef
   !set tit=des exercices
  !endif
  !if $job2=doc
   !set tit=des documents
  !endif
!endif

!if $job=list
  !distribute line  Nom de l'�tablissement\
    Nom de la classe\
    Mots d'option\
    Compte d�veloppeur Modtool\
    Verrou de connexion\
    Nombre de meilleures notes\
    Limite du nombre de participants\
    Date d'expiration\
    Enregistrement d'exercices\
    Enregistrement d'examens\
    visibles par les �l�ves\
    Modifier l'apparence \
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
!distribute line Autenticaci�n\
Preferencias\
Restricci�n de acceso\
Parametrizaci�n OEF\
Clases vecinas\
Gesti�n de la seguridad\
Eliminaci�n selectiva\
Actualisar\
Otros servidores\
Contrase�as\
zonas inferiores\
Apariencia\
Restricci�n de la puntuaci�n\
Direcci�n de una plataforma\
into wims_name_config_auth,wims_name_config_pref,wims_name_config_restr,wims_name_config_oef,\
wims_name_config_neigh,wims_name_config_secure,wims_name_config_clean,wims_config_refresh,\
wims_name_config_otherserver,wims_name_config_passwd,wims_name_config_propagate,wims_name_config_present,\
wims_name_config_score,wims_name_config_ent

!distribute lines Estaciones de trabajo seguras\
   Hoja de estilo\
   Logo de la clase\
   Posici�n del logo\
   arriba a la izquierda, arriba a la derecha\
   Tema de estilo de la clase\
   Juego de iconos\
   Nivel acad�mico\
   Ordenadores autorizados a las notas\
   Contrase�a de inscripci�n\
   Contrase�a de profesor\
   L�mites de registro de ejercicios y ex�menes\
   V�nculos sobre una plataforma o una p�gina Internet\
   Color de fondo de las p�ginas\
   Color de fondo de los men�s\
   Couleur des liens dans les men�s\
   Imagen de fondo de las p�ginas\
   transferir un fichero css\
   Gama de colores de los resultados (de 0 a 10)\
   into name_secure,name_css,name_logo,name_position_logo,name_logo_side,name_theme,\
   name_theme_icon,name_level,name_security,name_password,name_supass,name_exolog,name_ent,\
   name_background_color,name_menu_color,name_refmenu_color,name_image,name_css_transfer,name_colorscore

!set name_content_style = Puede definir aqu� la hoja de estilo de la clase:\
<br>(lorsque <tt>$name_css</tt>  est sur <tt>class</tt>)&nbsp;:

!set name_content_style2=o copiar aqu� la hoja de estilo de la clase

!exit
:arch

 Vous avez envoy� des ressources sauvegard�es � partir d'une autre classe.
 Si vous restaurez des ressources incompatibles avec votre classe, elle va
 �tre simplement d�truite.
 !href cmd=help&special_parm=dependencies Pourquoi&nbsp;?
 <p>
 !href cmd=reply&job=list Arr�tez
 si vous n'�tes pas compl�tement s�r de ce que vous faites. (Dans tous les
 cas, gardez une sauvegarde de l'�tat actuel avant de continuer.)
 
 :arch_end
 
 <p><b>IMPORTANT</b>. <ul><li>Il n'y a pas de v�rification des donn�es que vous avez
envoy�es et le syst�me n'autorise pas la modification manuelle des archives
de sauvegarde. Les erreurs introduites par une modification manuelle des
archives peuvent entra�ner des comportements impr�visibles de votre classe.

<li> Sauf dans des cas d'absolue n�cessit�, �vitez de restaurer
<font color=red>la configuration de la classe</font> et
<font color=red>le compte d'enseignant</font>.
Les erreurs dans les donn�es envoy�es pour ces deux champs peuvent vous faire
perdre compl�tement le contr�le de votre classe.
<li> Vous pouvez utiliser la sauvegarde d'une classe pour en installer une
nouvelle. Dans ce cas, �vitez de restaurer les registres d'activit�s et les
notes (manuelles et automatiques). Ces deux types de ressources ne peuvent
pas �tre effac�s une fois install�s (mesure de s�curit�). Et beaucoup
d'op�rations de maintenance de la classe sont impossibles quand la
classe contient des notes.
</ul>
!exit

:clean
Vous ne pouvez pas effacer des ressources de la classe
 quand les activit�s de participants ont d�j� commenc�.
 <p>
 Ceci est une mesure de s�curit� importante. Si vous avez envie
 d'outrepasser cette restriction, pensez aux deux aspects suivants.
 <p>
 D'un c�t�, supposons qu'un �tudiant vole votre mot de passe. S'il vient dans
 cette page pour tout effacer, les �tudiants honn�tes vont beaucoup souffrir,
 et vos activit�s d'enseignement seront consid�rablement perturb�es.
 <p>
 D'un autre c�t�, les diff�rentes ressources de la classe sont inter-d�pendantes.
 Si vous effacez certaines ressources sans effacer celles qui en d�pendent,
 votre classe ne fonctionnera plus.
 !href cmd=help&special_parm=dependencies Exemples.
 <p>
 De toute fa�on, si vous voulez vraiment nettoyer cette classe, vous pouvez
 toujours l'effacer (en mettant sa date d'expiration � aujourd'hui&nbsp;
 la classe dispara�tra demain matin), ou
 <a href="mailto:$wims_site_manager?subject=Please erase my class">demander
 au gestionnaire du site</a> de l'effacer pour vous.
 !exit
 
 :clean2
 <p><b>Remarques</b>. 1. Cette page est accessible seulement au moment o� la
classe est en pr�paration. Une fois que les activit�s de participants ont
commenc�, il  n'est plus possible d'effacer des ressources.
<p>
2. Les ressources partag�es par plusieurs classes peuvent seulement �tre
effac�es � partir de la classe ma�tre du partage. Les autres classes doivent
d'abord
!href cmd=reply&job=neighbor&job2=sharelist $name_stopsharing
 des ressources avant de les effacer.
!exit

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
 La feuille de travail que vous voulez importer peut utiliser des exercices
   d�finis dans la classe voisine.
   <p>
   Si les m�mes exercices n'existent pas dans la v�tre, la feuille import�e
   ne fonctionnera pas correctement. Veuillez v�rifier soigneusement que tous
   les exercices de la classe voisine ont un duplicata dans la v�tre.
!exit
:import3
  Les feuilles d'examen sont bas�es sur les feuilles
   de travail pour constituer leurs contenus. <p>
   Importer une feuille d'examen n'a de sens que si vous avez exactement les
   m�mes feuilles de travail que la classe voisine et si ces feuilles sont
   rang�es dans le m�me ordre dans les deux classes.
   <p>
   Si ce n'est pas le cas, la feuille d'examen import�e ne pourra qu'avoir
   des comportements erratiques.
!exit 
:import4

Vous �tes sur le point de remplacer un(e) $(name_$itype)
  existant(e) de votre classe par la ressource import�e. Il n'y aura aucune
  possibilit� de retour en arri�re apr�s cette op�ration.

!exit
:import5
 Aucun compte de participant n'est ajout� � votre classe. V�rifiez si votre
 classe est pleine (et s'il y a encore de la place dans le site pour ajouter
 de nouveaux participants).
!exit

:auth1
Cet outil de configuration est seulement accessible aux postes s�rs.
<p>
Comme vous n'avez pas d�fini de poste s�r, nous v�rifions votre
authentification en vous envoyant un code secret � votre adresse �lectronique.
Veuillez lire vos mails, prendre le code, et le taper ci-dessous&nbsp;:
<p>

!exit
:auth2
<b>Notes</b>. Cette authentification sert � assurer que m�me si votre mot
de passe est vol� ou perdu, les dommages � votre classe seront limit�s. 
La proc�dure d'authentification est simplifi�e si vous d�finissez des
postes s�rs correctement, tout en gardant un haut niveau de s�curit�.
!exit

:download
<p><b>Remarque</b>. Ce sont d'habitude les
registres d'activit�s de participants, messages de discussion et les
documents de la classe qui forment l'essentiel de la taille du fichier. Vous pouvez
faire plusieurs sauvegardes s�lectives pour diff�rentes ressources.

!exit