!!!!WARNING If you have to put "into" in the translation, write into$  ...

!if $wims_name_home!=$empty
 !exit
!endif

!! **** Default Names ***
!distribute items Buscar,\
Al trabajo,Volver al trabajo,\
Inicio WIMS,Introducci�n/Configuraci�n,Ayuda,Acerca de,Acerca de WIMS,\
Introducci�n,Cerrar,\
Cerrar esta ventana,Atr�s,Inicio de la p�gina,\
Administrador del sitio,Autor de la p�gina,Autores de la p�gina,\
Traducido por,Salir,\
Ayuda de WIMS,Referencias,\
Foro de discusi�n,Foro,\
Hoja de trabajo,Herramientas,\
Copiar a Modtool,\
Imprimir,\
Importar a su clase,\
Versi�n imprimible,\
Otro nuevo,\
Ir,\
Actualizar,\
Guardar,\
S�,\
No,\
Descargar,\
Enviar,\
Comenzar,\
Detalles,\
Mostrar,\
Corregir,\
�Atenci�n!,\
�Felicidades!,\
o,\
Explicaciones,\
Ejercicio,\
Hoja,Hojas,\
Cuenta,\
Entrar,\
Notas,\
Mis notas,\
Examen,Ex�menes,\
Explorar el sitio,\
Volver al men�,\
Fecha de expiraci�n,\
Error,\
Exercicio siguiente,Ejercicio anterior,\
Ejemplo,\
Cuestionario,Cuestionarios,\
Condiciones generales de uso,\
Necesita ayuda?,\
Bravo!,\
Desconnexi�n CAS,\
Cr�ditos,\
Novedades,\
Responda,\
Gesti�n de los participantes,\
Vuelta al m�dulo,\
Leyenda,\
Duplicar la hoja,\
Duplicar el examen,\
Gestionar variables t�cnicas,\
Variables t�cnicas antiguas,\
Resultados globales,\
 into wims_name_search,\
	wims_name_work,wims_name_resume,\
	wims_name_home,wims_name_intro,wims_name_help,wims_name_about,wims_name_aboutw,\
	wims_name_titleintro,wims_name_Close,\
	wims_name_back,wims_name_back2,wims_name_top_page,\
	wims_name_manager,wims_name_author,wims_name_authors,\
	wims_name_translatedby,wims_name_exit,\
	wims_name_whelp,wims_name_reference,wims_name_forum,wims_name_forums,\
	wims_name_sheet,wims_name_tools,\
	wims_name_modify,wims_name_print,wims_name_import,\
	wims_name_printable,wims_name_renew,wims_name_testgo,\
	wims_name_refresh,wims_name_tosave,\
	wims_name_yes,wims_name_no,wims_name_download,wims_name_send,wims_name_start,wims_name_detail,\
	wims_name_Show,wims_name_Edit,wims_name_warning,wims_name_Congratulations,wims_name_or,\
	wims_name_Explanations,wims_name_Exercise,wims_name_Sheet,wims_name_Sheets,wims_name_account,wims_name_Enter,\
	wims_name_Score1,wims_name_myscore,wims_name_Examen,wims_name_Examens,wims_name_browse,wims_name_menuback,\
	wims_name_expiration,wims_name_Error,wims_name_nextseries,wims_name_previousseries,\
	wims_name_Example,wims_name_Vote,wims_name_Votes,wims_name_cgu,wims_name_feedbackexo,wims_name_feedbackplus,\
	wims_name_cas_logout,wims_name_credits,wims_name_mod_new,wims_name_answer,wims_name_usermanage,\
	wims_name_moduback,wims_name_legend,wims_name_duplicatesheet,wims_name_duplicateexam,wims_name_techvar,wims_name_oldvar,\
    wims_name_Evaluation
!! **** Menuprof Names ***
!distribute items Classes, Buscar,\
Creaci�n, AbiertasSamples,\
Exercicios, Ayudas,\
FAQ, Documentos de ayuda,\
Informaciones,\
Otros m�todos,\
Sitio,\
   into wims_name_Classes, wims_name_Searching,\
	wims_name_Creation, wims_name_Samples,\
	wims_name_Exercices, wims_name_Aid,\
    wims_name_faq, wims_name_dochelp,\
    wims_name_Infos, wims_name_othermethods,\
    wims_name_Site

