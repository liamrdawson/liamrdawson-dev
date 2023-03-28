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
      _800: string
      _700: string
      _600: string
      _500: string
      _400: string
      _300: string
      _200: string
      _100: string
      _050: string
    }
    typeWeight: {
      light: number
      medium: number
      bold: number
      black: number
    }
  }
  SPACING: ISpacing
  LAYOUT: ILayout
}
interface ISpacing {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
}

interface ILayout {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
}

/**
 * # Spacing
 * Use these values to space UI elements within layouts.
 */
export const SPACING: ISpacing = {
  1: '1px',
  2: '2px',
  3: '4px',
  4: '8px',
  5: '12px',
  6: '16px',
  7: '20px',
  8: '24px',
  9: '28px',
  10: '32px',
}

/**
 * # Layout
 * Use these values to space blocks of content.
 */
export const LAYOUT: ILayout = {
  1: '36px',
  2: '40px',
  3: '44px',
  4: '48px',
  5: '52px',
  6: '56px',
  7: '60px',
  8: '64px',
  9: '68px',
  10: '72px',
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
      _800: '7.594rem',
      _700: '5.063rem',
      _600: '3.375rem',
      _500: '2.25rem',
      _400: '1.5rem',
      _300: '1.5rem',
      _200: '1.5rem',
      _100: '1rem',
      _050: '0.667rem',
    },
    typeWeight: {
      light: 100,
      medium: 500,
      bold: 400,
      black: 600,
    },
  },
  SPACING,
  LAYOUT,
}

// export const SPACING: ISpacing = {
//   1: 1,
//   2: 2,
//   3: 4,
//   4: 8,
//   5: 12,
//   6: 16,
//   7: 20,
//   8: 24,
//   9: 28,
//   10: 32,
// }

// export const LAYOUT: ILayout = {
//   1: 36,
//   2: 40,
//   3: 44,
//   4: 48,
//   5: 52,
//   6: 56,
//   7: 60,
//   8: 64,
//   9: 68,
//   10: 72,
// }
