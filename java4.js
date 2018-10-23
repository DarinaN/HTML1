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
        pravilno = false;
        if (document.getElementById('In').value == "Львов")
            { pravilno = true; } else if (document.getElementById('In').value == "Харьков")
                { pravilno = true; } else if (document.getElementById('In').value == "Киев")
                   { pravilno = true; } else if (document.getElementById('In').value == "Одесса")
                       { pravilno = true; } else if (document.getElementById('In').value == "Винница")
                           { pravilno = true; } else if (document.getElementById('In').value == "Николаев")
                              { pravilno = true; } else 
                        { pravilno = false; };
        if (pravilno == true) { alert("Okay"); } else { alert("Fail"); };
        return pravilno;
    }
