// functions go here in that scheme:
/*

	var commands =	["help", "text: this is a response"];
	
*/

 var prefix = "!";
 var commands = ["help", "text: hello world",
		 "end", "text: goodbye!"]; 


/////// 	Defining functions here. 
///////			DONT TOUCH THIS!

function sendMessage(text){
  //insert the text
  document.getElementsByClassName("_2S1VP")[0].innerHTML = text;
    document.getElementsByClassName("_2S1VP")[0].innerTEXT = text;
    // refresh to apply change
    event = document.createEvent("UIEvents");
		event.initUIEvent("input", true, true, window, 1);
    messageBox.dispatchEvent(event);
    // click the send button
    $("._35EW6").click();
}

function lastMessage(){
  var lastmsgctn = document.getElementsByClassName("_3zb-j").length - 1
  var lastMSG = document.getElementsByClassName("_3zb-j")[lastmsgctn].textContent
  return lastMSG
}

function checkForCommands(){
	length = commands.length / 2;
	console.log(length);
}
///////			The bot listener goes here

function listen(){
	setInterval(function(){
		console.log("Scanning for "+(commands.length / 2)+" commands...");
	}, 1000);
}

clear();
setTimeout(function(){console.log("all set! start the bot with listen();")}, 3000);
