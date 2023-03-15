import { ITheme } from './theme' // Import type from above file
import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends ITheme {} // extends the global DefaultTheme with our ThemeType.
}
