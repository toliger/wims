!if $special_parm!=$empty
 !changeto help/$module_language/$special_parm.phtml
 !endif

!if $wims_user!=supervisor
    Er is geen helppagina voor studenten.
 !tail
 !exit
!endif
De inhoud van de stemming/verkiezing kan een HTML-text zijn,
 met dezelfde WIMS uitbreidingen als voor de "forum-berichten", 
plus de volgende extra commando's <dl>
<p><dt><tt>\menu{JA,NEE}</tt>
	<dd>Menu Keuze.

<p><dt><tt>\list{A,B,C,D}</tt>
	<dd>Een keuze d.m.v. een rij verticale "radiobuttons"

<p><dt><tt>\radio{zeer slecht, slecht,redelijk, prima}</tt>
	<dd>Een keuze d.m.v. een rij horizontale "radiobuttons"

<p><dt><tt>\uservar{vname,val0,val1,...}</tt>
	<dd>
	Register the immediately preceding choice in an individual
	variable for the participant, under the name <tt>vname</tt>. This
	variable will take the value <tt>val0</tt> by default, <tt>val1</tt>
	if the participant chooses the first option, etc. <p>
	This variable may then be used to define individualized access to
	sheets or exams, by putting the word <tt>\vname</tt> among the
	restrictions of the sheet or exam.
<p><dt><tt>\textarea</tt>
<dd>Een tekst invoerveld, alleen te gebruiken bij een anoniem enquete.
</dl>
Een enquete mag tot 64 keuzevelden bevatten.

!tail

