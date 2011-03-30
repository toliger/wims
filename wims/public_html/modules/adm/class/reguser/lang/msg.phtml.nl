!set wims_module_log=error: $error

!if bad_classtype=$error
    Deelnemers (leerlingen,studenten) zijn niet toegestaan in deze zone.
 !exit
!endif

!if no_class=$error
 De gekozen klas bestaat niet!
 Als dit geen "bug" in de software is, is deze klas waarschijnlijk "verlopen".
 <small>of U bent aan het spelen met deze server: 
 in dat geval, niet vergeten dat alle activiteiten worden gelogd</small>
 !exit
!endif

!if complete=$error
 De gekozen klas is vol. Er is dus -helaas- geen plek meer over.
 !exit
!endif

!if no_real=$error
 U hebt nog geen naam ingevuld.
 !exit
!endif

!if login_size=$error
Uw login-naam is te
 !if $n<4
  kort.
 !else
  lang.
 !endif
 Het mag tussen de 4 en 16 karakters bevatten.
 !exit
!endif

!if pass_size=$error
Uw login-naam is te
 !if $n<4
  kort.
 !else
  lang.
 !endif
    Het mag tussen de 4 en 16 karakters bevatten.
 !exit
!endif

!if bad_classpass=$error
 Het ingevoerde aanmeldings wachtwoord van klas
 <b><font color="green">$description</font></b>
 van <b><font color="green">$institution</font></b>
 is niet juist. 
 Helaas , U kunt zich dus niet aanmelden als leerling bij deze klas.
 !exit
!endif

!if login_double=$error
 De login-naam ``<b><font color="green">$login</font></b>''
is al in gebruik in de klas
 <p><center>
 <b><font color="green">$description</font></b>
 van <b><font color="green">$institution</font></b>.
 </center> <p>
 Kontroleer of U zich reeds heeft aangemeld; of anders kies een andere loginnaam. 
 !exit
!endif

!if pass_error=$error
 Het wachtwoord is twee keer verschillend ingevoerd.
 Probeer het nog een keer. 
 !exit
!endif

!if insert_fail=$error
De software is er niet in geslaagd de aanmelding te verwerken.
Dit is een interne fout.
 <p>
S.v.p dit voorval melden bij de
 !mailurl $wims_site_manager site manager\
login problemen. 
Alvast bedankt!
 !exit
!endif

!if site_complete=$error
 Helaas het aantal geregistreerde deelnemers heeft de ingestelde limiet ( van $wims_user_limit leerlingen) bereikt.
<p>  
 U kunt een 
 !mailurl $wims_site_manager email sturen\
over het ingestelde maximum aantal leerlingen
 of
 !href $ login als een bezoeker
. <p>
 !exit
!endif

!if internal_total=$error
Interne software fout : kan het aantal deelnemers niet vaststellen.
 !exit
!endif

!msg $error