!! **** Permalink Names ***
!distribute items este m�dulo, este ejercicio,\
Mostrar, en su sitio,\
Ocultar estas opciones, \
Enlace permanente, Lector incrustable,\
copiar y pegar, el v�nculo, el c�digo, o, en un correo electr�nico,\
para, solamente,\
la configuraci�n actual,\
	into wims_name_this_module, wims_name_this_exercice,\
	wims_name_display,wims_name_on_your_site,\
	wims_name_mask_this,\
	wims_name_permalink,wims_name_embeddable,\
	wims_name_copy_and_paste,wims_name_the_link,wims_name_the_code,wims_name_or,wims_name_in_a_mail,\
	wims_name_for,wims_name_only,\
	wims_name_this_config

!set wims_name_Share = Compartir
!set wims_name_to_embed_it = para incrustarlo
!set wims_name_permalink_desc = Copia uno de estos enlaces para compartirlo f�cilmente (a traves de mail, Preferidos, ...).
!set wims_name_hide=Ocultar
!set wims_name_showall=Mostrar

!! the following sentences can be changed according to language if needed
!set wims_name_display1=!nosubst $wims_name_display $wims_name_this_module $wims_name_on_your_site
!set wims_name_display2=!nosubst $wims_name_copy_and_paste $wims_name_the_link $wims_name_on_your_site $wims_name_or $wims_name_in_a_mail
!set wims_name_display3=!nosubst $wims_name_copy_and_paste $wims_name_the_code $wims_name_on_your_site
!set wims_name_permalink1=!nosubst $wims_name_permalink $wims_name_for $wims_name_this_module

!! **** Module About Names ***
!distribute items Nombre,\
Sobre los iconos,\
Informaci�n sobre este m�dulo,\
Informaci�n sobre este ejercicio,\
Direcci�n,\
V�nculo para Preferidos,\
Descripci�n,\
Versi�n,\
Versi�n WIMS requerida,\
Lengua,\
Autor,\
Mantenedor,\
Traductor,\
General,\
Este es un m�dulo de,\
WWW Interactive Multipurpose Server,\
Derechos de autor,\
Palabras clave,\
Correo electr�nico del traductor,\
Correo electr�nico del autor,\
Correo electr�nico del mantenedor,\
Dominio,\
Tipo,\
Nivel(x),\
Mecanismo de puntuaci�n,\
ejercicio/recreaci�n,\
Programas inform�ticos de apoyo necesarios,\
Tiempo del servidor,\
M�dulo de datos,\
Desarrollado en WIMS,\
Centro de publicaci�n,\
Centro de descarga,\
Sintaxis,\
Significado,\
Indexaci�n,\
Cambiar las preferencias,\
	into wims_name_name,\
	wims_name_iconabout,\
	wims_name_module_infos,\
	wims_name_exo_infos,\
	wims_name_Address,\
	wims_name_Link_for_bookmark,\
	wims_name_Description,\
	wims_name_Version,\
	wims_name_Required_WIMS_version,\
	wims_name_Language,\
	wims_name_Author,\
	wims_name_Maintainer,\
	wims_name_Translator,\
	wims_name_General,\
	wims_name_This_is_a_module,\
	wims_name_WIMS_subtitle,\
	wims_name_Copyright,wims_name_Keywords,\
	wims_name_tr_email,wims_name_auth_email,wims_name_maint_email,\
	wims_name_Domain,wims_name_Type,wims_name_Levels,\
	wims_name_Scoring,wims_name_Scoringhelp,\
	wims_name_require,wims_name_server_time,wims_name_datamodule,\
	wims_name_devwims,wims_name_publish_center,wims_name_download_center,\
	wims_name_Syntax,wims_name_Meaning,wims_name_Indexation,\
    wims_name_pref

!! Titles of menus
!distribute items Vida de la classe,Configuraci�n,\
   Utilidades de la classe,Enlaces externos,\
   Navigaci�n,Mis informaciones\
into wims_name_classactivity,wims_name_configuration,\
  wims_name_classtools,wims_name_otherclasses,\
   wims_name_navigation,wims_name_myinfo

!! **** Class Relative Names ***
!if $wims_class!=$empty
 !distribute items P�gina principal de la clase,Insertar en una hoja de trabajo,Insertar como una ayuda en una hoja,\
