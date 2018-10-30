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

function f4(){
a=parseFloat($('tt1').value);
        setInterval(function(){
            var lnow = new Date("05 09 1945");
                lyear = lnow.getFullYear(); 
               
                dnyear = (a - lyear); 
              
                
            $('tt2').value= dnyear + " Лет "  ;
}, 1000);
}
            


            

