/*const sort = (word) => word.split('').sort().join('');
function anagrams(word, words) {
  let token = sort(word);
  let total = []

  for (let x = 0; x < words.length; x++) {
    if (sort(words[x]) === token) {
      total.push(words[x])
    }    
  }
  
  return total
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));*/




/*const sort = (word) => word.split('').sort().join('');
function anagrams(word, words) {
  let token = sort(word);
  let total = []

  for (let x = 0; x < words.length; x++) {
    if (sort(words[x]) === token) {
      total.push(words[x])
    }    
  }
  
  return total
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));*/



const sort = (word) => word.split('').sort().join('');
function anagrams(word, words) {
  let token = sort(word);
  let total = []

  for (let x = 0; x < words.length; x++) {
    if (sort(words[x]) === token) {
      total.push(words[x])
    }    
  }
  
  return total
}

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));


