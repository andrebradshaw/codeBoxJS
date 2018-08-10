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
    elmnt.style.background = "DarkSlateGrey";
    elmnt.style.transition = "opacity 1300ms"
  }
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    elmnt.style.opacity = "1";
    elmnt.style.background = "DarkSlateGrey";
  }
}

var cDiv = document.createElement("div");
cDiv.setAttribute("id", "pop_container");
document.body.appendChild(cDiv);
cDiv.style.display = "inline-block";
cDiv.style.position = "fixed";
cDiv.style.top = "300px";
cDiv.style.left = "50%";
cDiv.style.width = "32%";
cDiv.style.height = "50%";
cDiv.style.border = "1px solid DarkSlateGrey ";
cDiv.style.background = "DarkSlateGrey";
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
clsBtn.style.display = "inline-block";
clsBtn.style.transform = "scale(3.5, 3.5) translate(3px, -1px) rotate(45deg)";
clsBtn.style.borderRadius = "1em";
clsBtn.style.padding = "0px";
clsBtn.style.boxShadow = "0px";
clsBtn.style.border = "0px";
clsBtn.style.cursor = "pointer";
clsBtn.style.userSelect = "none";
clsBtn.style.fontFamily = '"Courier New", monospace';
clsBtn.style.fontWeight = "bold";
clsBtn.style.color = "Crimson";

var expndBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(expndBtn);
expndBtn.setAttribute("id", "btn_expnd");
document.getElementById("btn_expnd").innerText = "||";
expndBtn.style.position = "absolute";
expndBtn.style.background = "transparent";
expndBtn.style.display = "inline-block";
expndBtn.style.transform = "scale(2.5, 2.5) translate(150px, -5px) rotate(90deg)";
expndBtn.style.borderRadius = "1em";
expndBtn.style.padding = "0px";
expndBtn.style.boxShadow = "0px";
expndBtn.style.border = "0px";
expndBtn.style.cursor = "pointer";
expndBtn.style.userSelect = "none";
expndBtn.style.fontFamily = '"Courier New", monospace';
expndBtn.style.fontWeight = "bold";
expndBtn.style.color = "Crimson";


var textbox_1 = document.createElement("TEXTAREA");
textbox_1.setAttribute("id", "textbox_code");
document.getElementById("pop_container").appendChild(textbox_1);
textbox_1.style.width = "99%";
textbox_1.style.height = "83%";
textbox_1.style.padding = "6px";
textbox_1.style.border = "1px solid DarkSlateGrey";
textbox_1.style.background = "FloralWhite";
textbox_1.style.borderRadius = ".9em";
textbox_1.style.display = "block";
textbox_1.style.fontSize = "1em";
textbox_1.style.userSelect = "none";
textbox_1.style.transform = "translate(0px, 5%)";
textbox_1.style.fontFamily = '"Courier New", monospace';

var evalBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(evalBtn);
evalBtn.setAttribute("id", "evalbtn_box");
document.getElementById("evalbtn_box").innerText = "runTheCode";
evalBtn.style.background = "DarkCyan";
evalBtn.style.border = "1px solid DarkSlateGrey";
evalBtn.style.width = "32%";
evalBtn.style.height = "33px";
evalBtn.style.borderRadius = "1em";
evalBtn.style.cursor = "pointer";
evalBtn.style.color = "white";
evalBtn.style.transform = "translate(0px, 55%)";

var encodeBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(encodeBtn);
encodeBtn.setAttribute("id", "encodebtn_box");
document.getElementById("encodebtn_box").innerText = "bookmarklet";
encodeBtn.style.background = "DarkCyan";
encodeBtn.style.border = "1px solid DarkSlateGrey";
encodeBtn.style.width = "32%";
encodeBtn.style.height = "33px";
encodeBtn.style.borderRadius = "1em";
encodeBtn.style.cursor = "pointer";
encodeBtn.style.color = "white";
encodeBtn.style.transform = "translate(6%, 55%)";

var saveBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(saveBtn);
saveBtn.setAttribute("id", "savebtn_box");
document.getElementById("savebtn_box").innerText = "saveToSheets";
saveBtn.style.background = "DarkCyan";
saveBtn.style.border = "1px solid DarkSlateGrey";
saveBtn.style.width = "32%";
saveBtn.style.height = "33px";
saveBtn.style.borderRadius = "1em";
saveBtn.style.cursor = "pointer";
saveBtn.style.color = "white";
saveBtn.style.transform = "translate(12%, 55%)";


