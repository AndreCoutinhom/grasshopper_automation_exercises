// -- EXERCISE 11 *LIFE CYCLE* --
// The exercise comes like this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let columnA = sheet.getRange('A1:A6').getValues();
    


for (let row of columnA) {
    for (let value of row) {
        console.log(value);
    }
}

// It should get to this

let id = '1QE4pZs8efMoHKGOEHyXGT_nPZf1b_Sw7ssFCk2J2ueo';
let sheet =  SpreadsheetApp.openById(id);
 
let columnA = sheet.getRange('A1:A6').getValues();
    


for (let row of columnA) {
    for (let value of row) {
        console.log(value);
    }
}

let columnB = sheet.getRange('B1:B6').getValues();

for (let row of columnB) {
    for (let value of row) {
        console.log(value);
    }
}

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
