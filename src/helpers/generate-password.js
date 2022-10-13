const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SYMBOLS = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";

function generatePassword(length, options = {}) {
  let collection = "";

  if (options?.uppercaseLetters) collection += UPPERCASE_LETTERS;
  if (options?.lowercaseLetters) collection += LOWERCASE_LETTERS;
  if (options?.numbers) collection += DIGITS;
  if (options?.symbols) collection += SYMBOLS;

  let result = "";

  for (let i = 0; i < length; i++) {
    result += collection[getRandomInt(0, collection.length)];
  }

  return result;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  // The maximum is exclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min) + min);
}

export default generatePassword;
