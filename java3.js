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
 {
                      if (a != b) 
		       {a = a + b;
			b = a;
		  	System.out.println(a + " " + b);}
		             
                        else {
			a = b = 0;
			System.out.println(a + " " + b);
		}
	}