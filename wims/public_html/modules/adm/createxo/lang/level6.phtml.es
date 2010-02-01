
!read adm/title.phtml 3\
\
Ficheros de imagen para el ejercicio

!if $quota=yes
 <b>Error</b>. No puede a�adir m�s ficheros a su clase porque su contendido 
 ha igualado o superado el espacio de disco autorizado.
 Lo sentimos.
 <p>
 !goto sendend
!endif

!set wims_form_method=file
!form reply
Fichero de imagen que se va a enviar en el ejercicio:
<input type=file name=wims_deposit>
<input type=submit value=OK>
</form>

:sendend
!if $imglist=$empty
 Ete ejercicio no tiene a�n ning�n fichero de imagen.
!else
 Lista de ficheros de imagen del ejercicio:
 <p><center><table border=2>
 <th>Nombre del fichero<th>Vista<th>-
 !for i in $imglist
  <tr><td valign=middle align=center>$i
  <td valign=middle align=center>
  <img src="$wims_ref_name?cmd=getfile&+session=$wims_session&+special_parm=oefimg/$i" alt=""
   height=40 width=50>
  <td valign=middle align=center>
  !href cmd=reply&delfile=$i Borrar
 !next i
 $table_end <p>
 !set example=!item 1 of $imglist
 Se puede acceder a estos ficheros de imagen en el enunciado del ejercicio
 mediante el par�metro interno \imagedir. Por ejemplo puede escribir
 <center><pre>
 &lt;img src=\imagedir/$example&gt;
 </pre></center>
 Puede tambi�n escribir simplemente <tt>\img{\imagedir/$example}</tt>, o
 <tt>\img{\imagedir/$example}{opciones html}</tt>. La ventaja de este segundo m�todo
 es que los estudiantes no ver�n el nombre del fichero. A causa de su coste
 en consumo de recursos, no utilice este m�todo m�s que cuando sea necesario.
!endif
!set wims_menu_items=!append line \
testexo,1,cmd=resume&level=3&realtest=yes&retest=again\
backcreatexo,1,cmd=reply&level=3\
to $wims_menu_items

!!<p><center>
!!!href cmd=resume&level=3&realtest=yes&retest=again Probar el ejercicio
!!.&nbsp;
!href cmd=reply&level=3 Volver al men�
!!.
!!</center>

