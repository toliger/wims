!let lang_exists=yes
!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>

!set months=janvier,f�vrier,mars,avril,mai,juin,juillet,ao�t,septembre,octobre,novembre,d�cembre

!distribute items Comp�tence,\
comp�tence,\
Comp�tences,\
comp�tences,\
Palier,\
Paliers,\
palier,\
paliers,\
Toutes,\
into name_Competence,name_competence,name_Competences,name_competences,name_n_Palier,name_n_Paliers,name_n_palier,name_n_paliers,name_all

!set name_no_competence=Il n'y a aucune $name_competence dans ce livret !
!set name_noyetparticipant=Cette classe n'a pas encore de participant.
!set name_info=Informations sur cette $name_competence&nbsp;
!set name_param_change=Voici les param�tres que vous pouvez changer&nbsp;
!set name_color=Couleur des fonds des cases en fonction du niveau de validation du $name_n_palier &nbsp;
!set name_score_modify=Les scores des exercices des feuilles de travail suivantes sont neutralis�s pour le calcul des niveaux d'acquisition des $name_n_paliers &nbsp;
!set name_cocher=Veuillez cocher les exercices que vous souhaitez utiliser pour ce $name_n_palier.
!set name_see=Afficher seulement les exercices de la feuille


 !distribute items Titre de la $name_comptences&nbsp;,\
Titre du $name_n_palier&nbsp;,\
Nombre de $name_n_paliers&nbsp;,\
Ces couleurs peuvent �tre modifi�es dans le,\
panneau de configuration,\
de la classe\
into name_title_comp,name_title_palier,name_cnt_palier,name_configtext1,name_configlink,name_configtext2

!if $job=addcomp
 !set name_job=!nosubst Ajouter/Modifier la $name_competence $comp
 !exit
!endif

!if $job=modpalier
  !set name_job=!nosubst Modifier le $name_n_palier $palier (<font color=green>$name_palier</font>) de la $name_competence $comp (<font color=green>$name_comp</font>).
  !exit
!endif

!if $job=user
  !set name_job=!nosubst <font color=green>$user_firstname $user_lastname</font>
!endif

!!------------------------------- definition des noms de liens pour wims_menu_items

!if $wims_user=supervisor
 !let tmp= Gesti�n de los participantes y notas 
!else 
 !let tmp= Mis notas 
!endif
!distribute line Nueva competencia \
Configurar \
$tmp\
Cuaderno de la clase \
Cuaderno de competencias \
 into wims_name_add_competence,wims_name_config,wims_name_go_userlist,wims_name_cls_livret,wims_name_livret 

