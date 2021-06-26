const substitutionModule = (function () {
  const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function enc(input, alphabet) {
    let splitInput = (input.toLowerCase()).split('');
    let result = [];

    let subAlph = alphabet.split('');
    for (let char in splitInput) {
      if (splitInput[char] == ' ') {
        continue;
      }
      let tempIndex = alph.findIndex(character => character == splitInput[char]);
      result.push(subAlph[tempIndex]);
    }
    if (splitInput.includes(' ')) {
      result.splice(splitInput.findIndex(char => char == ' '), 0, ' ');
    }
    return result.join('');
  }

  function dec(input, alphabet) {
    let splitInput = input.split('');
    let result = [];

    let subAlph = alphabet.split('');
    for (let char in splitInput) {
      if (splitInput[char] == ' ') {
        continue;
      }
      let tempIndex = subAlph.findIndex(character => character == splitInput[char]);
      result.push(alph[tempIndex]);
    }
    if (splitInput.includes(' ')) {
      result.splice(splitInput.findIndex(char => char == ' '), 0, ' ');
    }
    return result.join('');
  }

  function substitution(input, alphabet, encode = true) {
    if (!alphabet 
      || alphabet.length != 26 
      || alphabet.split('').some((v,i,a) => { return a.lastIndexOf(v)!=i; })) 
    {
      return false;
    }
    if (encode) {
      return enc(input, alphabet);
    }
    return dec(input, alphabet);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
