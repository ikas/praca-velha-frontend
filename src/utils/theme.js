const breakpoints = ['544px', '768px', '1024px', '1440px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    primary: '#303D5D',
    primaryShade1: 'rgba(48, 61, 93, 0.9)',
    primaryShade2: 'rgba(48, 61, 93, 0.7)',
    primaryShade3: 'rgba(48, 61, 93, 0.5)',
    secondary: '#899CBC',
    tertiary: '#C2D987',
    white: '#FFFFFF',
    lightGray: '#EAEAEA',
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