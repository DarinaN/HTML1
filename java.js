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
document.bgColor="yellow";
}

function f2()
{ 
alert("Здравствуйте!"); 
}

function f3()
{ 
document.fgColor="blue";
}

function f4()
{ 
document.getElementById("pic1").src="pic2.png";
}

function f5()
{
document.getElementById("area1").value="ПРИВЕТ,МИР!!!";
}
