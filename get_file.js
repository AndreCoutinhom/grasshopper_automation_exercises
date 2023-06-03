// -- EXERCISE 1 *GET FILE* --
// The exercise comes like this
let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

let file = DriveApp.getFileById(id1);
let fileName = file.getName();

console.log(fileName);

// It should get to this

let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

let file = DriveApp.getFileById(id2);
let fileName = file.getName();

console.log(fileName);

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
