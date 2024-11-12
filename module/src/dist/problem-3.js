"use strict";
const countWordOccurrences = (sentence, word) => {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.split(' ');
    const wordOccurrencesCount = words.filter((word) => word === lowerCaseWord).length;
    return wordOccurrencesCount;
};
const wordOccurrencesCount = countWordOccurrences("I love typescript", "typescript");
console.log(wordOccurrencesCount);
