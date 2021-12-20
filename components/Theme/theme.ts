import COLOURS from './colours'

const { BLACK, RED, LIGHT } = COLOURS
export interface ITheme {
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
    primary: BLACK._5OO,
    primaryHover: BLACK._5OO,
    primaryActive: BLACK._5OO,
    disabled: BLACK._200,
    secondary: LIGHT._5OO,
    secondaryHover: LIGHT._5OO,
    secondaryActive: LIGHT._5OO,
    tertiary: RED._500,
    tertiaryHover: RED._500,
    tertiaryActive: RED._500,
    text: BLACK._5OO,
    textInverted: LIGHT._5OO,
    background: LIGHT._5OO,
  },
  typography: {
    primaryFont: 'Futura,Trebuchet MS,Arial,sans-serif',
    secondaryFont: 'Didot, serif',
    typeScale: {
      heading1: '7.594rem',
      heading2: '5.063rem',
      heading3: '3.375rem',
      heading4: '2.25rem',
      large: '1.5rem',
      medium: '1.5rem',
      caption: '1.5rem',
      normal: '1rem',
      small: '0.667rem',
    },
    typeWeight: {
      light: 100,
      medium: 500,
      bold: 400,
      black: 600,
    },
  },
}

export const SPACING: ISpacing = {
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
