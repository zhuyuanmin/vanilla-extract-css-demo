import { style  } from "@vanilla-extract/css";

// 组合复用
const base = style({ padding: 12 });
export const primary = style([base, {
  background: 'blue',
  selectors: {
    [`${base}.&`]: {
      color: 'white'
    }
  }
}]);
export const secondary = style([base, { background: 'aqua' }]);

export const container = style({
  padding: 10,
  marginTop: 25,

  // unitless properties
  flexGrow: 1,
  opacity: 0.5,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '@media': {
    'screen and (min-width: 768px)': {
      padding: 10
    },
    '(prefers-reduced-motion)': {
      transitionProperty: 'color'
    }
  },
  ':hover': {
    color: 'pink'
  },
  ':first-of-type': {
    color: 'blue'
  },
  '::before': {
    content: ''
  },
  selectors: {
    '&:hover:not(:active)': {
      border: '2px solid aquamarine'
    },
    'nav li > &': {
      textDecoration: 'underline'
    }
  }
});