Escribir al profesor, Salir,\
El registro de notas est� cerrado.,\
Ha suspendido el registro de notas.,\
Activar el registro, Suspender el registro,\
Usted es el profesor de la clase,\
Registrar los detalles de este ejercicio,\
P�gina de gesti�n de la hoja de trabajo,\
A�adir una secuencia,\
Visto,\
Detalles de los ejercicios analizados,\
Insertar todos los ejercicios en una hoja de trabajo,\
Vista de los participants,\
into wims_name_class_home,wims_name_add,wims_name_addh,\
   wims_name_wsup,wims_name_visitor,\
   wims_name_scoreclose,\
   wims_name_scoresuspend,\
   wims_name_scorereopen,wims_name_scoreclose2,\
   wims_name_syou,\
   wims_name_exolog,\
   wims_name_sheetmanagement,\
   wims_name_add_sequence,\
   wims_name_readen,\
   wims_name_save_ex,wims_name_addallexo,\
   wims_name_participantview

 !!!set wims_name_score=!nosubst Ha conseguido $[$wims_homeref_got] de \
	$[$wims_homeref_req] puntos en este trabajo, calidad $[$wims_homeref_mean]/10.
!set wims_name_thsheet=N�mero,T�tulo,Puntos requeridos,Peso,Puntos obtenidos,%,Calidad,Severidad,Nota,\
  Mejores notas,N�mero de intentos,�ltimo resultado,Adquirido
 !set wims_name_you=usted es <b>$wims_firstname $wims_lastname</b>, perteneciente a
 !if _exam isin $session
  !distribute items Otros ejercicios del examen,\
	Tiempo que dispone para este examen&nbsp;:,\
    Este examen se cerrar� autom�ticamente a:,\
	cuando se cargue esta p�gina\
	into wims_name_back,wims_name_examremain,wims_name_exam_ending,wims_name_whenloaded
 !endif
 !if _check isin $session
  !let wims_page_name=P�gina
 !endif
 !default wims_name_sequence=Secuencia
 !set wims_name_sequences=secuencias

 !set wims_name_exceeded=Su clase super� el espacio de disco autorizado en el servidor.\
  La gesti�n de la clase no est� ya disponible. �Lo siento!<p>Les sugerimos pidan al administrador del sitio\
 aumentar el espacio de disco autorizado para las clases virtuales.

 !set wims_name_reaching_limit=Su clase alcanza el l�mite de espacio de disco autorizado.\
  Una vez superado este l�mite, se bloquear� la gesti�n de la clase!

 !set wims_name_chseries=!nosubst Guardar los cambios en la serie de ejercicios $(special_parm4[2]) hoja $(special_parm4[1])
!endif

!!!if adm/class isin $module or adm/manage isin $module
 !distribute line Zona de Profesores \
Zona de estudiantes\
Clases abiertas\
Autentificaci�n del profesor\
Autentificaci�n de los participantes\
Autentificaci�n\
Contrase�a olvidada\
Ense�anza primaria\
Ense�anza secundaria\
Universidad\
Lista de clases \
Lista de clases y portales \
Clase individual\
Agrupaci�n de clases \
Portal de centro \
Participantes borrados\
	into wims_name_n_supervisor,wims_name_n_participant,wims_name_n_example,\
	wims_name_n_authsupervisor,wims_name_n_authparticipant,wims_name_connexion,\
	wims_name_n_forgetpwd,wims_name_n_E,wims_name_n_H,wims_name_n_U,\
	wims_name_classlist,wims_name_portal_list,\
	wims_name_create_class,wims_name_create_superclass,wims_name_create_portal,wims_name_recover
!!!endif

!if adm/new isin $module
  !distribute line Nuevos m�dulos\
M�dulos actualizados \
Cambios en el sistema \
RSS Nuevos m�dulos\
RSS M�dulos actualizados \
  into wims_name_mod_new,wims_name_mod_modif,wims_name_mod_sys,wims_name_rss_new,wims_name_rss_modif
!endif

  !distribute line Crear una clase \
  into wims_name_classcreate

!if adm/modtool isin $module or adm/createxo isin $module or $wims_user!=$empty or $module!=
  !distribute line Probar el m�dulo \
Gestor del documento \
Contenido del m�dulo \
Otros archivos \
Propiedades \
Guardar\
Diferencias \
Publicar \
Nuevo M�dulo \
Lista de m�dulos \
Dep�sito de archivos \
Restauraci�n \
Propiedades de la cuenta \
Probador de programas \
Documentaci�n OEF \
Biblioteca de programas \
Tipos de respuestas\
Documentaci�n t�cnica \
Volver a la lista de archivos \
Cambiar el archivo \
Cambiar\
Atras\
Eliminar\
Acci�n\
Para utilizar esta actividad, debe activar java en su navigador.\
Fecha\
A�adir\
Suprimir\
C�digo fuente\
Salir\
 into wims_name_test,wims_name_docgestion,wims_name_modcontent,wims_name_otherfiles,\
