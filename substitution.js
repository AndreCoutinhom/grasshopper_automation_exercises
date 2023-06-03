// -- EXERCISE 8 *SUBSTITUTION* --
// The exercise comes like this

let doc = DocumentApp.openById('226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0');
let edits = [
    ['Xi', 'Sidhe'],
    ['seashells', 'diamonds'],
    ['by the seashore', 'on the soles of her shoes']
];

for (let edit of edits) {
    
}

// It should get to this

let doc = DocumentApp.openById('226uAXY0YRUj-HMW5LQZ2YeeJgyDqmJTpnzRkGmFLch0');
let edits = [
    ['Xi', 'Sidhe'],
    ['seashells', 'diamonds'],
    ['by the seashore', 'on the soles of her shoes']
];

for (let edit of edits) {
    
    doc.replaceText(edit[0], edit[1]);
    
}

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
