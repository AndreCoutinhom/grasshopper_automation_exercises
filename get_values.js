// -- EXERCISE 10 *GET VALUES* --
// The exercise comes like this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange("A3:B6").getValues();

console.log(values[0][0])

// It should get to this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange("A2:B6").getValues();

console.log(values[0][0])

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
