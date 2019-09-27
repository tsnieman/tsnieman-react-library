const breakpoints = ['48em', '64em']; // probably won't be used but doesn't hurt to include

// Colors
const colors = {
  white: '#ffffff',
  black: '#364045',
  grays: [
    '#ffffff',
    '#f8f9f9',
    '#ebedee',
    '#dde1e3',
    '#ced3d6',
    '#bdc4c8',
    '#aab4b9',
    '#95a1a7',
    '#7c8b92',
    '#5d6e77',
    '#364045',
    '#212a29',
    '#161c1b',
  ],

  blue: '#038ed8',
  blues: [
    '#f1f9fc',
    '#e3f3fa',
    '#c5e5f6',
    '#a2d6f0',
    '#7ac5ea',
    '#48afe2',
    '#038ed8',
    '#0282c3',
    '#0272aa',
    '#015e8d',
    '#014364',
  ],

  red: '#d80327',
  reds: [
    '#fbeaed',
    '#f8d2d9',
    '#f4b7c2',
    '#ee96a5',
    '#e76a7f',
    '#d80327',
    '#c30223',
    '#ab021e',
    '#8e0119',
    '#670112',
  ],

  purple: '#4a03d8',
  purples: [
    '#efeafb',
    '#dfd2f8',
    '#cbb7f3',
    '#b395ee',
    '#9368e7',
    '#4a03d8',
    '#4202c2',
    '#3a02aa',
    '#30018c',
    '#220164',
  ],

  fuschia: '#b403d8',
  fuschias: [
    '#f8e9fb',
    '#f1d1f8',
    '#e9b6f3',
    '#df94ee',
    '#d166e7',
    '#b403d8',
    '#a202c3',
    '#8e02ab',
    '#76018e',
    '#550166',
  ],

  pink: '#d80391',
  pinks: [
    '#fbe9f5',
    '#f8d2eb',
    '#f3b6df',
    '#ee95d0',
    '#e767bc',
    '#d80391',
    '#c30283',
    '#ab0273',
    '#8e015f',
    '#660145',
  ],

  orange: '#d84a03',
  oranges: [
    '#fbece5',
    '#f6d8c9',
    '#f1c0a8',
    '#eba581',
    '#e38150',
    '#d84a03',
    '#c34202',
    '#aa3a02',
    '#8c3001',
    '#642201',
  ],

  yellow: '#d8b503',
  yellows: [
    '#faf5de',
    '#f4ebbb',
    '#eee095',
    '#e8d36b',
    '#e0c53a',
    '#d8b503',
    '#c3a302',
    '#ab8f02',
    '#8e7701',
    '#665601',
  ],

  green: '#03d84a',
  greens: [
    '#e4faec',
    '#c7f6d6',
    '#a5f1be',
    '#7deaa2',
    '#4be37d',
    '#03d84a',
    '#02c342',
    '#02ab3a',
    '#018e30',
    '#016723',
  ],

  cyan: '#03d8b5',
  cyans: [
    '#e3faf7',
    '#c5f6ee',
    '#a3f0e4',
    '#7aead8',
    '#48e2c9',
    '#03d8b5',
    '#02c3a3',
    '#02ab90',
    '#018e77',
    '#016756',
  ],
};

colors.brand = colors.blue;
colors['brand-light'] = colors.blues[0];
colors['brand-xlight'] = colors.grays[1];

colors.text = colors.black;
colors.link = colors.blues[6];
colors['link-visited'] = colors.blues[8];

colors.border = colors.grays[4];

colors.danger = colors.red;
colors.warning = colors.yellow;
colors.positive = colors.green;

colors.rating = colors.yellow;

// Box model
const space = [0, '0.25rem', '0.5rem', '1rem', '2rem', '4rem', '8rem', '16rem'];

// Borders
const borderWidths = [
  0,
  '1px',
  '0.125rem',
  '0.25rem',
  '0.5rem',
  '1rem',
  '2rem',
];

const radii = [0, '0.125rem', '0.25rem', '0.5rem', '1rem', '100%'];

// Typography
const fonts = {
  system:
    'system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Oxygen, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
};

const fontSizes = [
  '0.625rem',
  '0.75rem',
  '0.875rem',
  '1rem',
  '1.125rem',
  '1.25rem',
  '1.5rem',
  '2rem',
  '2.5rem',
  '3rem',
];

fontSizes.heading1 = fontSizes[8];
fontSizes.heading2 = fontSizes[6];
fontSizes.heading3 = fontSizes[5];
fontSizes.paragraph = fontSizes[4];
fontSizes.small = fontSizes[2];
fontSizes.xsmall = fontSizes[1];

const fontWeights = {
  thin: 100,
  'extra-light': 200,
  light: 300,
  normal: '400',
  medium: 500,
  'semi-bold': 600,
  bold: '700',
  'extra-bold': 800,
  black: 900,
};

const lineHeights = {
  title: 1.25,
  copy: 1.5,
};

export default {
  breakpoints,
  colors,
  space,
  borderWidths,
  radii,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
};
