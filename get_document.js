// -- EXERCISE 5 *GET DOCUMENT* --
// The exercise comes like this

let id1 = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';
let id2 = '1NH4DAJhLXW2f4DNi0ciEDoCOLe4cFbp0s_qMFRgfR84';

let doc1 = DocumentApp.openById(id1);
let doc1Name = doc1.getName();
console.log(doc1Name);

// It should get to this

let id1 = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';
let id2 = '1NH4DAJhLXW2f4DNi0ciEDoCOLe4cFbp0s_qMFRgfR84';

let doc1 = DocumentApp.openById(id1);
let doc1Name = doc1.getName();
console.log(doc1Name);

let doc2 = DocumentApp.openById(id2);
let doc2Name = doc2.getName();

console.log(doc2Name);

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
