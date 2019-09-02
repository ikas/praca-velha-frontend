const breakpoints = ['544px', '768px', '1024px', '1440px']

// aliases
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default {
  colors: {
    primary: '#000000',
    primarySoftShade: 'rgba(0, 0, 0, 0.8)',
    secondary: '#FFBA49',
    secondarySoftShade: 'rgba(255, 186, 73, 0.6)',
    white: '#F8F8FF',
    whiteSoftShade: 'rgba(248, 248, 255, 0.8)',
    grey: '#B3B3B3',
    lightGrey: '#f8f8f8',
    blackSoftShade: 'rgba(34, 34, 34, 0.5)',
    blackVerySoftShade: 'rgba(34, 34, 34, 0.25)',
  },
  space: [0, 4, 8, 16, 24, 32, 64, 128],
  breakpoints,
  zIndexes: {
    header: 9999,
    footer: 1,
    cursor: 10,
  },
  easingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}