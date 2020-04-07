const greenCheck = String.fromCodePoint(0x2705);
const notDone = String.fromCodePoint(0x25fd);
const sunflower = String.fromCodePoint(0x1f33b);
const clover = String.fromCodePoint(0x1f340);
const symbols = [
  `\r[ ${notDone} ${notDone} ${notDone} ${notDone} ]`,
  `\r[ ${clover} ${notDone} ${notDone} ${notDone} ]`,
  `\r[ ${clover} ${clover} ${notDone} ${notDone} ]`,
  `\r[ ${clover} ${clover} ${clover} ${notDone} ]`,
  `\r[ ${clover} ${clover} ${clover} ${clover} ]`,
]

exports.theTime = (mins = false) => {
  if (mins) {
    let i = 0;
    process.stdout.write(symbols[i]);
    i++;
    return setInterval(() => {
      process.stdout.write(symbols[i]);
      i++;
    }, (mins) / 4);
  } else {
    return symbols[symbols.length - 1];
  }
}