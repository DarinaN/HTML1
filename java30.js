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

var today=new Date();
function f4 ()
{
  var month=today.getMonth;
  var date=today.getDate;
  var year=today.getYear;
  t=today.getTime()-day.get.Time();
  $('tt2')=parseInt(t/1000/60/60/24);
}
  

