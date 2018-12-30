var webUrl = 'yourweburl';
function getSelTable(hd) {	sel = window.getSelection();	if (sel.rangeCount && sel.getRangeAt) {		range = sel.getRangeAt(0);	}	if(hd == 'hd'){		var arrayCont = Array.from(range.commonAncestorContainer.previousElementSibling.children).map(itm=>{return JSON.parse('["'+itm.innerText.replace(/\n/g, '').replace(/\t/g, '","')+'"]');});	}else{		var arrayCont = [];    }	Array.from(range.commonAncestorContainer.children).forEach(itm=>{arrayCont.push(JSON.parse('["'+itm.innerText.replace(/\t/g, '","')+'"]'))});	return arrayCont;}
function reg(e, n){  if(e != null){    return e[n];  }else{    return '';  }}
function unq(arrgh){	return arrgh.filter((elm,pos,arr) =>{	return arr.indexOf(elm) == pos;});}


function dragElement() {
  this.style.background = 'CadetBlue';
  this.style.transition = 'all 566ms';
  var elmnt = this.parentElement;
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(this.id)) {
    document.getElementById(this.id).onmousedown = dragMouseDown;
  } else {
    this.onmousedown = dragMouseDown;
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


var cDiv = document.createElement("div");
cDiv.setAttribute("id", "pop_container");
document.body.appendChild(cDiv);
cDiv.style.display = "inline-block";
cDiv.style.position = "fixed";
cDiv.style.top = "300px";
cDiv.style.left = "50%";
cDiv.style.width = "25%";
cDiv.style.height = "43%";
cDiv.style.border = "1px solid Transparent";
cDiv.style.background = "Transparent";
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
clsBtn.style.transform = "scale(3.9, 3.9) translate(7px, -5px) rotate(45deg)";
clsBtn.style.borderRadius = "1em";
clsBtn.style.padding = "0px";
clsBtn.style.boxShadow = "0px";
clsBtn.style.border = "0px";
clsBtn.style.cursor = "pointer";
clsBtn.style.userSelect = "none";
clsBtn.style.fontFamily = '"Courier New", monospace';
clsBtn.style.fontWeight = "bold";
clsBtn.style.color = "Crimson";

var mDiv = document.createElement("div");
mDiv.setAttribute("id", "mover_div");
document.getElementById("pop_container").appendChild(mDiv);
mDiv.style.width = "100%";
mDiv.style.height = "7%";
mDiv.style.border = "1px solid DarkCyan ";
mDiv.style.backgroundColor = 'DarkCyan';
mDiv.style.borderTopLeftRadius = "1em";
mDiv.style.borderTopRightRadius = "1em";
mDiv.style.padding = "3px";
mDiv.style.fontFamily = '"Courier New", monospace';
mDiv.style.cursor = 'move';


var textbox_1 = document.createElement("TEXTAREA");
textbox_1.setAttribute("id", "textbox_code");
document.getElementById("pop_container").appendChild(textbox_1);
textbox_1.style.width = "100%";
textbox_1.style.height = "83%";
textbox_1.style.padding = "6px";
textbox_1.style.border = "1px solid DarkSlateGrey";
textbox_1.style.background = "FloralWhite";
textbox_1.style.display = "block";
textbox_1.style.fontSize = "1.2em";
textbox_1.style.userSelect = "none";
textbox_1.style.fontFamily = '"Courier New", monospace';

var evalBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(evalBtn);
evalBtn.setAttribute("id", "btn_box");
document.getElementById("btn_box").innerText = "Execute";
evalBtn.style.background = "DarkCyan";
evalBtn.style.border = "1px solid DarkSlateGrey";
evalBtn.style.width = "33%";
evalBtn.style.height = "10%";
evalBtn.style.borderBottomLeftRadius = "1em";
evalBtn.style.cursor = "pointer";
evalBtn.style.color = "white";

var bkBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(bkBtn);
bkBtn.setAttribute("id", "btn_book");
document.getElementById("btn_book").innerText = "bookmark";
bkBtn.style.alignSelf = "left";
bkBtn.style.background = "DarkCyan";
bkBtn.style.border = "1px solid DarkSlateGrey";
bkBtn.style.width = "33%";
bkBtn.style.height = "10%";
bkBtn.style.cursor = "pointer";
bkBtn.style.color = "white";

var saveBtn = document.createElement("button");
document.getElementById("pop_container").appendChild(saveBtn);
saveBtn.setAttribute("id", "btn_save");
document.getElementById("btn_save").innerText = "Save";
saveBtn.style.alignSelf = "left";
saveBtn.style.background = "DarkCyan";
saveBtn.style.border = "1px solid DarkSlateGrey";
saveBtn.style.width = "33%";
saveBtn.style.height = "10%";
saveBtn.style.borderBottomRightRadius = "1em";
saveBtn.style.cursor = "pointer";
saveBtn.style.color = "white";

cDiv.addEventListener('mouseover', expander);
mDiv.addEventListener('mouseout', nodrag);
mDiv.addEventListener('mouseover', dragElement);
evalBtn.addEventListener("click", execute);
bkBtn.addEventListener("click", singleLiner);
saveBtn.addEventListener("click", saveme);
clsBtn.addEventListener("click", close);
textbox_1.addEventListener('keyup', tabIs);
textbox_1.addEventListener('keyup', utilsPlease);
window.addEventListener('wheel', shrinker);


textbox_1.addEventListener('keydown', (event) => {
  if (event.key == 'Tab') {
    textbox_1.value = textbox_1.value.replace(/$/, '    ');
  }
});


function singleLiner(){
	var bkmark = 'javascript:(()=>{'+(textbox_1.value.replace(/\n/g, ''))+'})()';
	var bookmarkName = reg(/(?<=function\s+)\w+|\w+(?=\s*\()/.exec(textbox_1.value),0);
	var book = document.createElement("a");
	document.getElementById("pop_container").appendChild(book);
	book.setAttribute("href", bkmark);
	book.setAttribute("id", "bookref");
	book.innerText = bookmarkName;
	book.style.alignSelf = "left";
	book.style.background = "coral";
    book.style.width = "100%";
    book.style.height = "10%";
    book.style.borderRadius = "1em";
    book.style.cursor = "pointer";
    book.style.color = "white";
}

function close() {
  document.body.removeChild(document.getElementById("pop_container"));
}

function nodrag() {
  this.style.background = 'DarkCyan';
  this.style.transition = 'all 566ms';
}
function shrinker(){
  cDiv.style.opacity = ".77", cDiv.style.transition = 'all 566ms';
}
function expander(){
  cDiv.style.opacity = "1", cDiv.style.transition = 'all 566ms';
}
function utilsPlease(){
	var arr = ["function checker(elm, type) {  if (elm != undefined) {    if (type == 'src') {     return elm.getAttribute('src');    }	if (type == 'click') {     elm.click();    }	if (type == 'href') {      return elm.href;    }    if (type == 'text') {      return elm.innerText.trim().replace(/,/g, '').replace(/\n/g, ' \\n ');    }    if (type == 'next') {      return elm;    }  } else {    return '';  }}","function reg(elm, n){if(elm != null){return elm[n];}else{return '';}}"];
	this.value = this.value.replace(/utilsPlease/, arr[0]+'\n\n'+arr[1]);
	this.focus();
}
function tabIs() {
  if (/\)\s{0,1}\{\}/.test(this.value)) {
    this.value = this.value.replace(/\)\s{0,1}\{\}/, ") {\n   \n}");
    this.selectionStart = this.selectionStart - 2;
    this.selectionEnd = this.selectionEnd - 2;
    this.focus();
  }
}

function parseNote(str) {
  var x = str.match(/(?<=\/\*).+?(?=\*\/)/g);
  if (x != null) {
    return encodeURIComponent(Array.from(x).toString());
  } else {
    return '';
  }
}

function saveme() {
  var code = document.getElementById("textbox_code").value;
  window.open(webUrl + '?t=' + encodeURIComponent(code) + '&c=' + parseNote(code));
}

function execute() {
  var code = document.getElementById("textbox_code").value;
  eval(code);
}
