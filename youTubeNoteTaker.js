


var urlPath = /(?<=watch\?v=).+?\b/.exec(window.location.href)[0];
var vidTitle = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0].innerText;
console.log(vidTitle)
function pause(){
	var playing = document.getElementsByClassName("playing-mode");
	var paused = document.getElementsByClassName("paused-mode")
	if(playing.length >0){
		playing[0].click();
	}
	if(paused.length >0){	
		paused[0].click();
	}
	
}

function grouped(e, n){
  if(e != null){
    return e[n].toString();
  }else{
    return '';
  }
}
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.opacity = "0.85";
    elmnt.style.transition = "opacity 1300ms"
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.opacity = "1";
  }
}
function close() {
  document.body.removeChild(document.getElementById("pop_container"));
}
var cDiv = document.createElement("div");
cDiv.setAttribute("id", "pop_container");
document.body.appendChild(cDiv);
cDiv.style.display = "inline-block";
cDiv.style.position = "fixed";
cDiv.style.top = "300px";
cDiv.style.left = "50%";
cDiv.style.width = "35%";
cDiv.style.height = "33%";
cDiv.style.border = "1px solid DarkSlateGrey ";
cDiv.style.background = "transparent";
cDiv.style.borderRadius = "1em";
cDiv.style.padding = "3px";
cDiv.style.zIndex = "10000";
cDiv.style.fontFamily = '"Courier New", monospace';


var clsBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(clsBtn);
clsBtn.setAttribute("id", "btn_close");
document.getElementById("btn_close").innerText = "+";
clsBtn.style.position = "absolute";
clsBtn.style.background = "transparent";
clsBtn.style.height = "0px";
clsBtn.style.width = "0px";
clsBtn.style.display = "inline-block";
clsBtn.style.transform = "scale(3.5, 3.5) translate(5px, -5px) rotate(45deg)";
clsBtn.style.borderRadius = "1.8em";
clsBtn.style.padding = "0px";
clsBtn.style.boxShadow = "0px";
clsBtn.style.border = "0px";
clsBtn.style.cursor = "pointer";
clsBtn.style.userSelect = "none";
clsBtn.style.fontFamily = '"Courier New", monospace';
clsBtn.style.fontWeight = "bold";
clsBtn.style.color = "Crimson";

var textbox_1 = document.createElement("TEXTAREA");
textbox_1.setAttribute("id", "textbox_code");
document.getElementById("pop_container").appendChild(textbox_1);
textbox_1.style.display = "inline-block";
textbox_1.style.width = "78%";
textbox_1.style.height = "90%";
textbox_1.style.padding = "6px";
textbox_1.style.border = "1px solid DarkSlateGrey";
textbox_1.style.background = "FloralWhite";
textbox_1.style.borderRadius = "1em";
textbox_1.style.display = "block";
textbox_1.style.fontSize = "1.2em";
textbox_1.style.userSelect = "none";
textbox_1.style.transform = "translate(0px, 5%)";
textbox_1.style.fontFamily = '"Courier New", monospace';

var evalBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(evalBtn);
evalBtn.setAttribute("id", "btn_box");
document.getElementById("btn_box").innerText = "doSomething";
evalBtn.style.display = "inline-block";
evalBtn.style.background = "DarkCyan";
evalBtn.style.border = "1px solid DarkSlateGrey";
evalBtn.style.width = "22%";
evalBtn.style.height = "90%";
evalBtn.style.borderRadius = "1em";
evalBtn.style.cursor = "pointer";
evalBtn.style.color = "white";
evalBtn.style.transform = "translate(400%, -100%)";

dragElement(document.getElementById(("pop_container")));
document.getElementById("btn_box").addEventListener("click", execute);
document.getElementById("btn_close").addEventListener("click", close);



textbox_1.addEventListener('keydown', function(event) {
		var k = event.key.toString();
	if(k == "Alt"){
		pause();
		let timestamp = document.getElementsByClassName("ytp-time-current")[0].innerText;
		this.value = this.value.replace(/https:\/\/.+\ds$|(?<=\D+)$/, timestamp.replace(/^(?=\d{1,2})/, "https://youtu.be/"+urlPath+"?t=").replace(/:(?=\d)/, 'm').replace(/$/, 's'));   
		
	}
});


function execute(){
//do the stuff
}

