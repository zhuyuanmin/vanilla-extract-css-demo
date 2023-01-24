import { fontFace, style, keyframes } from '@vanilla-extract/css';

const comicSans = fontFace({
  src: 'local("Comic Sans MS")'
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
});

export const font = style({
  fontFamily: comicSans
});

export const spin = style({
  animation: `${rotate} 3s`
});