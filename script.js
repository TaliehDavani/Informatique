
       window.onload = function(){
		   loadMeteo();
		   loadDoc1();
	   }




 function loadMeteo() {
  var xhttp = new XMLHttpRequest();
  var api_key = '9b035403ceb84929825e7505c7654364';
   var url =  'http://api.openweathermap.org/data/2.5/weather?q=Montreal,ca&mode=xml&units=metric&appid=' + api_key;

 xhttp.onreadystatechange = function() {
 if (this.readyState == 4 && this.status == 200) {
  var xmlDoc = this.responseXML;
  var city = xmlDoc.getElementsByTagName("city")[0];
 var texte = city.getAttribute("name") +"<br/>";
 

var balisImage = xmlDoc.getElementsByTagName("weather")[0];
	document.getElementById("meteoImage").src="http://openweathermap.org/img/w/"+
											balisImage.getAttribute("icon")+".png";


  var temperature = xmlDoc.getElementsByTagName("temperature")[0];
 texte +=  temperature.nodeName +":"+temperature.getAttribute("value")+"<br/>"  ;
 

  var humidity = xmlDoc.getElementsByTagName("humidity")[0];
 texte +=  humidity .nodeName +":"+humidity .getAttribute("value") ;
  texte += humidity .getAttribute("unit")+"<br/>"+"<br/>" ;
 
 document.getElementById("meteo").innerHTML = texte;
 
 var balisDate = xmlDoc.getElementsByTagName("lastupdate")[0];
	currentDate=new Date(balisDate.getAttribute("value"));
	currentOffset=currentDate.getTimezoneOffset();
	currentDate.setHours(currentDate.getHours()-currentOffset/60);
	document.getElementById("meteoDate").innerHTML = currentDate.getFullYear()+"/"+
											("0" + (currentDate.getMonth()+1)).slice(-2)+"/"+
											("0" + (currentDate.getDate())).slice(-2);
 

 
 }
 };
 xhttp.open("GET", url, true);
 xhttp.send();}
  
  


function loadDoc1() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "accueil.html", true);
  xhttp.send();
}

function loadDoc2() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Fabrication.html", true);
  xhttp.send();
}

function loadDoc3() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Elimination.html", true);
  xhttp.send();
}

function loadDoc4() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Solution.html", true);
  xhttp.send();
}

function loadDoc5() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "Utilisation.html", true);
  xhttp.send();
}
