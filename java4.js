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


function f1(city) {
        if (!city) {
           alert('Fail');
            return false;
    }
    var cityA = city.split(' ');
         if (cityA.length !== 1) {
             alert('Fail');
                return false;
             
    }
            for (var i = 0; i < 1; i++) {
               if (/[^а-яё][^0-9]+/i.test(cityA[i])) {
                 alert('Fail');
                  return false;
                 
        }
    }
                  alert('Okay');
                   return true;
                   
}

//[^-А-ЯA-Z\x27а-яa-z]
