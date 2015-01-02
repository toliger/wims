
editAreaLoader.load_syntax['matlab'] = {
    'QUOTEMARKS' : {1: ' " '}
   ,'COMMENT_SINGLE' : {1 : '\\'}
	,'COMMENT_MULTI' : {'/\*' : '\*/'}
	,'KEYWORD_CASE_SENSITIVE' : true
	,'KEYWORDS' : {
	 'matlab' : ['gt','lt','gt','lt','amp','abs','acos','acosh','acot','acoth','acsc','acsch',
'all','angle','ans','any','asec','asech','asin','asinh','atan','atan2','atanh','auread',
'auwrite','axes','axis','balance','bar','bessel','besselk','bessely','beta',
'betainc','betaln','blanks','bone','break','brighten','capture','cart2pol',
'cart2sph','caxis','cd','cdf2rdf','cedit','ceil','chol','cla','clabel','clc','clear',
'clf','clock','close','colmmd','Colon','colorbar','colormap','ColorSpec','colperm',
'comet','comet3','compan','compass','computer','cond','condest','conj','contour',
'contour3','contourc','contrast','conv','conv2','cool','copper','corrcoef','cos',
'cosh','cot','coth','cov','cplxpair','cputime','cross','csc','csch','csvread',
'csvwrite','cumprod','cumsum','cylinder','date','dbclear','dbcont','dbdown',
'dbquit','dbstack','dbstatus','dbstep','dbstop','dbtype','dbup','ddeadv','ddeexec',
'ddeinit','ddepoke','ddereq','ddeterm','ddeunadv','deblank','dec2hex','deconv',
'del2','delete','demo','det','diag','diary','diff','diffuse','dir','disp','dlmread',
'dlmwrite','dmperm','dot','drawnow','echo','eig','ellipj','ellipke','else','elseif',
'end','engClose','engEvalString','engGetFull','engGetMatrix','engOpen',
'engOutputBuffer','engPutFull','engPutMatrix','engSetEvalCallback',
'engSetEvalTimeout','engWinInit','eps','erf','erfc','erfcx','erfinv','error',
'errorbar','etime','etree','eval','exist','exp','expint','expm','expo','eye','fclose',
'feather','feof','ferror','feval','fft','fft2','fftshift','fgetl','fgets','figure',
'fill','fill3','filter','filter2','find','findstr','finite','fix','flag','fliplr',
'flipud','floor','flops','fmin','fmins','fopen','for','format','fplot','fprintf',
'fread','frewind','fscanf','fseek','ftell','full','function','funm','fwrite','fzero',
'gallery','gamma','gammainc','gammaln','gca','gcd','gcf','gco','get','getenv',
'getframe','ginput','global','gplot','gradient','gray','graymon','grid','griddata',
'gtext','hadamard','hankel','help','hess','hex2dec','hex2num','hidden','hilb','hist',
'hold','home','hostid','hot','hsv','hsv2rgb','if','ifft','ifft2','imag','image',
'imagesc','Inf','info','input','int2str','interp1','interp2','interpft','inv',
'invhilb','isempty','isglobal','ishold','isieee','isinf','isletter','isnan',
'isreal','isspace','issparse','isstr','jet','keyboard','kron','lasterr','lcm',
'legend','legendre','length','lin2mu','line','linspace','load','log','log10','log2',
'loglog','logm','logspace','lookfor','lower','ls','lscov','lu','magic','matClose',
'matDeleteMatrix','matGetDir','matGetFp','matGetFull','matGetMatrix',
'matGetNextMatrix','matGetString','matlabrc','matlabroot','matOpen',
'matPutFull','matPutMatrix','matPutString','max','mean','median','menu','mesh',
'meshc','meshgrid','meshz','mexAtExit','mexCallMATLAB','mexdebug',
'mexErrMsgTxt','mexEvalString','mexFunction','mexGetFull','mexGetMatrix',
'mexGetMatrixPtr','mexPrintf','mexPutFull','mexPutMatrix','mexSetTrapFlag',
'min','more','movie','moviein','mu2lin','mxCalloc','mxCopyCharacterToPtr',
'mxCopyComplex16ToPtr','mxCopyInteger4ToPtr','mxCopyPtrToCharacter',
'mxCopyPtrToComplex16','mxCopyPtrToInteger4','mxCopyPtrToReal8',
'mxCopyReal8ToPtr','mxCreateFull','mxCreateSparse','mxCreateString',
'mxFree','mxFreeMatrix','mxGetIr','mxGetJc','mxGetM','mxGetN','mxGetName',
'mxGetNzmax','mxGetPi','mxGetPr','mxGetScalar','mxGetString','mxIsComplex',
'mxIsFull','mxIsNumeric','mxIsSparse','mxIsString','mxIsTypeDouble',
'mxSetIr','mxSetJc','mxSetM','mxSetN','mxSetName','mxSetNzmax','mxSetPi',
'mxSetPr','NaN','nargchk','nargin','nargout','newplot','nextpow2','nnls','nnz',
'nonzeros','norm','normest','null','num2str','nzmax','ode23','ode45','orient','orth',
'pack','pascal','patch','path','pause','pcolor','pi','pink','pinv','plot','plot3',
'pol2cart','polar','poly','polyder','polyeig','polyfit','polyval','polyvalm',
'pow2','print','printopt','prism','prod','pwd','qr','qrdelete','qrinsert','quad',
'quad8','quit','quiver','qz','rand','randn','randperm','rank','rat','rats','rbbox',
'rcond','real','realmax','realmin','refresh','rem','reset','reshape','residue',
'return','rgb2hsv','rgbplot','rootobject','roots','rose','rosser','rot90','rotate',
'round','rref','rrefmovie','rsf2csf','save','saxis','schur','sec','sech','semilogx',
'semilogy','set','setstr','shading','sign','sin','sinh','size','slice','sort','sound',
'spalloc','sparse','spaugment','spconvert','spdiags','specular','speye','spfun',
'sph2cart','sphere','spinmap','spline','spones','spparms','sprandn','sprandsym',
'sprank','sprintf','spy','sqrt','sqrtm','sscanf','stairs','startup','std','stem',
'str2mat','str2num','strcmp','strings','strrep','strtok','subplot','subscribe',
'subspace','sum','surf','surface','surfc','surfl','surfnorm','svd','symbfact',
'symmmd','symrcm','tan','tanh','tempdir','tempname','terminal','text','tic','title',
'toc','toeplitz','trace','trapz','tril','triu','type','uicontrol','uigetfile',
'uimenu','uiputfile','unix','unwrap','upper','vander','ver','version','view',
'viewmtx','waitforbuttonpress','waterfall','wavread','wavwrite','what',
'whatsnew','which','while','white','whitebg','who','whos','wilkinson','wk1read',
'wk1write','xlabel','xor','ylabel','zeros','zlabel','zoom']
	 }
	 ,'OPERATORS' :[
		'*', '+', '-', '/', '^', ':=', '<', '=', '>'
	]
	,'DELIMITERS' :[
		'(', ')', '[', ']','{','}','\(', '\)'
	]
	 ,'STYLES' : {
		'COMMENTS': 'color: #0000CD;'
		,'QUOTESMARKS': 'color: #6381F8;'
		,'KEYWORDS' : {
			'scilab' : 'color: #3399FF;'
			}
		,'OPERATORS' : 'color: #CD00CD;'
		,'DELIMITERS' : 'color: #60CA00;'
		}
};
