const polybiusModule = (function () {
  const alph = [[], 
                ['', 'A', 'B', 'C', 'D', 'E'], 
                ['', 'F', 'G', 'H', '(I/J)', 'K'], 
                ['', 'L', 'M', 'N', 'O', 'P'], 
                ['', 'Q', 'R', 'S', 'T', 'U'], 
                ['', 'V', 'W', 'X', 'Y', 'Z']];
  function enc(input) {
    if (input == ' ') return input;
    tempChar = input.toUpperCase();
    for (let row in alph) {
      for (let col in alph[row]) {
        if ((alph[row][col]).includes(tempChar)) {
          return col + row;
        }
      }
    }
  }

  function dec(input) {
    let result = [];
    let inputMap = input.split('');
    let spaceIndex = 0;
    for (let char in inputMap) {
      if (inputMap[char] == ' ') {
        spaceIndex = char;
        break;
      }
    }
    let alphMap = inputMap.filter((char) => char != ' ');
    let charCount = alphMap.length/2;
    console.log(alphMap); 
    if (!(alphMap.length % 2)) {
      for (let i = 0; i < (charCount); i++) {
        let index = alphMap.splice(0, 2);
        result.push(alph[parseInt(index[1])][parseInt(index[0])]);
      }
      if (input.includes(' ')) {
        result.splice(spaceIndex/2, 0, ' ');
      }
      return (result.join('')).toLowerCase();
    }
    return false;
  }

  function polybius(input, encode = true) {
    if (!encode) return dec(input);
    let encodedInput = [];
    for (let char in input) encodedInput.push(enc(input[char]));
    return encodedInput.join("");
  }
  return {
    polybius,
  };
})();
module.exports = { polybius: polybiusModule.polybius };
