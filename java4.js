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
       var re = /^ [А-ЯЁа-яё0-9_.] $/i;
    var myMail = document.getElementById('In').value;
    var valid = re.test(myMail);
    if (valid) output = 'Название города введено правильно!';
    else output = 'Название города введено неправильно!';
    document.getElementById('message').innerHTML = output;
    return valid;
    }
