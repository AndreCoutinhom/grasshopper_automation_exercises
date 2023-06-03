// -- EXERCISE 13 *CREATE A COPY* --
// The exercise comes like this

let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
  
function makeCopy(id, name) {

}

console.log(makeCopy(contractId, 'Copy of the contract'));

// It should get to this

let contractId = '226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0';
  
function makeCopy(id, name) {
    
    let file = DriveApp.getFileById(id);
    let copy = file.makeCopy(name);
    return copy.getId();
}

console.log(makeCopy(contractId, 'Copy of the contract'));

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
