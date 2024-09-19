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
    "\x1B\[30m": "\x1B[30m", // black
    "\x1B\[35m": "\x1B[35m", // purple
    '\x1B[3m': "\x1B[23m", // italic
    '\x1B[4m': "\x1B[24m", // underline
    '\x1B[9m': "\x1B[29m", // strike through
    '\x1B[6m': "\x1B[29m" // obfuscated

/*
Black	30	40
Red	31	41
Green	32	42
Yellow	33	43
Blue	34	44
Magenta	35	45
Cyan	36	46
White	37	47
Default	39	49
Reset	0	0
ESC[1;34;{...}m		Set graphics modes for cell, separated by semicolon (;).
ESC[0m		reset all modes (styles and colors)
ESC[1m	ESC[22m	set bold mode.
ESC[2m	ESC[22m	set dim/faint mode.
ESC[3m	ESC[23m	set italic mode.
ESC[4m	ESC[24m	set underline mode.
ESC[5m	ESC[25m	set blinking mode
ESC[7m	ESC[27m	set inverse/reverse mode
ESC[8m	ESC[28m	set hidden/invisible mode
ESC[9m	ESC[29m	set strikethrough mode.
*/
/*
  const defaultAnsiCodes = {
    '§0': '\u001b[30m',
    '§1': '\u001b[34m',
    '§2': '\u001b[32m',
    '§3': '\u001b[36m',
    '§4': '\u001b[31m',
    '§5': '\u001b[35m',
    '§6': '\u001b[33m',
    '§7': '\u001b[37m',
    '§8': '\u001b[90m',
    '§9': '\u001b[94m',
    '§a': '\u001b[92m',
    '§b': '\u001b[96m',
    '§c': '\u001b[91m',
    '§d': '\u001b[95m',
    '§e': '\u001b[93m',
    '§f': '\u001b[97m',
    '§l': '\u001b[1m',
    '§o': '\u001b[3m',
    '§n': '\u001b[4m',
    '§m': '\u001b[9m',
    '§k': '\u001b[6m',
    '§r': '\u001b[0m'
  }
*/
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
