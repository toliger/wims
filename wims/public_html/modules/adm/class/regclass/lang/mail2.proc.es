!bound adresse2 within $regpassmail default $empty
!if $adresse2=$empty or $adresse1=$empty
 wims_module_log=sendpwd error $adresse1@$adresse2
 !reset adresse1,adresse2
 !exit
!endif

sendmail=$adresse1@$adresse2
!reset adresse1,adresse2,regpass
wims_module_log=sendpwd $sendmail
!mailto $sendmail\
Code pour la cr�ation d'une classe sur le serveur WIMS\
\
Voici le code pour cr�ation d'une classe :\
\
		$regpasswd\
\
Veuillez taper ce code dans la page web de la cr�ation de votre classe.\
\
\
Si vous ne savez pas de quoi il s'agit : c'est que quelqu'un d'autre a donn� votre adresse �lectronique (� tort) � un logiciel automatique.\
 Dans ce cas vous pouvez ignorer ce message.\

     




