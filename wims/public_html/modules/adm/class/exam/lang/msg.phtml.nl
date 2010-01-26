!set wims_module_log=error: $error

!if not_supervisor=$error
Helaas, maar het maken/modificeren van een digitale overhoring/proefwerk
is voorbehouden aan de supervisor van een klas. 
 !exit
!endif

!if bad_class=$error
Vreemd, maar ik zie nu dat Uw klas niet "geldig" is!
 !exit
!endif

!if $error=no_sheet
De inhoud van een proefwerk of digitale overhoring kan alleen worden genomen
uit een <em>actief</em> of <em>verlopen</em> <b>werkblad</b>
 <p>
 Uw klas heeft echter geen werkbladen (actief of verlopen). Dus eerst maakt U een werkblad van Uw oefeningen (oef of module)
 onderaan een oefening/som staan de link <b>"toevoegen aan werkblad"</b>
 Daarna maakt U van deze actieve/verlopen werkbladen het echte digitale proefwerk of overhoring voor een echt cijfer.
 !exit
!endif

!if bad_exam=$error
Uw proefwerk nummer is helaas niet geldig...een bug in de software? 
 !exit
!endif

!if $error=simuchange
    De status van dit proefwerk heeft U net veranderd.<br>Klik deze simulatie correct
 !href cmd=reply&job=scorereg hier
 om deze simulatie correct te beeindigen.
 !exit                                                                                                                                     
!endif

!if already_registered=$error
Je cijfer staat reeds genoteerd.
 !exit
!endif

!if no_more_registration=$error
Bij deze digitale overhoring mag je het $stries keer proberen.<br>
Jij mag het proefwerk dus niet meer overdoen.
 !exit
!endif

!if bad_source=$error
 Het item nummer $bad_source in de broncode, die je net hebt opgestuurd,
  is ongeldig
 !href cmd=reply&job=prep_putsource&source=$source Verbeter de broncode
 .
 !exit
!endif

!if no_title=$error
U wilt een proefwerk registreren zonder een naam? 
niet verstandig. Fout of manipulatie?
 !exit
!endif

!if prep_activate=$error
U wilt het proefwerk $exam activeren, en dus beschikbaar stellen aan Uw leerlingen. <p>
Besef dat een digitale overhoring of proefwerk eenmaal geactiveerd niet meer kan worden veranderd.

Wilt U doorgaan?
 <p><center>
 !href cmd=reply&job=activate Ja : activeren
 .&nbsp;&nbsp;
 !href cmd=resume Nee: annuleren
 .</center>
 !exit
!endif

!if prep_erase=$error
Wil U werkelijk het proefwerk nummer $exam ($title) verwijderen?
 <p><center>
 !href cmd=reply&job=erase Ja: verwijderen
 .&nbsp;&nbsp;
 !href cmd=resume Nee: annuleren
 .</center>
 !exit
!endif
 
!if prep_expire=$error
Dit proefwerk nummer $exam ($title) zou verlopen zijn op $expday
 !item $expmon of $months
 $expyear. wilt U het <b>nu</b> laten verlopen?
 <p><center>
 !href cmd=reply&job=expire Ja: laten verlopen
 .&nbsp;&nbsp;
 !href cmd=resume Nee: annuleren
 . </center>
 <p><b>Opmerking.</b> 
 Uw leerlingen kunnen niet doorgaan met het werken aan een verlopen proefwerk.<br>
Maar hun reeds behaalde cijfers voor dit proefwerk worden wel bewaard.
(en ook statistisch verwerkt, zodat U altijd deze resultaten nog kunt bestuderen) 
 !exit
!endif

!if nodeactivate=$error
    Dit proefwerk kan niet worden gedeactiveerd omdat
  !if badstructure isin $deactivate
   de structuur van dit instituut dit niet toestaat.
  !else
   !if score isin $deactivate
    enkele studenten al zijn begonnen met dit proefwerk !
   !else
    het wordt gedeeld met een andere klas !
   !endif
  !endif
!endif
!if active_exam=$error
   D�sol�, cet examen est activ�, donc non modifiable. On ne peut plus changer les exercices dedans.
 !exit
!endif 

