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
        setInterval(function(){
           var lnow = new Date("04 09 1945");   
                lyear = lnow.getFullYear(); 
                lmonth1  = lnow.getMonth() ; 
                lmonth = (lmonth1+1); 
                ldate =   lnow.getDate() ;  
                
 
 
             var now = new Date();   
                year = now.getFullYear(); 
                month1  = now.getMonth() ; 
                month = (month1+1); 
                date =   now.getDate() ;  
                   
 
               dnyear = (year - lyear);
                dnmonth = ( month - lmonth); 
                dndate = (date - ldate);   
                
                

               /*allow = Math.round(-allow);*/
               $('tt2').value= dnyear + " Лет "  + dnmonth + " Месяц " + dndate + " Дней ";
}, 1000);
}
            

