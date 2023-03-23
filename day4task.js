USE THE REST COUNTRIES API URL->https://restcountries.com/v3.1/all AND DISPLAY ALL COUNTRIES NAME ,REGION,SUB-REGION AND POPULATION IN CONSOLE? 

var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.responseType = 'json';

xhr.send();

xhr.onload = function()
{  
    var responseObj = xhr.response;
    

    for(var i = 0;i < responseObj.length;i++)
    {
        console.log(responseObj[i].name)
    }

} //name of the countries


var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.responseType = 'json';

xhr.send();

xhr.onload = function()
{  
    var responseObj = xhr.response;
     

    for(var i = 0;i < responseObj.length;i++)
    {
        console.log(responseObj[i].region)
    }

} // regions

var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.responseType = 'json';

xhr.send();

xhr.onload = function()
{  
    var responseObj = xhr.response;
     

    for(var i = 0;i < responseObj.length;i++)
    {
        console.log(responseObj[i].subregion)
    }

} // sub region

var xhr = new XMLHttpRequest(); 

xhr.open('GET', 'https://restcountries.com/v3.1/all')
xhr.responseType = 'json';

xhr.send();

xhr.onload = function()
{  
    var responseObj = xhr.response;
     

    for(var i = 0;i < responseObj.length;i++)
    {
        console.log(responseObj[i].population)
    }

} // populations
