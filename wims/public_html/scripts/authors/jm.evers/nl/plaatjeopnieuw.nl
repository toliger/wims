!if $plaatje=
    !set plaatje=insert1-gif
!endif

!if $LINKTEXT=
    !set LINKTEXT=opnieuw
!endif

!if $XSIZE=
    !set XSIZE=300
!endif

!if $YSIZE=
    !set YSIZE=300
!endif
        
<script type="text/javascript">
<!--
function NieuwPlaatje() {
 MijnVenster =
window.open("wims.cgi?&session=$session&module=$module&cmd=getins&special_parm=$plaatje",
 "$voornaam $achternaam", "width=$XSIZE,height=$YSIZE,left=0,top=0");

 MijnVenster.focus();  
}
function Wegwezen() {
onclick=window.close("wegwezen")
}
//-->
</script>
<a href="javascript:NieuwPlaatje()">
<B>$LINKTEXT</B>
</a>


