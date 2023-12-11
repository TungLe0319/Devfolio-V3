

import { reactive } from "vue";

export const appState = reactive({
  sectionIsDark: false,
  cursorWidth: 10,
  cursorHeight: 10,

  hoveringLink: false,
});


export const handleCursor = () => {
  appState.cursorWidth = 90;
  appState.cursorHeight = 90;
  appState.hoveringLink = true;
};

export const resetCursor = () => {
  appState.cursorWidth = 10;
  appState.cursorHeight = 10;
  appState.hoveringLink = false;
};