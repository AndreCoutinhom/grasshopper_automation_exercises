// -- EXERCISE 12 *WORKING WITH STEMS* --
// The exercise comes like this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange('B1:B8').getValues();
let stemCount = 0;
for (let row of values) {
    for (let cell of row) {

    }
}
console.log(stemCount + ' customers are paying with stems.');

// It should get to this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let values = sheet.getRange('B1:B8').getValues();
let stemCount = 0;
for (let row of values) {
    for (let cell of row) {
        if (cell === 'stems') {
            stemCount++;
        }
    }
}
console.log(stemCount + ' customers are paying with stems.');

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
