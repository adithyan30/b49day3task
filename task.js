var xhr = new XMLHttpRequest();
xhr.open('GET',' https://restcountries.com/v3.1/all' );
xhr.responseType = 'json';
xhr.send();
xhr.onload = function() {
    var responseobj = xhr.response;
    for(var i=0; i< responseobj.length; i++) {
       // console.log(responseobj[i].flag);
    }
    
}





var abc = new XMLHttpRequest();
abc.open('GET','https://api.publicapis.org/entries');
abc.responseType = 'json';
abc.send();
abc.onload = function() {
    var responseobj = abc.response;
    console.log(responseobj)

    for (var i = 0; i < responseobj.entries.length; i++){
        console.log(responseobj.entries[i].Description)

    }
}


var name = "adithyan";
var age = 28;
var designation = "job seeker";
var address = "virudhachalam";
//console.log(`my name is ${name} and my age is ${age} . I AM ${designation} AND LIVING IN ${address}`)