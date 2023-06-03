// -- EXERCISE 6 *PRINT* --
// The exercise comes like this

let id1 = "1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM";
let id2 = "1NH4DAJhLXW2f4DNi0ciEDoCOLe4cFbp0s_qMFRgfR84";

let doc1 = DocumentApp.openById(id1);
let text1 = doc1.getText();
console.log(text1);

// It should get to this

let id1 = "1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM";
let id2 = "1NH4DAJhLXW2f4DNi0ciEDoCOLe4cFbp0s_qMFRgfR84";

let doc1 = DocumentApp.openById(id1);
let text1 = doc1.getText();
console.log(text1);

let doc2 = DocumentApp.openById(id2);
let text2 = doc2.getText();

console.log(text2);

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
