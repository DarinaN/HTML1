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


function f1(x){
var city="абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890_-";
lb1="Okay";
var mass1 = new String(x);
         if(mass1.length==2)
      {for(i=0;i<x.length;i++)
         {if(city.indexOf(x.charAt(i))<0)
           lb1="Fail";
               }
                 }
        else
        lb1="Fail";
          return lb1;
 }

