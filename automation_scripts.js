// -- GRASSHOPPER AUTOMATION CODE EXERCISES FINAL RESULT
// -- A CODE SCRIPT IN JAVA FOR CONTRACT DEVELOPMENT

let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';
let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';


function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
  for (let edit of edits) {
    doc.replaceText(edit[0], edit[1]);
  }
}

function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
 
  for (let row of values) {
    let copyId = makeCopy(contractId, row[0] + ' Contract');
  }
}

main();

// It should get to this

let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';
let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';


function makeCopy(id, name) {
  let file = DriveApp.getFileById(id);
  let copy = file.makeCopy(name);
  return copy.getId();   
}

function updateDoc(doc, edits) {
  for (let edit of edits) {
    doc.replaceText(edit[0], edit[1]);
  }
}

function main() {
  let sheet = SpreadsheetApp.openById(spreadsheetId);
  let values = sheet.getRange("A2:C5").getValues();
 
  for (let row of values) {
    let copyId = makeCopy(contractId, row[0] + ' Contract');
    let copy = DocumentApp.openById(copyId);
    let edits =
    [
        [ 'CLIENT', row[0] ], 
        [ 'FEE', row[1] ], 
        [ 'SERVICE', row[2] ] 
    ]
    updateDoc(copy, edits);
  }
}

main();

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
