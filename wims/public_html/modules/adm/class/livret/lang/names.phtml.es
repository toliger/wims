!let lang_exists=yes
!set classname=<b><font color=green>$wims_classname</font></b>\
 de <b><font color=green>$wims_institutionname</font></b>

!set months=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre

!distribute items Competencia,\
competencia,\
Competencias\
competencias\
Nivel,\
Niveles,\
nivel,\
niveles,\
Todas,\
into name_Competence,name_competence,name_Competences,name_competences,name_n_Palier,name_n_Paliers,name_n_palier,name_n_paliers,name_All

!set name_no_competence=No hay ninguna  $name_competence en este cuaderno !
!set name_noyetparticipant=Esta clase no tiene participante todav�a.
!set name_info=Informaci�n sobre esta $name_competence&nbsp;
!set name_param_change=Ah� tienes los par�metros que puedes cambiar&nbsp;
!set name_color=Color de los fondos de las casillas en funci�n del nivel de validaci�n del  $name_n_palier &nbsp;
!set name_score_modify=Los resultados de los ejercicios de las hojas de trabajo siguientes se neutralizan para el c�lculo de los niveles de adquisici�n de los $name_n_paliers &nbsp;
!set name_cocher=Por  favor seleccione  los ejercicios que desean utilizar para este $name_n_palier.
!set name_selectsheet=Indicar solamente los ejercicios de la hoja


 !distribute items T�tulo de la $name_competence&nbsp;,\
T�tulo del $name_n_palier&nbsp;,\
N�mero de $name_n_paliers&nbsp;,\
de la clase,\
minimal score for validing an item\
into name_title_comp,name_title_palier,name_cnt_palier,name_configtext2,name_configtext3

!! ----------------------------------------------   ajout pour la version 1.04
!let name_nowork=No work
!distribute line Which color panel is used in $name_n_paliers level\
show result in $name_n_paliers level into name_configtext4,name_configtext5
!let name_listscoreoption=de la clase, del cuaderno
!let name_listscoreview=no visualizaci�n, entero, con un decimal, con dos decimales, con tres decimales, con cuatro decimales


!!------------------------------- definici�n de los nombres de v�nculos para wims_menu_items

!if $wims_user=supervisor
 !let tmp=!defof SE_list in wimshome/public_html/modules/home/names.$lang
!else
 !let tmp=!defof U_myscore in wimshome/public_html/modules/home/names.$lang
!endif

!distribute line Nueva competencia \
$tmp\
Cuaderno de la clase \
Cuaderno de $name_competences \
 into wims_name_add_competence,wims_name_go_userlist,wims_name_cls_livret,wims_name_livret

!if $job=addcomp
 !set name_job=!nosubst A�adir/modificar la $name_competence $comp
 !exit
!endif

!if $job=modpalier
  !set name_job=!nosubst Modificar el $name_n_palier $palier (<font color=green>$name_palier</font>) de la $name_competence $comp (<font color=green>$name_comp</font>).
  !exit
!endif

!if $job=user
  !set name_job=!nosubst <font color=green>$user_firstname $user_lastname</font>
!endif



!if $job=delpalier
 !let name_delpalier=!nosubst Etes vous certain de vouloir supprimer le palier $palier ( $mem_palier ) de la comp�tence $comp ( $mem_title ) du livret de comp�tence ?
 !exit
!endif