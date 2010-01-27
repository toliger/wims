!set lang_exists=yes

!set name_institution=nombre del centro educativo
!set name_description=nombre de la clase
!set name_supervisor=nombre del profesor
!set name_email=direcci�n de correo electr�nico
!set name_password=contrase�a de la clase
!set name_passsup=contrase�a del profesor
!set lev_E=educaci�n primaria
!set lev_H=educaci�n secundaria
!set lev_U=universidad
!set lv1=!char 1 of $ilevel
!set lv2=!char 2 of $ilevel
!set name_level=$(lev_$lv1), a�o $lv2
!set levelid=E1,E2,E3,E4,E5,E6,H1,H2,H3,H4,H5,H6,H7,U1,U2,U3,U4,U5,G,R
!set leveldesc=$levelid
!set nblevel=!itemcnt $levelid

!set classname=<b><font color=green>$description</font></b>\
 de <b><font color=green>$institution</font></b>

!set months=enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre

!if $Cltype iswordof 2 4
   !if $Cltype=2
    !set name_classe=agrupaci�n de clases
    !set name_sup=del profesor-administrador
   !else
    !set name_classe=portal de centro educativo
    !set name_sup=del administrador
   !endif
     !set name_classes= el $name_classe
     !set name_classess= un $name_classe
     !set name_classesss= del $name_classe
     !set name_classessss= El $name_classe
 !else
   !set name_classe=clase
   !set name_classes=la $name_classe
   !set name_classess=una $name_classe
   !set name_classesss= de la $name_classe
   !set name_classessss= La $name_classe
   !set name_sup=del profesor
 !endif

!distribute lines Continuer\
  Reiniciar la operaci�n\
  Creaci�n de $name_classess\
  Nombre del centro educativo\
a lo sumo\
au moins\
  R�serv� aux experts\
  caract�res\
  Revenir au d�but de l'op�ration.\
  Seleccione el tipo de clase virtual que desea crear.\
  entre 4 y 16 caracteres, d�gitos o letras sin acentuar\
 into name_continue,name_again,title,name_Name_portal,name_atmost,name_atleast,name_expert,\
   name_characters,name_comeback,name_choose,name_warningpass
   
!if $regpolicy=file
  !set noright=(no est� autorizado para hacer eso).
 !else
  !set noright=(�nicamente el administrador del sitio puede hacerlo).
 !endif

!set name_regpolicy=la creaci�n de una clase no tendr� �xito a menos que d� una direcci�n\
   de correo correcta a la que tenga acceso en este momento

!set name_help1=Esta contrase�a le permitir� acceder a la $name_classe como su supervisor.\
  Debe ser la �nica persona que la conozca.

!set name_help2=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de los participantes en la clase; as� que deber� comunic�rsela a sus estudiantes. 
  
!set name_help3=La contrase�a $name_classesss se requerir� para la inscripci�n\
   de los profesores $name_classesss; sus estudiantes y alumnos no deben conocerla.

!distribute lines C'est la date � laquelle votre classe sera automatiquement archiv�e.\
  L�mite de participantes de la $name_classe\
  Acceso seguro\
  Opcional\
  Nombres de las estaciones de trabajo desde las que efectuar� las operaciones sensibles sobre su $name_classe.\
  Esta clave es de un solo uso. �No puede usarse para conectar a la $name_classe!\
 Clave de la $name_classe\
  into name_help_date,name_help_limit,name_secure,name_optional,name_host,name_warning_code,name_code

 !exit