dragElement(document.getElementById(("pop_container")));
document.getElementById("evalbtn_box").addEventListener("click", execute);
document.getElementById("encodebtn_box").addEventListener("click", convertToBookmarklet);
document.getElementById("savebtn_box").addEventListener("click", saveTo);
document.getElementById("btn_close").addEventListener("click", close);
document.getElementById("btn_expnd").addEventListener("click", expand);
textbox_1.addEventListener('keyup', tabIs);

function close() {
  document.body.removeChild(document.getElementById("pop_container"));
}
function expand(){
var currentWidth = document.getElementById("pop_container").style.width;
var currentHeight = document.getElementById("pop_container").style.height;    
    if(currentWidth == "32%" && currentHeight == "50%"){
        document.getElementById("pop_container").style.width = "60%";
        this.style.transform = "scale(2.5, 2.5) translate(150px, -5px) rotate(360deg)";
        this.style.transition = "all 366ms";
        document.getElementById("pop_container").style.transition = "all 366ms";
        document.getElementById("textbox_code").focus();
    }
    if(currentWidth == "60%"){
        document.getElementById("pop_container").style.width = "32%";
        document.getElementById("pop_container").style.height = "75%";
        this.style.transform = "scale(2.5, 2.5) translate(150px, 1px) rotate(90deg)";
        this.style.transition = "all 366ms";
        document.getElementById("pop_container").style.transition = "all 366ms";
        document.getElementById("textbox_code").focus();
    }
    if(currentHeight == "75%" && currentWidth == "32%"){
        document.getElementById("pop_container").style.width = "32%";
        document.getElementById("pop_container").style.height = "50%";
        this.style.transform = "scale(2.5, 2.5) translate(150px, -5px) rotate(90deg)";
        this.style.transition = "all 366ms";
        document.getElementById("pop_container").style.transitionTimingFunction = "cubic-bezier(1,-1.12,.18,1.93)";
        document.getElementById("textbox_code").focus();
    }
}
function tabIs(){
    var start = this.selectionStart;
    var end = this.selectionEnd;
    if(/\{\}/.exec(this.value) == "{}"){
        this.value = this.value.replace(/\{\}/, "{\n    \n}");   
        this.selectionStart = start+4;
        this.selectionEnd = end+4;
        this.focus();
    }
}

function execute(){
  var code = document.getElementById("textbox_code").value;
    eval(code);
}

function saveTo(){
    var regXnote = /(?<!:)\/\/(?!,).+?(?:\n|$)/g;
    var code = document.getElementById("textbox_code").value;
    var noteArr = [];
    var scrpt = '';
    
    if(/function\s\w+\(|var [\w|\$]\w+\s*\=|alert\(/.test(code) === true){ 
        var scrpt = code.replace(regXnote, '').replace(/\n|\r/g, '');
        var cmntMatch = code.match(regXnote);
        
        Array.from(cmntMatch).forEach(item => {
            noteArr.push(item);
        });

    }else{
        noteArr.push(code.replace(/\n|\r/g, ''));
    }
        var noteString = noteArr.toString();
        var cmnt = encodeURIComponent(code.replace(/.+(?<!:)\/\//, '')).replace(/\n|\r/g, ''); 
        var output = YOURwebAppURL+'?cd='+scrpt+'&nt='+noteString; 
    
        if(output.length <3890){
            window.open(output); 
        }else{
            alert("   ¯\_(ツ)_/¯ \nyou exceeded the max characters");
        }
}
function convertToBookmarklet(){
    var regXnote = /(?<!:)\/\/(?!,).+?(?:\n|$)/g;
    var code = document.getElementById("textbox_code").value;
    var scrpt = code.replace(regXnote, '').replace(/\n|\r/g, '');
    var encode = encodeURIComponent(scrpt);
    document.getElementById("textbox_code").value = 'javascript:(function()%7B'+encode+'%7D)()';
    document.getElementById("textbox_code").select();
    document.execCommand("copy");
}
