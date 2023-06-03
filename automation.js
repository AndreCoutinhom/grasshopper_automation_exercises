// -- EXERCISE 1 *GET FILE* --
// The exercise comes like this
let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

let file = DriveApp.getFileById(id1);
let fileName = file.getName();

console.log(fileName);

// You should get to this

let id1 = 'accb4372522af72303e7bcd67a8e953189205bb6728a';
let id2 = 'e514a7d3e2061ca9e33533074ded28a650a57cd24f04';

let file = DriveApp.getFileById(id2);
let fileName = file.getName();

console.log(fileName);

// -- EXERCISE 2 *RENAME FILE* --
// The exercise comes like this

let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';

let file = DriveApp.getFileById(id);
let oldName = file.getName();
console.log(oldName);

file.setName('Inventory of Iguanas');

// You should get to this

let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';

let file = DriveApp.getFileById(id);
let oldName = file.getName();
console.log(oldName);

file.setName('The second exercise');

let newName = file.getName();
console.log(newName);

// -- EXERCISE 3 *COPY FILE* --
// The exercise comes like this

let id = '1gJAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy();
let firstCopyId = firstCopy.getId();
console.log(firstCopyId);

// You should get to this

let id = '1gJAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy();
let firstCopyId = firstCopy.getId();
console.log(firstCopyId);

let secondCopy = file.makeCopy();
let secondCopyId = secondCopy.getId();

console.log(secondCopyId);

// -- EXERCISE 4 *RENAME COPY* --
// The exercise comes like this

let id = '1gHAiEKJd8NMdjI_EcI12y3iIYk3E8wokAJEOijsZcf0';
let file = DriveApp.getFileById(id);

let firstCopy = file.makeCopy('Copy 1 of Inventory of Cat Toys');
let firstCopyName = firstCopy.getName();
console.log(firstCopyName);

// You should get to this




