interface ITheme {
  colour: {
    primary: string
    primaryHover: string
    primaryActive: string
    disabled: string
    secondary: string
    secondaryHover: string
    secondaryActive: string
    tertiary: string
    tertiaryHover: string
    tertiaryActive: string
    text: string
    textInverted: string
    background: string
  }
  typography: {
    primaryFont: string
    secondaryFont: string
    typeScale: {
      heading1: string
      heading2: string
      heading3: string
      heading4: string
      large: string
      medium: string
      caption: string
      normal: string
      small: string
    }
    typeWeight: {
      light: number
      medium: number
      bold: number
      black: number
    }
  }
}

interface ISpacing {
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
  8: number
  9: number
  10: number
}

interface ILayout {
  1: number
  2: number
  3: number
  4: number
  5: number
  6: number
  7: number
  8: number
  9: number
  10: number
}

export const theme: ITheme = {
  colour: {
    primary: '',
    primaryHover: '',
    primaryActive: '',
    disabled: '',
    secondary: '',
    secondaryHover: '',
    secondaryActive: '',
    tertiary: '',
    tertiaryHover: '',
    tertiaryActive: '',
    text: '',
    textInverted: '',
    background: '',
  },
  typography: {
    primaryFont: '',
    secondaryFont: '',
    typeScale: {
      heading1: '',
      heading2: '',
      heading3: '',
      heading4: '',
      large: '',
      medium: '',
      caption: '',
      normal: '',
      small: '',
    },
    typeWeight: {
      light: 100,
      medium: 200,
      bold: 400,
      black: 600,
    },
  },
}

export const SPACING: ILayout = {
  1: 1,
  2: 2,
  3: 4,
  4: 8,
  5: 12,
  6: 16,
  7: 20,
  8: 24,
  9: 28,
  10: 32,
}

export const LAYOUT: ILayout = {
  1: 36,
  2: 40,
  3: 44,
  4: 48,
  5: 52,
  6: 56,
  7: 60,
  8: 64,
  9: 68,
  10: 72,
}
