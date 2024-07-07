function ansi (message) {
  const ansilist = {
    "\x1B\[93m": "\x1B[33m", // Yellow
    "\x1B\[96m": "\x1B[36m", // Blue
    "\x1B\[94m": "\x1B[34m", // Discord Blue
    "\x1B\[90m": "\x1B[30m", // Gray
    "\x1B\[91m": "\x1B[31m", // Light Red
    "\x1B\[95m": "\x1B\[35m", // Pink
    "\x1B\[92m": "\x1B\[32m", // Green
    "\x1B\[0m": "\x1B\[0m\x1B\[37m", // White
    "\x1B\[97m": "\x1B\[0m\x1B\[37m", // White
  };
  let i = message;

  for (const ansi in ansilist) {
    if (ansilist.hasOwnProperty(ansi)) {
      i = i.replace(new RegExp(escapeRegExpChars(ansi), 'g'), ansilist[ansi]);

      function escapeRegExpChars(text) {
        return text.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
      }
    }
  }
  return i;
}
module.exports = ansi;
