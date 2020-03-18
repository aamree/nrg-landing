import palette from './palette';

export default {
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'TT Norms',
    'sans-serif'
  ].join(','),
  h1: {
    color: palette.text.secondary,
    fontWeight: 700,
    fontSize: '40px',
    letterSpacing: '0',
    lineHeight: '48px'
  },
  h2: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '50px',
    letterSpacing: '80px',
    lineHeight: '60px'
  },
  h3: {
    color: palette.text.secondary,
    fontWeight: 500,
    fontSize: '28px',
    letterSpacing: '0',
    lineHeight: '33.6px'
  },
  h4: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '24px',
    letterSpacing: '0',
    lineHeight: '28.8px'
  },
  h5: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '0',
    lineHeight: '24px'
  },
  h6: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14px',
    letterSpacing: '-0.05px',
    lineHeight: '20px'
  },
  subtitle1: {
    color: palette.text.secondary,
    fontWeight: 700,
    fontSize: '30px',
    letterSpacing: '0',
    lineHeight: '36px'
  },
  subtitle2: {
    color: palette.text.primary,
    fontWeight: 300,
    fontSize: '40px',
    letterSpacing: '0',
    lineHeight: '48px'
  },
  body1: {
    color: palette.text.primary,
    fontWeight: 400,
    fontSize: '20px',
    letterSpacing: '0',
    lineHeight: '24px'
  },
  body2: {
    color: palette.text.secondary,
    fontWeight: 500,
    fontSize: '20px',
    letterSpacing: '0',
    lineHeight: '24px'
  },
  button: {
    color: palette.text.primary,
    fontSize: '12px'
  },
  caption: {
    color: palette.text.primary,
    fontWeight: 500,
    fontSize: '14.87px',
    letterSpacing: '0',
    lineHeight: '17.84px'
  },
  overline: {
    color: palette.text.secondary,
    fontSize: '11px',
    fontWeight: 500,
    letterSpacing: '0.33px',
    lineHeight: '13px',
    textTransform: 'uppercase'
  }
};
