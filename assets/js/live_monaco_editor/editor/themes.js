// Copied and modified from the original work available at https://github.com/livebook-dev/livebook/blob/23e58ac604de92ce54472f36fe3e28dc27576d6c/assets/js/hooks/cell_editor/live_editor/theme.js
// Copyright (C) 2021 Dashbit
// Licensed under Apache 2.0 available at https://www.apache.org/licenses/LICENSE-2.0

// This is a port of the One Dark theme to the Monaco editor.
// We color graded the comment so it has AA accessibility and
// then similarly scaled the default font.
const colors = {
  background: "hsla(224, 71%, 4%, 1)", // Tailwind dark mode base-100
  default: "hsla(224, 71%, 80%, 1)",   // Tailwind dark mode base-content
  lightRed: "hsla(352, 87%, 60%, 1)",  // Tailwind dark mode error
  blue: "hsla(223, 68%, 62%, 1)",      // Tailwind dark mode secondary
  gray: "hsla(224, 71%, 6%, 1)",       // Tailwind dark mode neutral
  green: "hsla(146, 66%, 45%, 1)",     // Tailwind dark mode success
  purple: "hsla(223, 68%, 37%, 1)",    // Tailwind dark mode primary
  red: "hsla(352, 87%, 60%, 1)",       // Tailwind dark mode error
  teal: "rgb(0, 20, 78)",              // Tailwind dark mode accent
  peach: "hsla(44, 100%, 53%, 1)",     // Tailwind dark mode warning
};

const rules = (colors) => [
  { token: "", foreground: colors.default },
  { token: "variable", foreground: colors.lightRed },
  { token: "constant", foreground: colors.blue },
  { token: "constant.character.escape", foreground: colors.blue },
  { token: "comment", foreground: colors.gray },
  { token: "number", foreground: colors.blue },
  { token: "regexp", foreground: colors.lightRed },
  { token: "type", foreground: colors.lightRed },
  { token: "string", foreground: colors.green },
  { token: "keyword", foreground: colors.purple },
  { token: "operator", foreground: colors.peach },
  { token: "delimiter.bracket.embed", foreground: colors.red },
  { token: "sigil", foreground: colors.teal },
  { token: "function", foreground: colors.blue },
  { token: "function.call", foreground: colors.default },

  // Markdown specific
  { token: "emphasis", fontStyle: "italic" },
  { token: "strong", fontStyle: "bold" },
  { token: "keyword.md", foreground: colors.lightRed },
  { token: "keyword.table", foreground: colors.lightRed },
  { token: "string.link.md", foreground: colors.blue },
  { token: "variable.md", foreground: colors.teal },
  { token: "string.md", foreground: colors.default },
  { token: "variable.source.md", foreground: colors.default },

  // XML specific
  { token: "tag", foreground: colors.lightRed },
  { token: "metatag", foreground: colors.lightRed },
  { token: "attribute.name", foreground: colors.peach },
  { token: "attribute.value", foreground: colors.green },

  // JSON specific
  { token: "string.key", foreground: colors.lightRed },
  { token: "keyword.json", foreground: colors.blue },

  // SQL specific
  { token: "operator.sql", foreground: colors.purple },
];

const theme = {
  base: "vs-dark",
  inherit: false,
  rules: rules(colors),
  colors: {
    "editor.background": colors.background,
    "editor.foreground": colors.default,
    "editorLineNumber.foreground": "hsla(224, 71%, 6%, 1)", // Tailwind dark mode neutral
    "editorCursor.foreground": "hsla(224, 7%, 90%, 1)",      // Tailwind dark mode neutral-content
    "editor.selectionBackground": "hsla(224, 71%, 5%, 1)",  // Tailwind dark mode base-200
    "editor.findMatchHighlightBackground": "#528bff3d",
    "editorSuggestWidget.background": "#21252b",
    "editorSuggestWidget.border": "hsla(224, 71%, 6%, 1)",
    "editorSuggestWidget.selectedBackground": "hsla(225, 67%, 6%, 1)",
    "input.background": "hsla(224, 71%, 5%, 1)",            // Tailwind dark mode base-200
    "input.border": "hsla(225, 67%, 6%, 1)",                // Tailwind dark mode base-300
    "editorBracketMatch.border": colors.background,
    "editorBracketMatch.background": "hsla(224, 71%, 5%, 1)", // Tailwind dark mode base-200
  },
};

export { theme };
