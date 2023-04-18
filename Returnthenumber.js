let exv = "Hello My Name is Avyanna King"
function countVowel(str) {
    // find the ocunt of vowels
    const count = str.match(/[aeiou]/gi).length;

    //return number of vowels
    return count;
}
 console.log(countVowel(exv))