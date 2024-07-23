function uncommonFromSentences(A, B) {
    // Split both sentences into words
    const wordsA = A.split(' ');
    const wordsB = B.split(' ');
  
    // Create a hash table to count occurrences of each word
    const wordCount = {};
  
    // Count occurrences of words in sentence A
    for (const word of wordsA) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    // Count occurrences of words in sentence B
    for (const word of wordsB) {
      if (wordCount[word]) {
        wordCount[word]++;
      } else {
        wordCount[word] = 1;
      }
    }
  
    // Find all words that appear exactly once
    const uncommonWords = [];
    for (const word in wordCount) {
      if (wordCount[word] === 1) {
        uncommonWords.push(word);
      }
    }
  
    return uncommonWords;
  }
  
  // Example usage:
  const A = "this apple is sweet";
  const B = "this apple is sour";
  const result = uncommonFromSentences(A, B);
  console.log(result);  // Output: ["sweet", "sour"]
  