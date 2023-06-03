// -- EXERCISE 7 *REPLACE THE WORD* --
// The exercise comes like this

let id = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';

let doc = DocumentApp.openById(id);
let originalText = doc.getText();
console.log(originalText);

doc.replaceText('you', 'snakes');
let newText = doc.getText();
console.log(newText);

// It should get to this

let id = '1VFYFgTvngQzMgm-x1Kyejv1fiTWVTahG9G8x2a76sAM';

let doc = DocumentApp.openById(id);
let originalText = doc.getText();
console.log(originalText);

doc.replaceText('you', 'sixth exercises');
let newText = doc.getText();
console.log(newText);

// -- ADDITIONAL INFO --
// https://www.google.com/script/start/
