var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function Get(myUrl)
{
  var xhr= new XMLHttpRequest();
  xhr.open("GET", myUrl, false);
  xhr.send();
  return xhr.responseText;
}

var result = ask("What city's weather would you like to hear?", {choices:"London, Boston"});

say("You said " + result.value);
log("They said " + result.value);


var sampleUrl="http://api.openweathermap.org/data/2.5/weather?q="+result+"&APPID=d0c385fa905246279aa9b1328e4e5aa4";
var xhr= new XMLHttpRequest();

var json_obj = JSON.parse(Get(sampleUrl));
console.log(json_obj.name);
say("The temperature is:" json_obj.main.temp);
