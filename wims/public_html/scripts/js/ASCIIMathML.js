var asciimath={};!function(){function setStylesheet(s){var id="AMMLcustomStyleSheet",n=document.getElementById(id);document.createStyleSheet?(n&&n.parentNode.removeChild(n),document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeEnd","&nbsp;<style id='"+id+"'>"+s+"</style>")):n?n.replaceChild(document.createTextNode(s),n.firstChild):(n=document.createElement("style"),n.type="text/css",n.id=id,n.appendChild(document.createTextNode(s)),document.getElementsByTagName("head")[0].appendChild(n))}function init(){var msg,warnings=new Array;return null==document.getElementById?(alert("This webpage requires a recent browser such as Mozilla Firefox"),null):(checkForMathML&&(msg=checkMathML())&&warnings.push(msg),warnings.length>0&&displayWarnings(warnings),noMathML||initSymbols(),!0)}function checkMathML(){if("Netscape"==navigator.appName.slice(0,8))noMathML=navigator.appVersion.slice(0,1)>="5"?null:!0;else if("Microsoft"==navigator.appName.slice(0,9))try{new ActiveXObject("MathPlayer.Factory.1");noMathML=null}catch(e){noMathML=!0}else"Opera"==navigator.appName.slice(0,5)&&(noMathML=navigator.appVersion.slice(0,3)>="9.5"?null:!0);if(noMathML&&notifyIfNoMathML){var msg="To view the ASCIIMathML notation use Internet Explorer + MathPlayer or Mozilla Firefox 2.0 or later.";if(!alertIfNoMathML)return msg;alert(msg)}}function hideWarning(){var body=document.getElementsByTagName("body")[0];body.removeChild(document.getElementById("AMMLwarningBox")),body.onclick=null}function displayWarnings(warnings){var i,frag,nd=createElementXHTML("div"),body=document.getElementsByTagName("body")[0];for(body.onclick=hideWarning,nd.id="AMMLwarningBox",i=0;i<warnings.length;i++)frag=createElementXHTML("div"),frag.appendChild(document.createTextNode(warnings[i])),frag.style.paddingBottom="1.0em",nd.appendChild(frag);nd.appendChild(createElementXHTML("p")),nd.appendChild(document.createTextNode("For instructions see the "));var an=createElementXHTML("a");an.appendChild(document.createTextNode("ASCIIMathML")),an.setAttribute("href","http://www.chapman.edu/~jipsen/asciimath.html"),nd.appendChild(an),nd.appendChild(document.createTextNode(" homepage")),an=createElementXHTML("div"),an.id="AMMLcloseDiv",an.appendChild(document.createTextNode("(click anywhere to close this warning)")),nd.appendChild(an);var body=document.getElementsByTagName("body")[0];body.insertBefore(nd,body.childNodes[0])}function translate(spanclassAM){if(!translated){translated=!0;var body=document.getElementsByTagName("body")[0],processN=document.getElementById(AMdocumentId);translateASCIIMath&&AMprocessNode(null!=processN?processN:body,!1,spanclassAM)}}function createElementXHTML(t){return isIE?document.createElement(t):document.createElementNS("http://www.w3.org/1999/xhtml",t)}function createMmlNode(t,frag){var node;return node=isIE?document.createElement("m:"+t):document.createElementNS(AMmathml,t),frag&&node.appendChild(frag),node}function newcommand(oldstr,newstr){AMsymbols.push({input:oldstr,tag:"mo",output:newstr,tex:null,ttype:DEFINITION}),refreshSymbols()}function newsymbol(symbolobj){AMsymbols.push(symbolobj),refreshSymbols()}function compareNames(s1,s2){return s1.input>s2.input?1:-1}function initSymbols(){var i,symlen=AMsymbols.length;for(i=0;symlen>i;i++)AMsymbols[i].tex&&AMsymbols.push({input:AMsymbols[i].tex,tag:AMsymbols[i].tag,output:AMsymbols[i].output,ttype:AMsymbols[i].ttype,acc:AMsymbols[i].acc||!1});refreshSymbols()}function refreshSymbols(){var i;for(AMsymbols.sort(compareNames),i=0;i<AMsymbols.length;i++)AMnames[i]=AMsymbols[i].input}function AMremoveCharsAndBlanks(str,n){var st;st="\\"==str.charAt(n)&&"\\"!=str.charAt(n+1)&&" "!=str.charAt(n+1)?str.slice(n+1):str.slice(n);for(var i=0;i<st.length&&st.charCodeAt(i)<=32;i+=1);return st.slice(i)}function position(arr,str,n){if(0==n){var h,m;for(n=-1,h=arr.length;h>n+1;)m=n+h>>1,arr[m]<str?n=m:h=m;return h}for(var i=n;i<arr.length&&arr[i]<str;i++);return i}function AMgetSymbol(str){for(var mk,st,tagst,k=0,j=0,match="",more=!0,i=1;i<=str.length&&more;i++)st=str.slice(0,i),j=k,k=position(AMnames,st,j),k<AMnames.length&&str.slice(0,AMnames[k].length)==AMnames[k]&&(match=AMnames[k],mk=k,i=match.length),more=k<AMnames.length&&str.slice(0,AMnames[k].length)>=AMnames[k];if(AMpreviousSymbol=AMcurrentSymbol,""!=match)return AMcurrentSymbol=AMsymbols[mk].ttype,AMsymbols[mk];AMcurrentSymbol=CONST,k=1,st=str.slice(0,1);for(var integ=!0;st>="0"&&"9">=st&&k<=str.length;)st=str.slice(k,k+1),k++;if(st==decimalsign&&(st=str.slice(k,k+1),st>="0"&&"9">=st))for(integ=!1,k++;st>="0"&&"9">=st&&k<=str.length;)st=str.slice(k,k+1),k++;return integ&&k>1||k>2?(st=str.slice(0,k-1),tagst="mn"):(k=2,st=str.slice(0,1),tagst=("A">st||st>"Z")&&("a">st||st>"z")?"mo":"mi"),"-"==st&&AMpreviousSymbol==INFIX?(AMcurrentSymbol=INFIX,{input:st,tag:tagst,output:st,ttype:UNARY,func:!0}):{input:st,tag:tagst,output:st,ttype:CONST}}function AMremoveBrackets(node){var st;node.hasChildNodes()&&(!node.firstChild.hasChildNodes()||"mrow"!=node.nodeName&&"M:MROW"!=node.nodeName||(st=node.firstChild.firstChild.nodeValue,"("!=st&&"["!=st&&"{"!=st||node.removeChild(node.firstChild)),!node.lastChild.hasChildNodes()||"mrow"!=node.nodeName&&"M:MROW"!=node.nodeName||(st=node.lastChild.firstChild.nodeValue,")"!=st&&"]"!=st&&"}"!=st||node.removeChild(node.lastChild)))}function AMparseSexpr(str){var symbol,node,result,i,st,newFrag=document.createDocumentFragment();if(str=AMremoveCharsAndBlanks(str,0),symbol=AMgetSymbol(str),null==symbol||symbol.ttype==RIGHTBRACKET&&AMnestingDepth>0)return[null,str];switch(symbol.ttype==DEFINITION&&(str=symbol.output+AMremoveCharsAndBlanks(str,symbol.input.length),symbol=AMgetSymbol(str)),symbol.ttype){case UNDEROVER:case CONST:return str=AMremoveCharsAndBlanks(str,symbol.input.length),[createMmlNode(symbol.tag,document.createTextNode(symbol.output)),str];case LEFTBRACKET:return AMnestingDepth++,str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseExpr(str,!0),AMnestingDepth--,"boolean"==typeof symbol.invisible&&symbol.invisible?node=createMmlNode("mrow",result[0]):(node=createMmlNode("mo",document.createTextNode(symbol.output)),node=createMmlNode("mrow",node),node.appendChild(result[0])),[node,result[1]];case TEXT:return symbol!=AMquote&&(str=AMremoveCharsAndBlanks(str,symbol.input.length)),i="{"==str.charAt(0)?str.indexOf("}"):"("==str.charAt(0)?str.indexOf(")"):"["==str.charAt(0)?str.indexOf("]"):symbol==AMquote?str.slice(1).indexOf('"')+1:0,-1==i&&(i=str.length),st=str.slice(1,i)," "==st.charAt(0)&&(node=createMmlNode("mspace"),node.setAttribute("width","1ex"),newFrag.appendChild(node)),newFrag.appendChild(createMmlNode(symbol.tag,document.createTextNode(st)))," "==st.charAt(st.length-1)&&(node=createMmlNode("mspace"),node.setAttribute("width","1ex"),newFrag.appendChild(node)),str=AMremoveCharsAndBlanks(str,i+1),[createMmlNode("mrow",newFrag),str];case UNARYUNDEROVER:case UNARY:if(str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseSexpr(str),null==result[0])return[createMmlNode(symbol.tag,document.createTextNode(symbol.output)),str];if("boolean"==typeof symbol.func&&symbol.func)return st=str.charAt(0),"^"==st||"_"==st||"/"==st||"|"==st||","==st||1==symbol.input.length&&symbol.input.match(/\w/)&&"("!=st?[createMmlNode(symbol.tag,document.createTextNode(symbol.output)),str]:(node=createMmlNode("mrow",createMmlNode(symbol.tag,document.createTextNode(symbol.output))),node.appendChild(result[0]),[node,result[1]]);if(AMremoveBrackets(result[0]),"sqrt"==symbol.input)return[createMmlNode(symbol.tag,result[0]),result[1]];if("undefined"!=typeof symbol.rewriteleftright)return node=createMmlNode("mrow",createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[0]))),node.appendChild(result[0]),node.appendChild(createMmlNode("mo",document.createTextNode(symbol.rewriteleftright[1]))),[node,result[1]];if("cancel"==symbol.input)return node=createMmlNode(symbol.tag,result[0]),node.setAttribute("notation","updiagonalstrike"),[node,result[1]];if("boolean"==typeof symbol.acc&&symbol.acc)return node=createMmlNode(symbol.tag,result[0]),node.appendChild(createMmlNode("mo",document.createTextNode(symbol.output))),[node,result[1]];if(!isIE&&"undefined"!=typeof symbol.codes)for(i=0;i<result[0].childNodes.length;i++)if("mi"==result[0].childNodes[i].nodeName||"mi"==result[0].nodeName){st="mi"==result[0].nodeName?result[0].firstChild.nodeValue:result[0].childNodes[i].firstChild.nodeValue;for(var newst=[],j=0;j<st.length;j++)newst+=st.charCodeAt(j)>64&&st.charCodeAt(j)<91?symbol.codes[st.charCodeAt(j)-65]:st.charCodeAt(j)>96&&st.charCodeAt(j)<123?symbol.codes[st.charCodeAt(j)-71]:st.charAt(j);"mi"==result[0].nodeName?result[0]=createMmlNode("mo").appendChild(document.createTextNode(newst)):result[0].replaceChild(createMmlNode("mo").appendChild(document.createTextNode(newst)),result[0].childNodes[i])}return node=createMmlNode(symbol.tag,result[0]),node.setAttribute(symbol.atname,symbol.atval),[node,result[1]];case BINARY:if(str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseSexpr(str),null==result[0])return[createMmlNode("mo",document.createTextNode(symbol.input)),str];AMremoveBrackets(result[0]);var result2=AMparseSexpr(result[1]);return null==result2[0]?[createMmlNode("mo",document.createTextNode(symbol.input)),str]:(AMremoveBrackets(result2[0]),"color"==symbol.input?("{"==str.charAt(0)?i=str.indexOf("}"):"("==str.charAt(0)?i=str.indexOf(")"):"["==str.charAt(0)&&(i=str.indexOf("]")),st=str.slice(1,i),node=createMmlNode(symbol.tag,result2[0]),node.setAttribute("mathcolor",st),[node,result2[1]]):("root"!=symbol.input&&"stackrel"!=symbol.output||newFrag.appendChild(result2[0]),newFrag.appendChild(result[0]),"frac"==symbol.input&&newFrag.appendChild(result2[0]),[createMmlNode(symbol.tag,newFrag),result2[1]]));case INFIX:return str=AMremoveCharsAndBlanks(str,symbol.input.length),[createMmlNode("mo",document.createTextNode(symbol.output)),str];case SPACE:return str=AMremoveCharsAndBlanks(str,symbol.input.length),node=createMmlNode("mspace"),node.setAttribute("width","1ex"),newFrag.appendChild(node),newFrag.appendChild(createMmlNode(symbol.tag,document.createTextNode(symbol.output))),node=createMmlNode("mspace"),node.setAttribute("width","1ex"),newFrag.appendChild(node),[createMmlNode("mrow",newFrag),str];case LEFTRIGHT:return AMnestingDepth++,str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseExpr(str,!1),AMnestingDepth--,st="",null!=result[0].lastChild&&(st=result[0].lastChild.firstChild.nodeValue),"|"==st?(node=createMmlNode("mo",document.createTextNode(symbol.output)),node=createMmlNode("mrow",node),node.appendChild(result[0]),[node,result[1]]):(node=createMmlNode("mo",document.createTextNode("∣")),node=createMmlNode("mrow",node),[node,str]);default:return str=AMremoveCharsAndBlanks(str,symbol.input.length),[createMmlNode(symbol.tag,document.createTextNode(symbol.output)),str]}}function AMparseIexpr(str){var symbol,sym1,sym2,node,result,underover;if(str=AMremoveCharsAndBlanks(str,0),sym1=AMgetSymbol(str),result=AMparseSexpr(str),node=result[0],str=result[1],symbol=AMgetSymbol(str),symbol.ttype==INFIX&&"/"!=symbol.input){if(str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseSexpr(str),null==result[0]?result[0]=createMmlNode("mo",document.createTextNode("□")):AMremoveBrackets(result[0]),str=result[1],underover=sym1.ttype==UNDEROVER||sym1.ttype==UNARYUNDEROVER,"_"==symbol.input)if(sym2=AMgetSymbol(str),"^"==sym2.input){str=AMremoveCharsAndBlanks(str,sym2.input.length);var res2=AMparseSexpr(str);AMremoveBrackets(res2[0]),str=res2[1],node=createMmlNode(underover?"munderover":"msubsup",node),node.appendChild(result[0]),node.appendChild(res2[0]),node=createMmlNode("mrow",node)}else node=createMmlNode(underover?"munder":"msub",node),node.appendChild(result[0]);else"^"==symbol.input&&underover?(node=createMmlNode("mover",node),node.appendChild(result[0])):(node=createMmlNode(symbol.tag,node),node.appendChild(result[0]));"undefined"!=typeof sym1.func&&sym1.func&&(sym2=AMgetSymbol(str),sym2.ttype!=INFIX&&sym2.ttype!=RIGHTBRACKET&&(result=AMparseIexpr(str),node=createMmlNode("mrow",node),node.appendChild(result[0]),str=result[1]))}return[node,str]}function AMparseExpr(str,rightbracket){var symbol,node,result,i,newFrag=document.createDocumentFragment();do str=AMremoveCharsAndBlanks(str,0),result=AMparseIexpr(str),node=result[0],str=result[1],symbol=AMgetSymbol(str),symbol.ttype==INFIX&&"/"==symbol.input?(str=AMremoveCharsAndBlanks(str,symbol.input.length),result=AMparseIexpr(str),null==result[0]?result[0]=createMmlNode("mo",document.createTextNode("□")):AMremoveBrackets(result[0]),str=result[1],AMremoveBrackets(node),node=createMmlNode(symbol.tag,node),node.appendChild(result[0]),newFrag.appendChild(node),symbol=AMgetSymbol(str)):void 0!=node&&newFrag.appendChild(node);while((symbol.ttype!=RIGHTBRACKET&&(symbol.ttype!=LEFTRIGHT||rightbracket)||0==AMnestingDepth)&&null!=symbol&&""!=symbol.output);if(symbol.ttype==RIGHTBRACKET||symbol.ttype==LEFTRIGHT){var len=newFrag.childNodes.length;if(len>0&&"mrow"==newFrag.childNodes[len-1].nodeName&&newFrag.childNodes[len-1].lastChild&&newFrag.childNodes[len-1].lastChild.firstChild){var right=newFrag.childNodes[len-1].lastChild.firstChild.nodeValue;if(")"==right||"]"==right){var left=newFrag.childNodes[len-1].firstChild.firstChild.nodeValue;if("("==left&&")"==right&&"}"!=symbol.output||"["==left&&"]"==right){var pos=[],matrix=!0,m=newFrag.childNodes.length;for(i=0;matrix&&m>i;i+=2){if(pos[i]=[],node=newFrag.childNodes[i],matrix&&(matrix="mrow"==node.nodeName&&(i==m-1||"mo"==node.nextSibling.nodeName&&","==node.nextSibling.firstChild.nodeValue)&&node.firstChild.firstChild.nodeValue==left&&node.lastChild.firstChild.nodeValue==right),matrix)for(var j=0;j<node.childNodes.length;j++)","==node.childNodes[j].firstChild.nodeValue&&(pos[i][pos[i].length]=j);matrix&&i>1&&(matrix=pos[i].length==pos[i-2].length)}if(matrix=matrix&&(pos.length>1||pos[0].length>0)){var row,frag,n,k,table=document.createDocumentFragment();for(i=0;m>i;i+=2){for(row=document.createDocumentFragment(),frag=document.createDocumentFragment(),node=newFrag.firstChild,n=node.childNodes.length,k=0,node.removeChild(node.firstChild),j=1;n-1>j;j++)"undefined"!=typeof pos[i][k]&&j==pos[i][k]?(node.removeChild(node.firstChild),row.appendChild(createMmlNode("mtd",frag)),k++):frag.appendChild(node.firstChild);row.appendChild(createMmlNode("mtd",frag)),newFrag.childNodes.length>2&&(newFrag.removeChild(newFrag.firstChild),newFrag.removeChild(newFrag.firstChild)),table.appendChild(createMmlNode("mtr",row))}node=createMmlNode("mtable",table),"boolean"==typeof symbol.invisible&&symbol.invisible&&node.setAttribute("columnalign","left"),newFrag.replaceChild(node,newFrag.firstChild)}}}}str=AMremoveCharsAndBlanks(str,symbol.input.length),"boolean"==typeof symbol.invisible&&symbol.invisible||(node=createMmlNode("mo",document.createTextNode(symbol.output)),newFrag.appendChild(node))}return[newFrag,str]}function parseMath(str,latex){var frag,node;return AMnestingDepth=0,str=str.replace(/&nbsp;/g,""),str=str.replace(/&gt;/g,">"),str=str.replace(/&lt;/g,"<"),str=str.replace(/(Sin|Cos|Tan|Arcsin|Arccos|Arctan|Sinh|Cosh|Tanh|Cot|Sec|Csc|Log|Ln|Abs)/g,function(v){return v.toLowerCase()}),frag=AMparseExpr(str.replace(/^\s+/g,""),!1)[0],node=createMmlNode("mstyle",frag),""!=mathcolor&&node.setAttribute("mathcolor",mathcolor),""!=mathfontfamily&&node.setAttribute("fontfamily",mathfontfamily),displaystyle&&node.setAttribute("displaystyle","true"),node=createMmlNode("math",node),showasciiformulaonhover&&node.setAttribute("title",str.replace(/\s+/g," ")),node}function strarr2docFrag(arr,linebreaks,latex){for(var newFrag=document.createDocumentFragment(),expr=!1,i=0;i<arr.length;i++){if(expr)newFrag.appendChild(parseMath(arr[i],latex));else{var arri=linebreaks?arr[i].split("\n\n"):[arr[i]];newFrag.appendChild(createElementXHTML("span").appendChild(document.createTextNode(arri[0])));for(var j=1;j<arri.length;j++)newFrag.appendChild(createElementXHTML("p")),newFrag.appendChild(createElementXHTML("span").appendChild(document.createTextNode(arri[j])))}expr=!expr}return newFrag}function AMautomathrec(str){var texcommand="\\\\[a-zA-Z]+|\\\\\\s|",ambigAMtoken="\\b(?:oo|lim|ln|int|oint|del|grad|aleph|prod|prop|sinh|cosh|tanh|cos|sec|pi|tt|fr|sf|sube|supe|sub|sup|det|mod|gcd|lcm|min|max|vec|ddot|ul|chi|eta|nu|mu)(?![a-z])|",englishAMtoken="\\b(?:sum|ox|log|sin|tan|dim|hat|bar|dot)(?![a-z])|",secondenglishAMtoken="|\\bI\\b|\\bin\\b|\\btext\\b",simpleAMtoken="NN|ZZ|QQ|RR|CC|TT|AA|EE|sqrt|dx|dy|dz|dt|xx|vv|uu|nn|bb|cc|csc|cot|alpha|beta|delta|Delta|epsilon|gamma|Gamma|kappa|lambda|Lambda|omega|phi|Phi|Pi|psi|Psi|rho|sigma|Sigma|tau|theta|Theta|xi|Xi|zeta",letter="[a-zA-HJ-Z](?=(?:[^a-zA-Z]|$|"+ambigAMtoken+englishAMtoken+simpleAMtoken+"))|",token=letter+texcommand+"\\d+|[-()[\\]{}+=*&^_%\\@/<>,\\|!:;'~]|\\.(?!(?: |$))|"+ambigAMtoken+englishAMtoken+simpleAMtoken,re=new RegExp("(^|\\s)((("+token+")\\s?)(("+token+secondenglishAMtoken+")\\s?)+)([,.?]?(?=\\s|$))","g");str=str.replace(re," `$2`$7");var arr=str.split(AMdelimiter1),re1=new RegExp("(^|\\s)([b-zB-HJ-Z+*<>]|"+texcommand+ambigAMtoken+simpleAMtoken+")(\\s|\\n|$)","g"),re2=new RegExp("(^|\\s)([a-z]|"+texcommand+ambigAMtoken+simpleAMtoken+")([,.])","g");for(i=0;i<arr.length;i++)i%2==0&&(arr[i]=arr[i].replace(re1," `$2`$3"),arr[i]=arr[i].replace(re2," `$2`$3"),arr[i]=arr[i].replace(/([{}[\]])/,"`$1`"));return str=arr.join(AMdelimiter1),str=str.replace(/((^|\s)\([a-zA-Z]{2,}.*?)\)`/g,"$1`)"),str=str.replace(/`(\((a\s|in\s))(.*?[a-zA-Z]{2,}\))/g,"$1`$3"),str=str.replace(/\sin`/g,"` in"),str=str.replace(/`(\(\w\)[,.]?(\s|\n|$))/g,"$1`"),str=str.replace(/`([0-9.]+|e.g|i.e)`(\.?)/gi,"$1$2"),str=str.replace(/`([0-9.]+:)`/g,"$1")}function processNodeR(n,linebreaks,latex){var mtch,str,arr,frg,i;if(0==n.childNodes.length){if(8==n.nodeType&&!linebreaks||"form"==n.parentNode.nodeName||"FORM"==n.parentNode.nodeName||"textarea"==n.parentNode.nodeName||"TEXTAREA"==n.parentNode.nodeName)return 0;if(str=n.nodeValue,null!=str){if(str=str.replace(/\r\n\r\n/g,"\n\n"),str=str.replace(/\x20+/g," "),str=str.replace(/\s*\r\n/g," "),latex)for(mtch=-1!=str.indexOf("$"),str=str.replace(/([^\\])\$/g,"$1 $"),str=str.replace(/^\$/," $"),arr=str.split(" $"),i=0;i<arr.length;i++)arr[i]=arr[i].replace(/\\\$/g,"$");else{if(mtch=!1,str=str.replace(new RegExp(AMescape1,"g"),function(){return mtch=!0,"AMescape1"}),str=str.replace(/\\?end{?a?math}?/i,function(){return automathrecognize=!1,mtch=!0,""}),str=str.replace(/amath\b|\\begin{a?math}/i,function(){return automathrecognize=!0,mtch=!0,""}),arr=str.split(AMdelimiter1),automathrecognize)for(i=0;i<arr.length;i++)i%2==0&&(arr[i]=AMautomathrec(arr[i]));for(str=arr.join(AMdelimiter1),arr=str.split(AMdelimiter1),i=0;i<arr.length;i++)arr[i]=arr[i].replace(/AMescape1/g,AMdelimiter1)}if(arr.length>1||mtch){if(noMathML)return 0;frg=strarr2docFrag(arr,8==n.nodeType,latex);var len=frg.childNodes.length;return n.parentNode.replaceChild(frg,n),len-1}}}else if("math"!=n.nodeName)for(i=0;i<n.childNodes.length;i++)i+=processNodeR(n.childNodes[i],linebreaks,latex);return 0}function AMprocessNode(n,linebreaks,spanclassAM){var frag,st;if(null!=spanclassAM){frag=document.getElementsByTagName("span");for(var i=0;i<frag.length;i++)"AM"==frag[i].className&&processNodeR(frag[i],linebreaks,!1)}else{try{st=n.innerHTML}catch(err){}(null==st||/amath\b|\\begin{a?math}/i.test(st)||-1!=st.indexOf(AMdelimiter1+" ")||st.slice(-1)==AMdelimiter1||-1!=st.indexOf(AMdelimiter1+"<")||-1!=st.indexOf(AMdelimiter1+"\n"))&&processNodeR(n,linebreaks,!1)}}function generic(){init()&&translateOnLoad&&translate()}var mathcolor="blue",mathfontfamily="serif",automathrecognize=!1,checkForMathML=!0,notifyIfNoMathML=!0,alertIfNoMathML=!1,translateOnLoad=!0,translateASCIIMath=!0,displaystyle=!0,showasciiformulaonhover=!0,decimalsign=".",AMdelimiter1="`",AMescape1="\\\\`",AMdocumentId="wikitext",fixphi=!0,isIE="Microsoft"==navigator.appName.slice(0,9),noMathML=!1,translated=!1;isIE&&(document.write('<object id="mathplayer"  classid="clsid:32F66A20-7614-11D4-BD11-00104BD3F987"></object>'),document.write('<?import namespace="m" implementation="#mathplayer"?>')),setStylesheet("#AMMLcloseDiv {font-size:0.8em; padding-top:1em; color:#014}\n#AMMLwarningBox {position:absolute; width:100%; top:0; left:0; z-index:200; text-align:center; font-size:1em; font-weight:bold; padding:0.5em 0 0.5em 0; color:#ffc; background:#c30}");var AMnestingDepth,AMpreviousSymbol,AMcurrentSymbol,AMmathml="http://www.w3.org/1998/Math/MathML",AMcal=["𝒜","ℬ","𝒞","𝒟","ℰ","ℱ","𝒢","ℋ","ℐ","𝒥","𝒦","ℒ","ℳ","𝒩","𝒪","𝒫","𝒬","ℛ","𝒮","𝒯","𝒰","𝒱","𝒲","𝒳","𝒴","𝒵","𝒶","𝒷","𝒸","𝒹","ℯ","𝒻","ℊ","𝒽","𝒾","𝒿","𝓀","𝓁","𝓂","𝓃","ℴ","𝓅","𝓆","𝓇","𝓈","𝓉","𝓊","𝓋","𝓌","𝓍","𝓎","𝓏"],AMfrk=["𝔄","𝔅","ℭ","𝔇","𝔈","𝔉","𝔊","ℌ","ℑ","𝔍","𝔎","𝔏","𝔐","𝔑","𝔒","𝔓","𝔔","ℜ","𝔖","𝔗","𝔘","𝔙","𝔚","𝔛","𝔜","ℨ","𝔞","𝔟","𝔠","𝔡","𝔢","𝔣","𝔤","𝔥","𝔦","𝔧","𝔨","𝔩","𝔪","𝔫","𝔬","𝔭","𝔮","𝔯","𝔰","𝔱","𝔲","𝔳","𝔴","𝔵","𝔶","𝔷"],AMbbb=["𝔸","𝔹","ℂ","𝔻","𝔼","𝔽","𝔾","ℍ","𝕀","𝕁","𝕂","𝕃","𝕄","ℕ","𝕆","ℙ","ℚ","ℝ","𝕊","𝕋","𝕌","𝕍","𝕎","𝕏","𝕐","ℤ","𝕒","𝕓","𝕔","𝕕","𝕖","𝕗","𝕘","𝕙","𝕚","𝕛","𝕜","𝕝","𝕞","𝕟","𝕠","𝕡","𝕢","𝕣","𝕤","𝕥","𝕦","𝕧","𝕨","𝕩","𝕪","𝕫"],CONST=0,UNARY=1,BINARY=2,INFIX=3,LEFTBRACKET=4,RIGHTBRACKET=5,SPACE=6,UNDEROVER=7,DEFINITION=8,LEFTRIGHT=9,TEXT=10,UNARYUNDEROVER=15,AMquote={input:'"',tag:"mtext",output:"mbox",tex:null,ttype:TEXT},AMsymbols=[{input:"alpha",tag:"mi",output:"α",tex:null,ttype:CONST},{input:"beta",tag:"mi",output:"β",tex:null,ttype:CONST},{input:"chi",tag:"mi",output:"χ",tex:null,ttype:CONST},{input:"delta",tag:"mi",output:"δ",tex:null,ttype:CONST},{input:"Delta",tag:"mo",output:"Δ",tex:null,ttype:CONST},{input:"epsi",tag:"mi",output:"ε",tex:"epsilon",ttype:CONST},{input:"varepsilon",tag:"mi",output:"ɛ",tex:null,ttype:CONST},{input:"eta",tag:"mi",output:"η",tex:null,ttype:CONST},{input:"gamma",tag:"mi",output:"γ",tex:null,ttype:CONST},{input:"Gamma",tag:"mo",output:"Γ",tex:null,ttype:CONST},{input:"iota",tag:"mi",output:"ι",tex:null,ttype:CONST},{input:"kappa",tag:"mi",output:"κ",tex:null,ttype:CONST},{input:"lambda",tag:"mi",output:"λ",tex:null,ttype:CONST},{input:"Lambda",tag:"mo",output:"Λ",tex:null,ttype:CONST},{input:"lamda",tag:"mi",output:"λ",tex:null,ttype:CONST},{input:"Lamda",tag:"mo",output:"Λ",tex:null,ttype:CONST},{input:"mu",tag:"mi",output:"μ",tex:null,ttype:CONST},{input:"nu",tag:"mi",output:"ν",tex:null,ttype:CONST},{input:"omega",tag:"mi",output:"ω",tex:null,ttype:CONST},{input:"Omega",tag:"mo",output:"Ω",tex:null,ttype:CONST},{input:"phi",tag:"mi",output:fixphi?"ϕ":"φ",tex:null,ttype:CONST},{input:"varphi",tag:"mi",output:fixphi?"φ":"ϕ",tex:null,ttype:CONST},{input:"Phi",tag:"mo",output:"Φ",tex:null,ttype:CONST},{input:"pi",tag:"mi",output:"π",tex:null,ttype:CONST},{input:"Pi",tag:"mo",output:"Π",tex:null,ttype:CONST},{input:"psi",tag:"mi",output:"ψ",tex:null,ttype:CONST},{input:"Psi",tag:"mi",output:"Ψ",tex:null,ttype:CONST},{input:"rho",tag:"mi",output:"ρ",tex:null,ttype:CONST},{input:"sigma",tag:"mi",output:"σ",tex:null,ttype:CONST},{input:"Sigma",tag:"mo",output:"Σ",tex:null,ttype:CONST},{input:"tau",tag:"mi",output:"τ",tex:null,ttype:CONST},{input:"theta",tag:"mi",output:"θ",tex:null,ttype:CONST},{input:"vartheta",tag:"mi",output:"ϑ",tex:null,ttype:CONST},{input:"Theta",tag:"mo",output:"Θ",tex:null,ttype:CONST},{input:"upsilon",tag:"mi",output:"υ",tex:null,ttype:CONST},{input:"xi",tag:"mi",output:"ξ",tex:null,ttype:CONST},{input:"Xi",tag:"mo",output:"Ξ",tex:null,ttype:CONST},{input:"zeta",tag:"mi",output:"ζ",tex:null,ttype:CONST},{input:"*",tag:"mo",output:"⋅",tex:"cdot",ttype:CONST},{input:"**",tag:"mo",output:"∗",tex:"ast",ttype:CONST},{input:"***",tag:"mo",output:"⋆",tex:"star",ttype:CONST},{input:"//",tag:"mo",output:"/",tex:null,ttype:CONST},{input:"\\\\",tag:"mo",output:"\\",tex:"backslash",ttype:CONST},{input:"setminus",tag:"mo",output:"\\",tex:null,ttype:CONST},{input:"xx",tag:"mo",output:"×",tex:"times",ttype:CONST},{input:"|><",tag:"mo",output:"⋉",tex:"ltimes",ttype:CONST},{input:"><|",tag:"mo",output:"⋊",tex:"rtimes",ttype:CONST},{input:"|><|",tag:"mo",output:"⋈",tex:"bowtie",ttype:CONST},{input:"-:",tag:"mo",output:"÷",tex:"div",ttype:CONST},{input:"divide",tag:"mo",output:"-:",tex:null,ttype:DEFINITION},{input:"@",tag:"mo",output:"∘",tex:"circ",ttype:CONST},{input:"o+",tag:"mo",output:"⊕",tex:"oplus",ttype:CONST},{input:"ox",tag:"mo",output:"⊗",tex:"otimes",ttype:CONST},{input:"o.",tag:"mo",output:"⊙",tex:"odot",ttype:CONST},{input:"sum",tag:"mo",output:"∑",tex:null,ttype:UNDEROVER},{input:"prod",tag:"mo",output:"∏",tex:null,ttype:UNDEROVER},{input:"^^",tag:"mo",output:"∧",tex:"wedge",ttype:CONST},{input:"^^^",tag:"mo",output:"⋀",tex:"bigwedge",ttype:UNDEROVER},{input:"vv",tag:"mo",output:"∨",tex:"vee",ttype:CONST},{input:"vvv",tag:"mo",output:"⋁",tex:"bigvee",ttype:UNDEROVER},{input:"nn",tag:"mo",output:"∩",tex:"cap",ttype:CONST},{input:"nnn",tag:"mo",output:"⋂",tex:"bigcap",ttype:UNDEROVER},{input:"uu",tag:"mo",output:"∪",tex:"cup",ttype:CONST},{input:"uuu",tag:"mo",output:"⋃",tex:"bigcup",ttype:UNDEROVER},{input:"!=",tag:"mo",output:"≠",tex:"ne",ttype:CONST},{input:":=",tag:"mo",output:":=",tex:null,ttype:CONST},{input:"lt",tag:"mo",output:"<",tex:null,ttype:CONST},{input:"<=",tag:"mo",output:"≤",tex:"le",ttype:CONST},{input:"lt=",tag:"mo",output:"≤",tex:"leq",ttype:CONST},{input:"gt",tag:"mo",output:">",tex:null,ttype:CONST},{input:">=",tag:"mo",output:"≥",tex:"ge",ttype:CONST},{input:"gt=",tag:"mo",output:"≥",tex:"geq",ttype:CONST},{input:"-<",tag:"mo",output:"≺",tex:"prec",ttype:CONST},{input:"-lt",tag:"mo",output:"≺",tex:null,ttype:CONST},{input:">-",tag:"mo",output:"≻",tex:"succ",ttype:CONST},{input:"-<=",tag:"mo",output:"⪯",tex:"preceq",ttype:CONST},{input:">-=",tag:"mo",output:"⪰",tex:"succeq",ttype:CONST},{input:"in",tag:"mo",output:"∈",tex:null,ttype:CONST},{input:"!in",tag:"mo",output:"∉",tex:"notin",ttype:CONST},{input:"sub",tag:"mo",output:"⊂",tex:"subset",ttype:CONST},{input:"sup",tag:"mo",output:"⊃",tex:"supset",ttype:CONST},{input:"sube",tag:"mo",output:"⊆",tex:"subseteq",ttype:CONST},{input:"supe",tag:"mo",output:"⊇",tex:"supseteq",ttype:CONST},{input:"-=",tag:"mo",output:"≡",tex:"equiv",ttype:CONST},{input:"~=",tag:"mo",output:"≅",tex:"cong",ttype:CONST},{input:"~~",tag:"mo",output:"≈",tex:"approx",ttype:CONST},{input:"prop",tag:"mo",output:"∝",tex:"propto",ttype:CONST},{input:"and",tag:"mtext",output:"and",tex:null,ttype:SPACE},{input:"or",tag:"mtext",output:"or",tex:null,ttype:SPACE},{input:"not",tag:"mo",output:"¬",tex:"neg",ttype:CONST},{input:"=>",tag:"mo",output:"⇒",tex:"implies",ttype:CONST},{input:"if",tag:"mo",output:"if",tex:null,ttype:SPACE},{input:"<=>",tag:"mo",output:"⇔",tex:"iff",ttype:CONST},{input:"AA",tag:"mo",output:"∀",tex:"forall",ttype:CONST},{input:"EE",tag:"mo",output:"∃",tex:"exists",ttype:CONST},{input:"_|_",tag:"mo",output:"⊥",tex:"bot",ttype:CONST},{input:"TT",tag:"mo",output:"⊤",tex:"top",ttype:CONST},{input:"|--",tag:"mo",output:"⊢",tex:"vdash",ttype:CONST},{input:"|==",tag:"mo",output:"⊨",tex:"models",ttype:CONST},{input:"(",tag:"mo",output:"(",tex:null,ttype:LEFTBRACKET},{input:")",tag:"mo",output:")",tex:null,ttype:RIGHTBRACKET},{input:"[",tag:"mo",output:"[",tex:null,ttype:LEFTBRACKET},{input:"]",tag:"mo",output:"]",tex:null,ttype:RIGHTBRACKET},{input:"{",tag:"mo",output:"{",tex:null,ttype:LEFTBRACKET},{input:"}",tag:"mo",output:"}",tex:null,ttype:RIGHTBRACKET},{input:"|",tag:"mo",output:"|",tex:null,ttype:LEFTRIGHT},{input:"(:",tag:"mo",output:"〈",tex:"langle",ttype:LEFTBRACKET},{input:":)",tag:"mo",output:"〉",tex:"rangle",ttype:RIGHTBRACKET},{input:"<<",tag:"mo",output:"〈",tex:null,ttype:LEFTBRACKET},{input:">>",tag:"mo",output:"〉",tex:null,ttype:RIGHTBRACKET},{input:"{:",tag:"mo",output:"{:",tex:null,ttype:LEFTBRACKET,invisible:!0},{input:":}",tag:"mo",output:":}",tex:null,ttype:RIGHTBRACKET,invisible:!0},{input:"int",tag:"mo",output:"∫",tex:null,ttype:CONST},{input:"dx",tag:"mi",output:"{:d x:}",tex:null,ttype:DEFINITION},{input:"dy",tag:"mi",output:"{:d y:}",tex:null,ttype:DEFINITION},{input:"dz",tag:"mi",output:"{:d z:}",tex:null,ttype:DEFINITION},{input:"dt",tag:"mi",output:"{:d t:}",tex:null,ttype:DEFINITION},{input:"oint",tag:"mo",output:"∮",tex:null,ttype:CONST},{input:"del",tag:"mo",output:"∂",tex:"partial",ttype:CONST},{input:"grad",tag:"mo",output:"∇",tex:"nabla",ttype:CONST},{input:"+-",tag:"mo",output:"±",tex:"pm",ttype:CONST},{input:"O/",tag:"mo",output:"∅",tex:"emptyset",ttype:CONST},{input:"oo",tag:"mo",output:"∞",tex:"infty",ttype:CONST},{input:"aleph",tag:"mo",output:"ℵ",tex:null,ttype:CONST},{input:"...",tag:"mo",output:"...",tex:"ldots",ttype:CONST},{input:":.",tag:"mo",output:"∴",tex:"therefore",ttype:CONST},{input:"/_",tag:"mo",output:"∠",tex:"angle",ttype:CONST},{input:"/_\\",tag:"mo",output:"△",tex:"triangle",ttype:CONST},{input:"'",tag:"mo",output:"′",tex:"prime",ttype:CONST},{input:"tilde",tag:"mover",output:"~",tex:null,ttype:UNARY,acc:!0},{input:"\\ ",tag:"mo",output:" ",tex:null,ttype:CONST},{input:"frown",tag:"mo",output:"⌢",tex:null,ttype:CONST},{input:"quad",tag:"mo",output:"  ",tex:null,ttype:CONST},{input:"qquad",tag:"mo",output:"    ",tex:null,ttype:CONST},{input:"cdots",tag:"mo",output:"⋯",tex:null,ttype:CONST},{input:"vdots",tag:"mo",output:"⋮",tex:null,ttype:CONST},{input:"ddots",tag:"mo",output:"⋱",tex:null,ttype:CONST},{input:"diamond",tag:"mo",output:"⋄",tex:null,ttype:CONST},{input:"square",tag:"mo",output:"□",tex:null,ttype:CONST},{input:"|__",tag:"mo",output:"⌊",tex:"lfloor",ttype:CONST},{input:"__|",tag:"mo",output:"⌋",tex:"rfloor",ttype:CONST},{input:"|~",tag:"mo",output:"⌈",tex:"lceiling",ttype:CONST},{input:"~|",tag:"mo",output:"⌉",tex:"rceiling",ttype:CONST},{input:"CC",tag:"mo",output:"ℂ",tex:null,ttype:CONST},{input:"NN",tag:"mo",output:"ℕ",tex:null,ttype:CONST},{input:"QQ",tag:"mo",output:"ℚ",tex:null,ttype:CONST},{input:"RR",tag:"mo",output:"ℝ",tex:null,ttype:CONST},{input:"ZZ",tag:"mo",output:"ℤ",tex:null,ttype:CONST},{input:"f",tag:"mi",output:"f",tex:null,ttype:UNARY,func:!0},{input:"g",tag:"mi",output:"g",tex:null,ttype:UNARY,func:!0},{input:"lim",tag:"mo",output:"lim",tex:null,ttype:UNDEROVER},{input:"Lim",tag:"mo",output:"Lim",tex:null,ttype:UNDEROVER},{input:"sin",tag:"mo",output:"sin",tex:null,ttype:UNARY,func:!0},{input:"cos",tag:"mo",output:"cos",tex:null,ttype:UNARY,func:!0},{input:"tan",tag:"mo",output:"tan",tex:null,ttype:UNARY,func:!0},{input:"sinh",tag:"mo",output:"sinh",tex:null,ttype:UNARY,func:!0},{input:"cosh",tag:"mo",output:"cosh",tex:null,ttype:UNARY,func:!0},{input:"tanh",tag:"mo",output:"tanh",tex:null,ttype:UNARY,func:!0},{input:"cot",tag:"mo",output:"cot",tex:null,ttype:UNARY,func:!0},{input:"sec",tag:"mo",output:"sec",tex:null,ttype:UNARY,func:!0},{input:"csc",tag:"mo",output:"csc",tex:null,ttype:UNARY,func:!0},{input:"arcsin",tag:"mo",output:"arcsin",tex:null,ttype:UNARY,func:!0},{input:"arccos",tag:"mo",output:"arccos",tex:null,ttype:UNARY,func:!0},{input:"arctan",tag:"mo",output:"arctan",tex:null,ttype:UNARY,func:!0},{input:"coth",tag:"mo",output:"coth",tex:null,ttype:UNARY,func:!0},{input:"sech",tag:"mo",output:"sech",tex:null,ttype:UNARY,func:!0},{input:"csch",tag:"mo",output:"csch",tex:null,ttype:UNARY,func:!0},{input:"exp",tag:"mo",output:"exp",tex:null,ttype:UNARY,func:!0},{input:"abs",tag:"mo",output:"abs",tex:null,ttype:UNARY,rewriteleftright:["|","|"]},{input:"norm",tag:"mo",output:"norm",tex:null,ttype:UNARY,rewriteleftright:["∥","∥"]},{input:"floor",tag:"mo",output:"floor",tex:null,ttype:UNARY,rewriteleftright:["⌊","⌋"]},{input:"ceil",tag:"mo",output:"ceil",tex:null,ttype:UNARY,rewriteleftright:["⌈","⌉"]},{input:"log",tag:"mo",output:"log",tex:null,ttype:UNARY,func:!0},{input:"ln",tag:"mo",output:"ln",tex:null,ttype:UNARY,func:!0},{input:"det",tag:"mo",
output:"det",tex:null,ttype:UNARY,func:!0},{input:"dim",tag:"mo",output:"dim",tex:null,ttype:CONST},{input:"mod",tag:"mo",output:"mod",tex:null,ttype:CONST},{input:"gcd",tag:"mo",output:"gcd",tex:null,ttype:UNARY,func:!0},{input:"lcm",tag:"mo",output:"lcm",tex:null,ttype:UNARY,func:!0},{input:"lub",tag:"mo",output:"lub",tex:null,ttype:CONST},{input:"glb",tag:"mo",output:"glb",tex:null,ttype:CONST},{input:"min",tag:"mo",output:"min",tex:null,ttype:UNDEROVER},{input:"max",tag:"mo",output:"max",tex:null,ttype:UNDEROVER},{input:"uarr",tag:"mo",output:"↑",tex:"uparrow",ttype:CONST},{input:"darr",tag:"mo",output:"↓",tex:"downarrow",ttype:CONST},{input:"rarr",tag:"mo",output:"→",tex:"rightarrow",ttype:CONST},{input:"->",tag:"mo",output:"→",tex:"to",ttype:CONST},{input:">->",tag:"mo",output:"↣",tex:"rightarrowtail",ttype:CONST},{input:"->>",tag:"mo",output:"↠",tex:"twoheadrightarrow",ttype:CONST},{input:">->>",tag:"mo",output:"⤖",tex:"twoheadrightarrowtail",ttype:CONST},{input:"|->",tag:"mo",output:"↦",tex:"mapsto",ttype:CONST},{input:"larr",tag:"mo",output:"←",tex:"leftarrow",ttype:CONST},{input:"harr",tag:"mo",output:"↔",tex:"leftrightarrow",ttype:CONST},{input:"rArr",tag:"mo",output:"⇒",tex:"Rightarrow",ttype:CONST},{input:"lArr",tag:"mo",output:"⇐",tex:"Leftarrow",ttype:CONST},{input:"hArr",tag:"mo",output:"⇔",tex:"Leftrightarrow",ttype:CONST},{input:"sqrt",tag:"msqrt",output:"sqrt",tex:null,ttype:UNARY},{input:"root",tag:"mroot",output:"root",tex:null,ttype:BINARY},{input:"frac",tag:"mfrac",output:"/",tex:null,ttype:BINARY},{input:"/",tag:"mfrac",output:"/",tex:null,ttype:INFIX},{input:"stackrel",tag:"mover",output:"stackrel",tex:null,ttype:BINARY},{input:"overset",tag:"mover",output:"stackrel",tex:null,ttype:BINARY},{input:"underset",tag:"munder",output:"stackrel",tex:null,ttype:BINARY},{input:"_",tag:"msub",output:"_",tex:null,ttype:INFIX},{input:"^",tag:"msup",output:"^",tex:null,ttype:INFIX},{input:"hat",tag:"mover",output:"^",tex:null,ttype:UNARY,acc:!0},{input:"bar",tag:"mover",output:"¯",tex:"overline",ttype:UNARY,acc:!0},{input:"vec",tag:"mover",output:"→",tex:null,ttype:UNARY,acc:!0},{input:"dot",tag:"mover",output:".",tex:null,ttype:UNARY,acc:!0},{input:"ddot",tag:"mover",output:"..",tex:null,ttype:UNARY,acc:!0},{input:"ul",tag:"munder",output:"̲",tex:"underline",ttype:UNARY,acc:!0},{input:"ubrace",tag:"munder",output:"⏟",tex:"underbrace",ttype:UNARYUNDEROVER,acc:!0},{input:"obrace",tag:"mover",output:"⏞",tex:"overbrace",ttype:UNARYUNDEROVER,acc:!0},{input:"text",tag:"mtext",output:"text",tex:null,ttype:TEXT},{input:"mbox",tag:"mtext",output:"mbox",tex:null,ttype:TEXT},{input:"color",tag:"mstyle",ttype:BINARY},{input:"cancel",tag:"menclose",output:"cancel",tex:null,ttype:UNARY},AMquote,{input:"bb",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"bb",tex:null,ttype:UNARY},{input:"mathbf",tag:"mstyle",atname:"mathvariant",atval:"bold",output:"mathbf",tex:null,ttype:UNARY},{input:"sf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"sf",tex:null,ttype:UNARY},{input:"mathsf",tag:"mstyle",atname:"mathvariant",atval:"sans-serif",output:"mathsf",tex:null,ttype:UNARY},{input:"bbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"bbb",tex:null,ttype:UNARY,codes:AMbbb},{input:"mathbb",tag:"mstyle",atname:"mathvariant",atval:"double-struck",output:"mathbb",tex:null,ttype:UNARY,codes:AMbbb},{input:"cc",tag:"mstyle",atname:"mathvariant",atval:"script",output:"cc",tex:null,ttype:UNARY,codes:AMcal},{input:"mathcal",tag:"mstyle",atname:"mathvariant",atval:"script",output:"mathcal",tex:null,ttype:UNARY,codes:AMcal},{input:"tt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"tt",tex:null,ttype:UNARY},{input:"mathtt",tag:"mstyle",atname:"mathvariant",atval:"monospace",output:"mathtt",tex:null,ttype:UNARY},{input:"fr",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"fr",tex:null,ttype:UNARY,codes:AMfrk},{input:"mathfrak",tag:"mstyle",atname:"mathvariant",atval:"fraktur",output:"mathfrak",tex:null,ttype:UNARY,codes:AMfrk}],AMnames=[];if("undefined"!=typeof window.addEventListener)window.addEventListener("load",generic,!1);else if("undefined"!=typeof document.addEventListener)document.addEventListener("load",generic,!1);else if("undefined"!=typeof window.attachEvent)window.attachEvent("onload",generic);else if("function"==typeof window.onload){var existing=onload;window.onload=function(){existing(),generic()}}else window.onload=generic;asciimath.newcommand=newcommand,asciimath.newsymbol=newsymbol,asciimath.AMprocesssNode=AMprocessNode,asciimath.parseMath=parseMath,asciimath.translate=translate}();