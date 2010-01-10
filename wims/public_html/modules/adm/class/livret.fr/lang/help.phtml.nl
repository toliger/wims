!! for translate this help you just have to copy this file with correct extension (fr en de) and traduce it !
!!

!let help_isreaded=yes
Le livret de comp�tences permet d'obtenir une grille de lecture synth�tique de l'ensemble du travail not� des �l�ves de la classe.<br>
Le livret se compose de comp�tences (au maximum ....) chacune de ses comp�tences peut poss�der plusieurs paliers (jusqu'� ....).<p>

Pour chaque palier, l'enseignant peut d�finir la liste des s�ries d'exercices de la classe pour lesquels le score va intervenir dans le calcul du niveau d'acquisition du palier.<p>

L'enseignant de la classe peut d�cider que certaines feuilles virtuelles sont neutralis�es pour le calcul du degr� d'acquisition des paliers du livret de comp�tences (cela permet de conserver
les donn�es p�dagogiques d'une ann�e sur l'autre tout en permettant de commencer � valider certaines comp�tences).<p>

Le calcul du niveau d'acquisition est effectu� de la fa�on suivante :
<center>
!insmath 10 \times \frac{\sum_{i=1}^{N} NM(x_{L[i;1],L[i;2]})}{\sum_{i=1}^{N} \delta_{L[i;1]}}
</center>
o�
<ul>
 <li> <i>N</i> est le nombre de s�ries d'exercices intervenant dans le palier.</li>
 <li> <i>L</i> est la liste des s�ries d'exercices intervenant dans le palier. Chaque �l�ment de la liste contient le num�ro de feuille (not� L[i;1]) et 
 le num�ro de la s�rie d'exercices dans la feuille (not� L[i;2]).</li>
 <li> 
  !insmath X_{i,j}
  est la note de qualit� de la s�rie d'exercices <i>j</i> de la feuille <i>i</i>.</li>
 <li> 
  !insmath \delta_i
  vaut 1 si la feuille <i>i</i> n'est pas dans la liste des feuilles d�sactiv�es pour le calcul du niveau d'acquisition des paliers et <i>0</i> sinon.</li>
 <li> NM(a) vaut <i>1</i> si  et <i>a</i> est sup�rieur � la note minimale pour consid�rer qu'une s�rie est acquise et <i>0</i> sinon (fixer la note minimale � <i>0</i> neutralise cette option).</li>
</ul>