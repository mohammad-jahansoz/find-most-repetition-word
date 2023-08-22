const text_1 = `this THIS ThiS  test of function  and but should is best performance i'm is best 
 developer developer develOper deVeloper developer function test this test Test should`;

function findRepetition(text) {
  // first should convert text to array of string and separate by space and new line enter
  const words = text.split(/\s+/);

  // convert all the words to lower case
  const lowerCaseWords = words.map((word) => word.toLowerCase());

  // {foo:1,bar:3}
  const wordAndCount = {};
  for (const word of lowerCaseWords) {
    // loop to all the words and check if it's new should create new field in object and if before we have field with this name increase count number of that field
    if (wordAndCount[word]) {
      wordAndCount[word] += 1;
    } else {
      wordAndCount[word] = 1;
    }
  }
  // create array with that object like this [word,count]
  const wordAndCountArray = Object.entries(wordAndCount);
  // sort array
  wordAndCountArray.sort((a, b) => {
    // we have [word,count] and sort by count by select second element in array [1]
    return b[1] - a[1];
  });
  // seprate 3 item of array and just return word without count
  const mostRepetitionsWords = wordAndCountArray.slice(0, 3).map((i) => i[0]);
  console.log(mostRepetitionsWords);
}

findRepetition(text_1);
// return  [ 'developer', 'this', 'test' ]
