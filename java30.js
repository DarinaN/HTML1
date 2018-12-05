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
var pv=new Date (22, 5, 1941)
var kv=new Date (9, 4, 1945)
  if (date1.getTime ()<=pv.getTime())
          {x=pv.getTime()-date1.getTime();tttt="До початку війни залишилося";
           }
  else if ((date1.getTime()>pv.getTime()) && (date1.getTime()<kv.getTime()))
          {x=kv.getTime()-date1.getTime();tttt="До перемоги у війні залишилося";
                  }
  else 
        {x=date1.getTime()-kv.getTime(); tttt="Минуло після перемоги";
                }
         $('tt2').value= $('tt2').value+tttt+parseInt(x/1000/60/60/24/365);
}
            


            

