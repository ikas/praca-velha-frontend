const breakpoints = ['544px', '768px', '1024px', '1440px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    primary: '#FFBA49',
    secondary: '#001041',
    white: '#F8F8FF',
    whiteSoftShade: 'rgba(248, 248, 255, 0.8)',
    grey: '#B3B3B3',
    black: '#222222',
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128],
  breakpoints,
  zIndexes: {
    header: 1,
    footer: 1,
    cursor: 10,
  },
  transitionEasingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}