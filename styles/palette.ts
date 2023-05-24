import { css } from 'styled-components'

const palette = css`
  :root {
    /*    COLOUR
    ======================================================*/

    --testing: red;

    --ds-color-base-red-50: #f9cdcd;
    --ds-rgb-color-base-red-50: 249, 205, 205;
    --ds-color-base-red-400: #d64121;
    --ds-rgb-color-base-red-400: 214, 65, 33;
    --ds-color-base-blue-300: #3a97f9;
    --ds-rgb-color-base-blue-300: 58, 151, 249;
    --ds-color-base-grey-50: #e8e3d4;
    --ds-rgb-color-base-grey-50: 232, 227, 212;
    --ds-color-base-grey-100: #eaeaea;
    --ds-rgb-color-base-grey-100: 234, 234, 234;
    --ds-color-base-grey-400: #5e5e5e;
    --ds-rgb-color-base-grey-400: 94, 94, 94;
    --ds-color-base-grey-800: #252422ff;
    --ds-rgb-color-base-grey-800: 37, 36, 34;
    --ds-color-base-grey-900: #191918;
    --ds-rgb-color-base-grey-900: 25, 25, 24;
    --ds-color-base-white: #fff;
    --ds-rgb-color-base-white: 255, 255, 255;
    --ds-color-base-black: #040404;
    --ds-rgb-color-base-black: 4, 4, 4;

    --ds-color-opaque-grey-800-high: rgba(var(--ds-rgb-color-base-grey-800), 0.8);
    --ds-color-opaque-grey-800-low: rgba(var(--ds-rgb-color-base-grey-800) 0.251);
    --ds-color-opaque-white-high: rgba(var(--ds-rgb-color-base-white), 0.8);
    --ds-color-opaque-white-low: rgba(var(--ds-rgb-color-base-white), 0.251);
    --ds-color-opaque-red-400-high: rgba(var(--ds-rgb-color-base-red-400), 0.8);
    --ds-color-opaque-red-400-low: rgba(var(--ds-rgb-color-base-red-400), 0.251);

    --ds-color-brand-primary-black: var(--ds-color-base-grey-800);
    --ds-color-brand-primary-pink: var(--ds-color-base-red-50);
    --ds-color-brand-primary-grey: var(--ds-color-base-grey-50);
    --ds-color-brand-primary-white: var(--ds-color-base-white);
    --ds-color-brand-secondary-black: var(--ds-color-base-black);
    --ds-color-brand-secondary-red: var(--ds-color-base-red-400);

    /*    SPACING
    ======================================================*/

    --ds-size-grid-padding-mobile: 5.4vw;
    --ds-size-grid-padding-desktop: 8rem;
    --ds-size-spacing-section-fixed-sm: 6rem;
    --ds-size-spacing-section-fixed-md: 8rem;
    --ds-size-spacing-section-fixed-lg: 14rem;

    --ds-size-spacing-section-variable-xs: 4.1vw;
    --ds-size-spacing-section-variable-sm: 7.8vw;
    --ds-size-spacing-section-variable-md: 10.4vw;
    --ds-size-spacing-section-variable-lg: 12.5vw;
    --ds-size-spacing-section-variable-xl: 18.2vw;

    --ds-size-spacing-section-intro-sm-mobile: 6rem;
    --ds-size-spacing-section-intro-sm-desktop: 4.1vw;
    --ds-size-spacing-section-intro-lg-mobile: 6rem;
    --ds-size-spacing-section-intro-lg-desktop: 7.8vw;

    --ds-size-spacing-section-page-mobile: 12.5vw;
    --ds-size-spacing-section-page-desktop: 12.5vw;

    --ds-size-spacing-section-blog-mobile: 10.4vw;
    --ds-size-spacing-section-blog-desktop: 10.4vw;

    /*    TYPOGRAPHY
    ======================================================*/

    --ds-font-family-sctogroteska: SctoGroteskA;
    --ds-font-family-body: 'SctoGroteskA', sans-serif;
    --ds-font-weight-regular: 300;
    --ds-font-weight-medium: 400;
    --ds-font-weight-bold: 700;

    --ds-size-font-xxs: 1.1rem;
    --ds-size-font-xs: 1.4rem;
    --ds-size-font-sm: 1.6rem;
    --ds-size-font-md: 1.8rem;
    --ds-size-font-lg: 2rem;
    --ds-size-font-xl: 2.2rem;
    --ds-size-font-xxl: 2.4rem;
    --ds-size-font-3xl: 2.8rem;
    --ds-size-font-4xl: 3.4rem;
    --ds-size-font-5xl: 3.8rem;
    --ds-size-font-6xl: 4rem;
    --ds-size-font-7xl: 4.2rem;
    --ds-size-font-8xl: 4.6rem;
    --ds-size-font-9xl: 6.25vw;
  }
`

export default palette
