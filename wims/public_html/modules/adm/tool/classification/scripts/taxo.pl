#!/usr/bin/perl
use locale;
use warnings;
my $LANG='en';
## leave simple quotes
my $joker='$wims_name_erase';
while ($_ = shift (@ARGV))
{
  last if (!/^--/);
     if (/^--lang=(.*)$/) { $LANG = $1; }
     elsif (/^--joker=(.*)$/) { $joker = $1; }
}

taxonomy ("unisciel", $LANG, '\_','_',);
my $ccsstitle='CCSS.Math.Content_';
taxonomy ("commoncore", $LANG, '\_','_',
 ($ccsstitle . 'K',$ccsstitle . '1',$ccsstitle . '2',
 $ccsstitle . '3',$ccsstitle . '4',$ccsstitle . '5',
 $ccsstitle . '6',$ccsstitle . '7',$ccsstitle . 'HS'));

sub taxonomy { my ($taxo, $lang, $sep1, $sep2, @list) = @_ ;
   my ($title, %desc) = hashtaxo ("lang/$taxo.$lang", $sep1, $sep2);
   $text='<!-- This file is generated by taxo.pl. Do not modify directly !-->'
   . "\n<p>$title<\/p>\n";
   $text .= '<ul class="tree">';
   if (!@list) { @list=sort keys %desc};
   for my $a (@list) { one($a, $taxo) };
   $text .= "</ul>";
   $text .= "<input type=\"radio\" name=\"taxon_$taxo\" id=\"empty\" value=\"\"/> $joker";
   out("keywords/$taxo.phtml.$lang",$text);
}

sub one {my ($a, $taxo)=@_;
  if (!($vu{$a}) || $vu{$a}!=1) {
    my $amod=$a;
   $text .= '<li class="closed">';
   $text .= "<input type=\"radio\" name=\"taxon_$taxo\" id=\"$amod\" value=\"$amod\"/>
                <label for=\"$amod\">$tit{$a}</label>";
   $vu{$a}=1;
   if ($desc{$a}) {
     $text .="<ul>";
     for my $b (sortuniq (split (',', $desc{$a}))) { one($b, $taxo) };
     $text .= "\n</ul>";
   }
   $text .= "</li>";
   }
}


sub hashtaxo { my ($file, $sep1, $sep2)=@_;
 open IN, "$file";
 my $title;
 while (<IN>) {
##la premiere ligne est le titre !
   if( !($title)) { $title=$_; next}
   my @txt=split(":", $_);
   my @index=split("$sep1", $txt[0]);
   my $cnt=$#index;
   foreach my $a (2..$cnt) {
      ##$anc{join("$sep2", @index[0..$a])}=join("$sep2", @index[0..$a-1]);
      $desc{join("$sep2", @index[0..$a-1])} .= join("$sep2", @index[0..$a]) . ",";
   }
   if ($txt[1]) {
     my $tmp=$txt[1]; $tmp=~ s/\n//;
     $tit{$txt[0]}=$tmp;
    }
  }
close IN;
($title, %desc, %tit)
}


sub sortuniq {
  my $prev = "not $_[0]";
  grep { $_ ne $prev && ($prev = $_, 1) } sort @_;
}


sub out { my ($bloc, $text) = @_;
  open  (OUT, ">$bloc") || die "ne peut pas cr�er $bloc";
  print OUT $text ; close OUT;
}
