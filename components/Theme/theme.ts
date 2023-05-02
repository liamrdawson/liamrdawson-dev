import { NextFont } from 'next/dist/compiled/@next/font'
import { Jost, Inter } from 'next/font/google'
import COLOURS from './colours'

const jost = Jost({ subsets: ['latin'] })
const inter = Inter({
  weight: ['100', '400', '600', '900'],
  subsets: ['latin'],
  fallback: ['arial'],
})

const { black200, black5OO, red500, light5OO } = COLOURS
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
    heroFont: NextFont
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
      light: string
      medium: string
      bold: string
      black: string
      interBlack?: string
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
  1: '64px',
  2: '72px',
  3: '80px',
  4: '88px',
  5: '96px',
  6: '104px',
  7: '112px',
  8: '120px',
  9: '128px',
  10: '136px',
}
export const theme: ITheme = {
  colour: {
    primary: black5OO,
    primaryHover: black5OO,
    primaryActive: black5OO,
    disabled: black200,
    secondary: light5OO,
    secondaryHover: light5OO,
    secondaryActive: light5OO,
    tertiary: red500,
    tertiaryHover: red500,
    tertiaryActive: red500,
    text: black5OO,
    textInverted: light5OO,
    background: light5OO,
  },
  typography: {
    heroFont: inter,
    primaryFont: jost.style.fontFamily,
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
      light: '100',
      medium: '500',
      bold: '400',
      black: '600',
      interBlack: '900',
    },
  },
  SPACING,
  LAYOUT,
}
