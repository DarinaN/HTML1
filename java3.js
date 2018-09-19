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
 {a=parseInt($('tt1').value);
  b=parseInt($('tt2').value);
                      if (a != b) 
		       {a = a + b;
			b = a;
		  	$('tt3').value=a + " " + b;}
		             
                        else {
			a = b = 0;
			$('tt3').value=a + " " + b;
		}
	}