wims_name_properties,wims_name_modsave,wims_name_checkdiff,wims_name_publish,wims_name_createnew,\
wims_name_modlist,wims_name_binfile,wims_name_restore,\
wims_name_account_property,\
wims_name_scripttest,wims_name_docoef,wims_name_docslib,wims_name_docanswer,wims_name_doctec,\
wims_name_back3,wims_name_edfile,wims_name_change,wims_name_up,wims_name_erase,wims_name_action,\
wims_name_nojava,wims_name_date,wims_name_add0,wims_name_delete,wims_name_source,\
wims_name_visitor

!distribute line Volver a la p�gina de creaci�n de ejercicios \
Lista de modelos \
Modelos preparados \
into wims_name_backcreatexo,wims_name_modellist,wims_name_model

!distribute line Probar el ejercicio \
Volver a confia2qcm\
Volver a createqcm\
Modificar el c�digo fuente \
Poner en el m�dulo de desarrollo \
Poner este ejercicio en la clase \
Guardar como nuevo ejercicio \
Enviar un archivo de imagen \
Reemplazar el anterior\
Eliminar este ejercicio\
into wims_name_testexo,wims_name_backconfia2qcm,wims_name_backcreateqcm,wims_name_exomodify,\
wims_name_putmodtool,wims_name_putclass,wims_name_newversion,\
wims_name_downloadbinary,wims_name_replace,wims_name_exoerase

!endif

!distribute line Nuevo documento \
Nueva hoja \
Nuevo examen \
Nueva clase \
Nuevo cuestionario \
Mis cuestionarios\
Nuevo ejercicio \
Ejercicios de la clase \
Ejercicios de la hoja&nbsp\
Siguiente ejercicio\
Anterior ejercicio\
into wims_name_add_doc,wims_name_add_sheet,wims_name_add_exam,wims_name_add_class,wims_name_add_vote,wims_name_myvote,\
wims_name_add_exo,wims_name_classexo,wims_name_sheet_exos,wims_name_next,wims_name_prev

!distribute items sin intentar,sin hacer,hecho,felicidades,intentado \
  into wims_name_exo_untry,wims_name_exo_undone,wims_name_exo_done,wims_name_exo_congratulation,wims_name_exo_tried

!!! for documents...

!distribute items WIMS,Clase,Docs,Arriba,\
        Atras,Sig.,Hist.,Recargar,\
	Versi�n interactiva,Versi�n para imprimir,\
	Volver a doc.,Ayuda,Acerca de,\
	Dep�sito de archivos,\
	Volver a la lista de archivos,\
	P�gina de entrada del documento\
	Transferir,\
	into wims_name_doch_wims,wims_name_doch_class,wims_name_doch_docs,wims_name_doch_up,\
	wims_name_doch_prev,wims_name_doch_next,wims_name_doch_hist,wims_name_doch_reload,\
	wims_name_doch_interactive,wims_name_doch_printable,\
	wims_name_doch_back,wims_name_doch_help,wims_name_doch_about,\
	wims_name_doch_upload,wims_name_doch_filelist,wims_name_doch_main,wims_name_doch_transfer

!! for sequence et document

!distribute line Documento\
Documentos\
oculto, visible \
T�tulo \
Reorganizaci�n por secuencias \
Insertar en la clase \
Crear un nuevo documento \
Documento de prueba\
Estado\
Insertar\
En preparaci�n,Activo,Expirado,Expirado+Oculto\
ni leer ni escribir,leer pero no escribir,leer y escribir\
N�mero\
N�mero de ejercicios\
into wims_name_doc,wims_name_Docs,wims_name_status,wims_name_title,wims_name_reorder,wims_name_adddoc,\
wims_name_createdoc,wims_name_doctry,wims_name_Status,wims_name_Insert,wims_name_shstatus,\
wims_name_Docstatus,wims_name_number,wims_name_cnt_exo

 !distribute line A�adir una fecha \
A�adir un archivo \
A�adir deberes \
Configurar \
Abandonar \
Agenda\
  into wims_name_adddate,wims_name_addfile,wims_name_addtodo,wims_name_config,wims_name_giveup,\
  wims_name_cdt

