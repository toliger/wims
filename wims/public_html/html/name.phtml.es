!if $wims_name_home!=$empty
 !exit
!endif

!distribute items Buscar,\
		Al trabajo,Volver al trabajo,\
		P�gina inicial de WIMS,Introducci�n/Configuraci�n,Ayuda,Acerca de,\
		Introducci�n,\
		Cerrar esta ventana,Atr�s,\
		Administrador del sitio,Autor de la p�gina,Autores de la p�gina,\
		Traducido por,Salir,\
		Ayuda de WIMS,Referencias,\
		Foro de discusi�n,Foro,\
		Hoja de trabajo,Herramientas,\
		Copiar a Modtool,\
		Print,\
		Importar a su clase,\
		Versi�n imprimible,\
		Otro nuevo\
	into wims_name_search,\
	wims_name_work,wims_name_resume,\
	wims_name_home,wims_name_intro,wims_name_help,wims_name_about,\
	wims_name_titleintro,\
	wims_name_back,wims_name_back2,\
	wims_name_manager,wims_name_author,wims_name_authors,\
	wims_name_translatedby,wims_name_exit,\
	wims_name_whelp,wims_name_ref,wims_name_forum,wims_name_forums,\
	wims_name_sheet,wims_name_tools,\
	wims_name_modify,wims_name_print,wims_name_import,\
	wims_name_printable,wims_name_renew

!if $wims_class!=$empty
 !distribute items P�gina principal de la clase,\
                Inserte en$ una hoja de trabajo,\
		Escriba al profesor,Cierre la clase,\
		El registro de puntuaci�n est� cerrado.,\
		Ha suspendido el registro de puntuaci�n.,\
		Usted es el profesor de la clase,\
		Registrar los detalles de este ejercicio,\
		P�gina de gesti�n de las hojas de trabajo\
	into wims_name_home,wims_name_add,\
	wims_name_wsup,wims_name_visitor,\
	wims_name_scoreclose,\
	wims_name_scoresuspend,\
	wims_name_syou,\
	wims_name_exolog,\
	wims_name_sheetmanagement
 !set wims_name_score=!nosubst Ha conseguido $[$wims_homeref_got] de \
	$[$wims_homeref_req] puntos en este trabajo. <br>Puntuaci�n media \
	$[$wims_homeref_mean]/10.
 !set wims_name_you=usted es <b>$wims_firstname $wims_lastname</b>, accediendo a
 !if _exam isin $session
  !distribute items Otros ejercicios del examen,\
	Tiempo restante de examen:,\
	cuando se cargue esta p�gina\
	into wims_name_back,wims_name_examremain,wims_name_whenloaded
 !endif
 !if _check isin $session
  !let wims_page_name=Page
 !endif
!endif

!if adm/class isin $module
 !distribute line �rea de los profesores\
	�rea de los estudiantes\
	Clases de ejemplo\
	Autentificaci�n del profesor\
	Autentificaci�n de los participantes\
	Ense�anza primaria\
	Ense�anza secundaria\
	Universidad\
	into wims_name_n_supervisor,wims_name_n_participant,wims_name_n_example,\
	wims_name_n_authsupervisor,wims_name_n_authparticipant,wims_name_n_E,wims_name_n_H,wims_name_n_U
!endif

!if adm/new isin $module
  !distribute line nuevos m�dulos\
  actualizaciones de m�dulos\
  �ltimos cambios del sistema\
  RSS\
  into wims_name_mod_new,wims_name_mod_modif,wims_name_mod_sys,wims_name_rss
!endif

!if $wims_user=$empty
  !distribute line Create a class\
  into wims_name_classcreate
!endif

!if adm/modtool isin $module
  !distribute line Test the module\
   Document manager\
   Module content\
   Other files\
   Properties\
   Save\
   Check diff\
   Publish it\
   New Module\
   List of modules\
   Binary files\
   Backup the module\
   Modtool\
   Createxo\
   Quicktool\
   Latex2wims\
   Account properties\
 into wims_name_test,wims_name_docgestion,wims_name_modcontent,wims_name_otherfiles,\
wims_name_properties,wims_name_modsave,wims_name_checkdiff,wims_name_publish,wims_name_createnew,\
wims_name_modlist,wims_name_binfile,wims_name_restore,wims_name_modtool,\
wims_name_createxo,wims_name_quicktool,wims_name_latex2wims,wims_name_account_property
!endif

!distribute line New document\
New  sheet\
New exam\
New class\
New vote\
New exercise\
Class exercises\
into wims_name_add_doc,wims_name_add_sheet,wims_name_add_exam,wims_name_add_class,wims_name_add_vote,\
wims_name_add_exo,wims_name_classexo

!distribute items WIMS,Clase,Docs,Arriba,Prev.,Sig.,Hist.,Recargar,\
    Versi�n interactiva,Versi�n para imprimir,\
    Volver a doc.,Ayuda,Acerca de,\
    into wims_name_doch_wims,wims_name_doch_class,wims_name_doch_docs,wims_name_doch_up,\
    wims_name_doch_prev,wims_name_doch_next,wims_name_doch_hist,wims_name_doch_reload,\
    wims_name_doch_interactive,wims_name_doch_printable,\
    wims_name_doch_back,wims_name_doch_help,wims_name_doch_about
    
