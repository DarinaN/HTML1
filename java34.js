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
{N=parseFloat($('tt1').value);
                       K=0;
                while(Math.pow(3,K) < N)
		       K++;
                       K--;
                      $('tt2').value=K;
                             

 }
