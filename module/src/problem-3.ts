type CountWordOccurrences = (sentence: string, word: string) => number;
const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
    const lowerCaseSentence = sentence.toLowerCase();
    const lowerCaseWord = word.toLowerCase();
    const words = lowerCaseSentence.split(' ');

    const wordOccurrencesCount = words.filter((word:string) => word === lowerCaseWord).length
   return wordOccurrencesCount
};

const wordCount = countWordOccurrences("I love typescript", "typescript");
console.log(wordCount);