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

function f(){
var x1=document.getElementById('b6');
x1.style.left=(parseInt(x1.style.left)+100)+'px';
x1.style.top=(parseInt(x1.style.top)+100)+'px';
r1=100;
str1='rgb('+r1+', '+b6+')';
x1.style.backgroundColor=str1;
$('tt2').value=t;
}
function k()
{t=setInterval('f()',1000);
}
function g()
{
clearInterval(t);
}