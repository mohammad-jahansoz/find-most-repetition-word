const text_1 = "   //wont won't won't";

function findRepetition(text) {
  // first should convert text to array of string and separate by space and new line enter
  const words = text.split(/\s+/);

  const filterWords = [];

  for (const word of words) {
    // remove all empty string
    if (word.trim() !== "") {
      // convert all the words to lower case & just hold a-z and '
      filterWords.push(word.toLowerCase().replace(/[^a-z\s']/g, ""));
    }
  }

  // {foo:1,bar:3}
  const wordAndCount = {};

  for (const word of filterWords) {
    // check if have field with this name we shoud increase number of what else set 1
    wordAndCount[word] = wordAndCount[word] ? wordAndCount[word] + 1 : 1;

    // second method
    // wordAndCount[i] = wordAndCount[i] + 1 || 1;
  }

  // Object.keys return array with just key of our object;
  // next we sould sort array by count of repetition
  const sortedWords = Object.keys(wordAndCount).sort(
    (a, b) => wordAndCount[b] - wordAndCount[a]
  );

  // seprate first 3 item of array
  const mostRepetitionsWords = sortedWords.slice(0, 3);

  console.log(mostRepetitionsWords);
}

findRepetition(text_1);
// return  [ "won't", "wont" ]
