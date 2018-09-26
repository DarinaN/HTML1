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
{A=parseFloat($('tt1').value);
 B=parseFloat($('tt2').value);
 N=parseFloat($('tt3').value);
                     for(i=1;i<=N;i++) 
		          {H=(B-A)/N;}
		      $('tt4').value=H;
}

function f2()
{A=parseFloat($('tt1').value);
 B=parseFloat($('tt2').value);
 N=parseFloat($('tt3').value);
 H=parseFloat($('tt4').value);
                   for (i=0;i<=N;i++)
                         {x = A + i * H;
                          F = 1 - (Math.sin(x));}
                    $('tt5').value=F;
}

