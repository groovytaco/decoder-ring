const caesarModule = (function () {
  const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function shiftChar(input, shift) {
    let result = '';
    const letter = input.toLowerCase();
    if((/[a-zA-Z]/).test(letter)) {
      let alphaChar = alph.findIndex(character => character === letter);
      let tempChar = alphaChar + shift;
      switch(true) {
        case (tempChar < 0):
          tempChar += 26;
          break;
        case (tempChar > 25):
          tempChar -= 26;
          break;
      }
      result = alph[tempChar];
    } else {
      result = letter;
    }
    return result;
  }
  function caesar(input, shift, encode = true) {
    if(!encode) {
      shift *= -1;
    }
    switch(true) {
      case (!shift):
        return false;
      case (shift > 25):
        return false;
      case (shift < -25):
        return false;
      default:
        let encodedInput = [];
        for (let letter in input) encodedInput.push(shiftChar(input[letter], shift));
        return encodedInput.join('');
    }
  }
  return {
    caesar,
  }
})();
module.exports = { caesar: caesarModule.caesar };