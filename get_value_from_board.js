// -- EXERCISE 15 *GET VALUE FROM BOARD* --
// The exercise comes like this

let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';

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
  
}

main();

// It should get to this

let spreadsheetId = '114hEvWFEbgwmk9TIF54m6bRM6Nb-anMXF4G4qN1cufY';

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
  console.log(values[0][0]);
}

main();

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
