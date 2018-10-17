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


function f4 ()
{
  now = new Date("input");
  setdate = new Date("May 09 1945 00:00:00")
  
  day = (setdate - now)/1000/60/60/24;
    day = Math.round(day);
  $('tt2').value=day;
}
  

