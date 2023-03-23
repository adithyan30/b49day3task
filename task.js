var xhr = new XMLHttpRequest();
xhr.open('GET',' https://restcountries.com/v3.1/all' );
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    var responseobj = xhr.response;
    for(var i=0; i< responseobj.length; i++) {
        console.log(responseobj[i].flag);
    }
    
}




