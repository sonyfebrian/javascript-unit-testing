function inputString(string) {
  return string === string.split("").reverse().join("");
}

module.exports = {
  inputString,
};
