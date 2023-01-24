import { style, createTheme, createThemeContract, assignVars } from '@vanilla-extract/css';

const vars = createThemeContract({
  color: {
    brand: ''
  },
  font: {
    body: ''
  }
});

export const containerTheme = style({
  background: vars.color.brand,
  fontFamily: vars.font.body
});

export const blueThemeClass = createTheme(vars, {
  color: {
    brand: 'blue'
  },
  font: {
    body: 'arial'
  }
});

export const redThemeClass = createTheme(vars, {
  color: {
    brand: 'red'
  },
  font: {
    body: 'helvetica'
  }
});

export const responseThemeClass = style({
  vars: assignVars(vars, {
    color: {
      brand: 'red'
    },
    font: {
      body: 'helvetica'
    }
  }),
  '@media': {
    'screen and (min-width: 1024px)': {
      vars: assignVars(vars.color, {
        brand: 'purple',
      })
    }
  }
});
