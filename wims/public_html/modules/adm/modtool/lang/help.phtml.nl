!if $special_parm!=$empty
 !read help/$special_parm.phtml
 !goto end
!endif

!if $login=$empty
 Dit is een hulpmiddel voor het online ontwikkelen van complete WIMS modules.
 <p>
 Een dergelijke module kan een "full-power" oefening zijn 
 (vergeleken met de Createxo OEF oefeningen; welke gemakkelijker te maken zijn,
  maar hierdoor natuurlijk ook iets aan mogelijkheden inboeten. Zie hiervoor
 !href module=adm/createxo Createxo
 ) of bijvoorbeeld een zeer speciale wiskundige toepassing.
 Deze modules worden geschreven in de <b>WIMS programeertaal</b> [phtml] zoals beschreven in de
 !href target=wims_help module=help/wimsdoc WIMS technische documentatie
.

 <p>
 Als U geinteresseerd bent, kan via  
 !mailurl $wims_site_manager de systeembeheerder\
 WIMS Modtool id
 
 een ontwikkelaars account (login naam en wachtwoord) worden aangevraagd.
 !exit
!endif

!if $mod=$empty
 Om aan een module te kunnen werken, moeten we er wel eerst eentje aanmaken.<br>
 Voor het maken van een nieuwe module, moet U dus op de juiste links klikken
 en alle benodigde modules administratie invoeren. 
 <p>
!endif

Lees eerst de
 !href target=wims_help module=help/wimsdoc WIMS technische documentatie
 voor de structuur van zo'n WIMS module en uiteraard de syntax van de WIMS programmeertaal.
<p>
Speciale hints:
<ol>
<li><p>Om een file te kunnen debuggen, plaats dan de regel
<pre>
$!debug ...
</pre>
in deze file ; <b>...</b> kan elke tekst-string zijn.
Wanneer U nu deze module uittest, stopt de uitvoering van Uw programma precies
op deze regel, en laat U dan de inhoud van <b>...</b> zien.
Is <b>...</b> een variabele, wordt deze gesubstitueerd volgens de normale WIMS substitutieregels.

</ol>

:end
