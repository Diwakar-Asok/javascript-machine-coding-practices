//compare two string to check anagrams or not

const checkAnagrams = (str1, str2) => {
  const char1 = str1.toLowerCase();
  const char2 = str2.toLowerCase();

  if (char1.length !== char2.length) return false;

  const anagram1 = char1.split("").sort().join("");
  const anagram2 = char2.split("").sort().join("");

  return anagram1 === anagram2
}

console.log(checkAnagrams("silent", "listen"))