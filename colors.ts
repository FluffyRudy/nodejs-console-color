class ColoredConsole {
  private static ColoredConsoleInstance: null | ColoredConsole = null;

  private constructor() {
    if (ColoredConsole.ColoredConsoleInstance === null) {
      ColoredConsole.ColoredConsoleInstance = this;
    }
  }

  public log(color: ColorKey, ...args: any): void {
    console.log(`${colorMap[color]}%s${ansiEscape}0m`, ...args);
  }

  public static getInstance(): ColoredConsole {
    if (ColoredConsole.ColoredConsoleInstance === null)
      ColoredConsole.ColoredConsoleInstance = new ColoredConsole();
    return ColoredConsole.ColoredConsoleInstance;
  }
}

const ansiEscape = "\x1b[";
const colorMap: Record<ColorKey, string> = {
  reset: `${ansiEscape}0m`,
  bright: `${ansiEscape}1m`,
  dim: `${ansiEscape}2m`,
  underscore: `${ansiEscape}4m`,
  blink: `${ansiEscape}5m`,
  reverse: `${ansiEscape}7m`,
  hidden: `${ansiEscape}8m`,

  fgblack: `${ansiEscape}30m`,
  fgred: `${ansiEscape}31m`,
  fggreen: `${ansiEscape}32m`,
  fgyellow: `${ansiEscape}33m`,
  fgblue: `${ansiEscape}34m`,
  fgmagenta: `${ansiEscape}35m`,
  fgcyan: `${ansiEscape}36m`,
  fgwhite: `${ansiEscape}37m`,
  fggray: `${ansiEscape}90m`,

  bgblack: `${ansiEscape}40m`,
  bgred: `${ansiEscape}41m`,
  bggreen: `${ansiEscape}42m`,
  bgyellow: `${ansiEscape}43m`,
  bgblue: `${ansiEscape}44m`,
  bgmagenta: `${ansiEscape}45m`,
  bgcyan: `${ansiEscape}46m`,
  bgwhite: `${ansiEscape}47m`,
  bggray: `${ansiEscape}100m`,
};

Object.freeze(colorMap); // Make the object read-only

type ColorKey = Lowercase<
  | "Reset"
  | "Bright"
  | "Dim"
  | "Underscore"
  | "Blink"
  | "Reverse"
  | "Hidden"
  | "FgBlack"
  | "FgRed"
  | "FgGreen"
  | "FgYellow"
  | "FgBlue"
  | "FgMagenta"
  | "FgCyan"
  | "FgWhite"
  | "FgGray"
  | "BgBlack"
  | "BgRed"
  | "BgGreen"
  | "BgYellow"
  | "BgBlue"
  | "BgMagenta"
  | "BgCyan"
  | "BgWhite"
  | "BgGray"
>;

const coloredConsole = ColoredConsole.getInstance();
coloredConsole.log("fgyellow", "apple"); //logs 'apple' with yellow foreground
