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

var date1=new Date();
function f1(){
        var x=parseInt($('tt1').value);
        date1.setDate(x);
         $('tt2').value=date1;
        
}
function f2(){
        var x=parseInt($('tt1').value);
        date1.setMonth(x);
         $('tt2').value=date1;
}

function f3(){
        var x=parseInt($('tt1').value);
        date1.setFullYear(x);
         $('tt2').value=date1;
}



function f4(){
a=parseFloat($('tt1').value);
        setInterval(function(){
            var lnow = new Date("05 09 1945");
                lyear = lnow.getFullYear(); 
               
                dnyear = (a - lyear); 
              
                
            $('tt2').value= dnyear + " Лет "  ;
}, 1000);
}
            


            

