// const text = "Hello World! World is fine. Yep)";
// // debugger;
// function wordCount(text) {
//     let wordInfo = []
//     let words = text.replace(/[^a-z0-9\s]/gi, '')
//         .split(' ');
//     for (let i = 0; i < words.length; i++) {
//         let count = 1;
//         if (words[i] !== null || words[i] == '') {
//             for (let j = 0; j < words.length; j++) {
//                 if (words[i] === words[words.length - j + i]) {
//                     count++;
//                     words[words.length - j + i] = null;
//                 }
//             }
//             wordInfo.push(words[i], count)
//             words[i] = null;
//         }
//     }
//     return wordInfo;
// }
// console.log(wordCount(text).join('\n'));

const text = "Hello World! World is fine. Yep)";
// debugger;
function wordCount(text) {
    let wordsMap = new Map();
    wordsMap = text.toLowerCase()
        .replace(/[^a-z0-9\s]/gi, '')
        .split(' ')
        .reduce((a, el) => {
            a[el] = (a[el] || 0) + 1;
            return a;
        }, {});
    return wordsMap;
}
console.log(wordCount(text)/*.join('\n')*/);
