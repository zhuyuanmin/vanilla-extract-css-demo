import { style, createVar, styleVariants, fallbackVar } from '@vanilla-extract/css'

// 导出单个变量
const base = style({ color: '#fff' });

const palette = {
  abc: 'blue',
  edf: 'aqua'
};

// 导出变量对象
export const backgroundVar = styleVariants({
  primary: [base, { background: 'black' }],
  secondary: [base, { background: 'aqua' }]
});

export const variant = styleVariants(
  palette,
  (paletteColor) => [base, { color: paletteColor }]
);

// css 变量
const myVar = createVar();
export const blueVar = style({
  vars: {
    [myVar]: 'orange'
  }
});

export const accentText = style({
  color: myVar
});

// css fallbackVar变量 兜底
export const accentText2 = style({
  color: fallbackVar(myVar, 'red')
});