!set wims_name_supervisor=administrador
!set wims_name_Supervisor=Administrador
!set wims_name_namestudent=Alumno
!set wims_name_nameteacher=Profesor
!set wims_name_teacher=Cuentas de profesores
!set wims_name_addteacher=A�adir profesor
!set wims_name_addparticipant=A�adir alumno
!set wims_name_modteacher=Propiedades del profesor
!set wims_name_delteacher=Borrar a un profesor
!set wims_name_student=Cuentas de alumnos
!set wims_name_addstudent=Nuevo alumno
!set wims_name_modstudent=Propiedades del alumno
!set wims_name_delstudent=Borrar a un alumno
!set wims_name_delstudent1=Borrar el alumno
!set wims_name_group= Portal
!set wims_name_portal= Portal
!set wims_name_level=Nivel
!set wims_name_class=Clase
!set wims_name_program=Programa
!set wims_name_course=Curso
!set wims_name_icourse=Curso interclase
!set wims_name_backstruct=Hacer una copia de seguridad de la estructura

!if config isin $module or $module=home or $module=adm/class/userscore
 !distribute line $wims_name_config\
 P�gina principal de configuraci�n\
Gesti�n de la estructura\
Gesti�n\
into wims_name_configb,wims_name_config,wims_name_struct,wims_name_manage
!endif

!set wims_name_save=Copias de seguridad y recuperaci�n
!set wims_name_backgateway= Gesti�n de

!distribute line A�adir un curso \
A�adir un curso interclase \
A�adir una clase \
A�adir un programa \
A�adir un nivel \
Gestionar login \
Cambiar de zona \
A�adir clases (csv)\
into wims_name_addcourse,wims_name_addicourse,wims_name_addclass,wims_name_addprog,wims_name_addlevel,\
wims_name_login,wims_name_chzone,wims_name_addcsvclass

!distribute line Estad�sticas de actividad \
Actividades globales de los participantes \
Cambiar el baremo \
Notas manualmente asignadas \
Conexi�n hoja de c�lculo \
Actividades globales\
into wims_name_class_stat,wims_name_activity,wims_name_formula,wims_name_grades,\
wims_name_csv,wims_name_activity1

!if adm/class isin $module or reguser isin $module or $wims_class!=$empty
!distribute line Lista de los participantes\
Lista de profesores\
Resultados del alumno \
Cerrar esta sesi�n de examen\
Detalles de su trabajo\
Eliminar el alumno \
Datos detallados\
Cambiar su contrase�a\
Datos tratados\
Cuaderno de competencias \
Siguiente\
Anterior\
Filtros\
Informe de evaluaci�n\
A�adir variable t�cnica\
into wims_name_part_list,wims_name_teacherlist,wims_name_scores,wims_name_partexamclose,wims_name_workdetail,\
wims_name_delprep,wims_name_rawdata,wims_name_passwd,wims_name_getraw,wims_name_livret,\
 wims_name_next_participant,wims_name_prev_participant,wims_name_filter,\
 wims_name_livret1,wims_name_add_techvar
!endif

!if adm/manage isin $module
  !distribute line Otras tareas de mantenimiento \
  into wims_name_sitegestion
!endif

!if $wims_user=supervisor
 !distribute line Volver a la p�gina del profesor \
 into wims_name_backteacher
!endif

!distribute lines Modtool\
Createxo\
Quicktool\
Latex2wims\
Imageclick\
Otras utilidades\
   into wims_name_modtool,wims_name_createxo,wims_name_quicktool,wims_name_latex2wims,\
   wims_name_coordclick,wims_name_othertools

!distribute line activar el editor HTML \
desactivar el editor HTML \
cuidado, las modificaciones hechas no se salvar�n si cambian esta opci�n en curso de redacci�n\
into wims_name_active, wims_name_desactive,wims_name_speck_warning

!distribute items Apellido,Nombre,Contrase�a,Correo electr�nico,Identificador de usuario,Repita la contrase�a,Comentario \
into wims_name_lastname, wims_name_firstname,wims_name_Password,wims_name_email,\
wims_name_Login,wims_name_repeat_pass,wims_name_comment

!distribute line Orla\
Env�o de correos electr�nicos\
into wims_name_photoboard,wims_name_sendmail

!distribute items Profesor,Administrador,Alumno\
into wims_name_nameteacher,wims_name_Supervisor,wims_name_namestudent

!if $module isitemof home,adm/class/sheet,adm/class/exam
 !set wims_name_actionlist=Activar,Expirar,Desactivar,Ocultar,Mostrar,$wims_name_erase
!endif

!if $module=adm/class/usermanage
    !set wims_name_regmanage=Gestion de acceso
!endif
!set wims_name_cloneclass =Duplicar una clase existente
!set SU_partconnected     =Este alumno est� conectado
!set wims_name_SE_config = Config./Mantenim.
