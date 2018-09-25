function $() 
{ var elements = new Array(); 
for (var i = 0; i < arguments.length; i++) 
{ var element = arguments[i]; 
if (typeof element == 'string') 
element = document.getElementById(element); 
if (arguments.length == 1) 
return element; 
elements.push(element); 
} 
return elements; }  


function f1()
{A=parseInt($('tt1').value);
 B=parseInt($('tt2').value);
 N=parseInt($('tt3').value);
                     for(N>1; A<B;) 
		       {
		  	$('tt4').value=((B-A)/N);
                                }
		             }


function f2()
{A=parseInt($('tt1').value);
 B=parseInt($('tt2').value);
 N=parseInt($('tt3').value);
                   for (N>1; A<B;i>=0)
                     {
                       $('tt5').value=X=A+i*H;
                       F(X)=1-sin(A+i*H);
}
}
