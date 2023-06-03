// -- EXERCISE 2 *RENAME FILE* --
// The exercise comes like this

let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';

let file = DriveApp.getFileById(id);
let oldName = file.getName();
console.log(oldName);

file.setName('Inventory of Iguanas');

// It should get to this

let id = '4FTT3tZLKLxIJhBNdyDCGc1rYJLUV8kQ4c4aodAZx8pE';

let file = DriveApp.getFileById(id);
let oldName = file.getName();
console.log(oldName);

file.setName('The second exercise');

let newName = file.getName();
console.log(newName);

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
