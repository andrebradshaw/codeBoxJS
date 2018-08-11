/*/
 this script takes an http JSONP request and sends the data to your spreadsheet
 install guide: https://youtu.be/Yevm_Ikz5Kk
/*/
function doGet(request) { 
 var sheetID = 'YOURsheetID_goesHere';
 var ss = SpreadsheetApp.openById(sheetID);
 var sheet1 = ss.getSheets()[0];
 var lastRow = sheet1.getLastRow(); 
 
  var a_col = sheet1.getRange('a'+(lastRow+1));;
  var b_col = sheet1.getRange('b'+(lastRow+1));
  var c_col = sheet1.getRange('c'+(lastRow+1));
  
  var code = decodeURIComponent(request.parameter.cd);
  var note = decodeURIComponent(request.parameter.nt)
  a_col.setValue(new Date());
  b_col.setValue(code);
  c_col.setValue(note);

  return ContentService.createTextOutput(code+note)
   .setMimeType(ContentService.MimeType.TEXT);   
}
