import {
  style,
  globalStyle,
  createGlobalTheme,
  createThemeContract,
  createGlobalThemeContract,
  globalFontFace,
  globalKeyframes
} from "@vanilla-extract/css";
export const parent = style({});

export const globalTheme = createGlobalTheme(':root', {
  color: {
    brand: 'green'
  },
  font: {
    body: 'arial'
  }
});

export const globalThemeVar = createThemeContract({
  color: {
    brand: null
  },
  font: {
    body: null
  }
});

createGlobalTheme(':root', globalThemeVar, {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

globalStyle(`${parent} a`, {
  color: globalTheme.color.brand,
  backgroundColor: globalThemeVar.color.brand
});

globalStyle('html, body', {
  margin: 0,
  padding: 0,
});

// *全局抽取名称要匹配*
export const vars = createGlobalThemeContract({
  color: {
    brand: 'color-brand'
  },
  font: {
    body: 'font-body'
  }
}, (value) => `prefix-${value}`);

createGlobalTheme(':root', vars, {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const brandText = style({
  color: vars.color.brand,
  fontFamily: vars.font.body
});

const comicSans = 'GlobalComicSans';

globalFontFace(comicSans, {
  src: 'local("Comic Sans MS")'
});

export const textFont = style({
  fontFamily: comicSans
});

const rotate = 'globalRotate';

globalKeyframes(rotate, {
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const spinGlobal = style({
  animation: `3s infinite ${rotate}`
});