!set lang_exists=yes

!! d�finition des noms pour les liens dans le menubox (d�finis par wims_menu_items)
!distribute items Voeg een broncode toe,\
		Bekijk het werkblad,\
		Broncode van het werkblad, \
into wims_name_putsource,wims_name_participantview,wims_name_sheetsource

!set name_student1=!nosubst Er mag aan dit werkblad gewerkt worden tot $expday $expmon $expyear.
!set name_student2 Dit werkblad is verlopen. Er kan nog wel aan\
 worden gewerkt , maar de behaalde cijfers worden niet meer verwerkt.
!set name_student3= Dit werkblad mag op dit moment nog niet worden ingezien.\
Neem desgewenst contact op met de docent.
!set name_student4= Dit werkblad is leeg ! Er staat geen werk in vermeld : misschien een foutje van de docent ?
!set name_score=!nosubst $[$got] uit $[$require] punten behaald, kwaliteit
!set name_score2=!nosubst $[$require] punten vereist.
!set name_deps=Je cijfers voor deze oefeningen moeten verbeterd worden
!set name_dep=Je cijfer voor deze oefening moet verbeterd worden
!set name_dep2=voor dat je deze oefening mag proberen.
!set name_scoresuspend=De cijfer registratie is door jezelf opgeschort. 
!set name_scoreopen=De cijfer registratie is open.
!set name_scoreclose=De cijfer registratie is voor jouw netwerkverbinding gesloten.

!set name_textsource=Hier staat de broncode van het werkblad. U kunt deze via \
knippen en plakken in uw eigen kals importeren.
!set name_answer=Antwoord op oefening

!set name_title=!nosubst  Werkblad #$sh
!set name_empty=Het werkblad is leeg! Dit is waarschijnlijk een fout.

!set name_exo=!defof name_exo in wimshome/public_html/scripts/oef/$modu_lang/names
!set name_noprint=!defof name_noprint in oef/$modu_lang/names
!set name_answers=!defof name_answers in oef/$modu_lang/names

!distribute items niveau approximatif,dur�e \
into name_level,name_duration