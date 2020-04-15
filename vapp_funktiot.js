 
   //päivämäärän koodi
   function pvm(){
    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth() + 1; 
    var year = d.getFullYear();
   
        document.getElementById("date").innerHTML = date +"."+month;
    } 
 
   function kehuminen(){
     document.getElementById('timeBox').innerHTML = ' ';
     document.getElementById('kehotus').innerHTML="Superhienoa! Sait pisteen";
     document.getElementById('jatkosivu').innerHTML="<center>" + "<img class='nuoli' src='nuoli.png'>" +"</center>";
     document.getElementById('vaihda').innerHTML="<center>" + "<img class='kello' src='takaa.png'>" +  "<img class='kello' src='edesta.png'>"+"</center>";
     w3.slideshow(".kello",1000);
     document.getElementById('hymynappula').innerHTML=" ";
   }
 
   function myohassa(){
    document.getElementById('timeBox').innerHTML = ' ';
    document.getElementById('kehotus').innerHTML = 'Aika loppui, tee seuraavan tehtävän aikana myös tämä tehtävä loppuun!';
    document.getElementById('jatkosivu').innerHTML="<center>" + "<img class='nuoli' src='nuoli.png'>" +"</center>";
    document.getElementById('hymynappula').innerHTML=" ";

   }

 