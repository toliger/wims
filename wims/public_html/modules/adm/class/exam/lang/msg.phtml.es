!set wims_module_log=error: $error

!if not_supervisor=$error
 Lo sentimos, pero la operaci�n de preparaci�n / modificaci�n de una hoja
 de trabajo est� reservada a los profesores registrados de una clase.
 !exit
!endif

!if bad_class=$error
 Extra�o, �encuentro que su clase no es v�lida!
 !exit
!endif

!if $error=no_sheet
 El contenido de un examen debe estar tomado de hojas de trabajo
 activadas (activas o caducadas).
 <p>
 Su clase no tiene a�n hojas de trabajo activadas. Por favor, defina
 su hoja de trabajo, ponga los trabajos en ellas y act�velas, antes de
 definir un examen para la clase.
 !exit
!endif

!if bad_exam=$error
 Su n�mero de examen no es v�lido. �Error de software?
 !exit
!endif

!if $error=simuchange
 Esta hoja de examen acaba de cambiar de estado. Por favor
 !href cmd=reply&job=scorereg pulse aqu�
 para dar fin a su sesi�n.
 !exit
!endif

!if already_registered=$error
 Su puntuaci�n ya ha sido registrada.
 !exit
!endif

!if no_more_registration=$error
 Este examen le permite registrar su puntuaci�n en solamente $tries intentos.
 No puede hacer m�s registros.
 !exit
!endif

!if bad_source=$error
 El n�mero de elemento $bad_source en el fichero fuente que ha enviado no es v�lido.
 !href cmd=reply&job=prep_putsource&source=$source Corrija los fuentes
 .
 !exit
!endif

!if no_title=$error
 Quiere registrar un examen sin t�tulo, lo cual no est� permitido.
 �Error de manipulaci�n?
 !exit
!endif

!if prep_activate=$error
 Ha solicitado activar el examen $exam, es decir, hacerlo accesible a los
 participantes de la clase. <p>
 Por favor, tenga en cuenta que, una vez activado, no podr� modificar el
 examen. �Desea continuar?
 <p><center>
 !href cmd=reply&job=activate S�, activar
 .&nbsp;&nbsp;
 !href cmd=resume No, cancelar
 .</center>
 !exit
!endif

!if prep_erase=$error
 �Confirma que quiere borrar este examen #$exam ($title)?
 <p><center>
 !href cmd=reply&job=erase S�, borrar
 .&nbsp;&nbsp;
 !href cmd=resume No, cancelar
 .</center>
 !exit
!endif
 
!if prep_expire=$error
 Este examen n� $exam ($title) normalmente expira el $expday
 !item $expmon of $months
 $expyear. �Quiere hacerlo expirar ahora?
 <p><center>
 !href cmd=reply&job=expire S�, expirar
 .&nbsp;&nbsp;
 !href cmd=resume No, cancelar
 . </center>
 <p><b>Observaci�n.</b> Sus estudiantes no pueden continuar trabajando en un
 examen que ha expirado. Pero sus puntuaciones anteriores se conservar�n (y se
 tomar�n en cuenta en las estad�sticas), y siempre podr� consultar estas
 puntuaciones.
 !exit
!endif

!if prep_putsource=$error
 Si tiene el c�digo fuente de un examen salvado anteriormente, puede insertar
 estos fuentes en su examen actual, copi�ndolos en la siguiente
 ventana, y pulsando entonces en el bot�n `Enviar'.
 <p>
 De lo contrario,
 !href cmd=resume Volver a la p�gina principal del examen.
 !form reply
 <input type=hidden name=job value=putsource><center>
 <textarea cols=55 rows=10 name=source>$source</textarea>
 <p><input type=submit value="Enviar">
 </center></form>
 <b>Advertencia</b>. �No inserte fuentes modificados! Corre el riesgo de 
 inutilizar su examen.
 !exit
!endif

!if nodeactivate=$error
  The exam cannot be desactivated because
  !if badstructure isin $deactivate
   of the class structure.
  !else
   !if score isin $deactivate
    some participants have already begun to work on this exam !
   !else
    your exams are shared with another class !
   !endif
  !endif
!endif

!if active_exam=$error
   D�sol�, cet examen est activ�, donc non modifiable. On ne peut plus changer les exercices dedans.
 !exit
!endif 

!if $error=prep_noexercise
  Le contenu de l'exercice $exo de l'examen est vide. Recommencez.
  !exit
!endif
