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

var setdate = new Date("May 09 1945 00:00:00");
function f4 ()
{
  var now = new Date();
  
  
  day = now.getTime() - setdate.getTime();
  day = Math.round(day);
  $('tt2')=parseInt(day/1000/60/60/24);
}
  

