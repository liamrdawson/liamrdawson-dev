import { css } from 'styled-components'
import palette from './palette'

const theme = css`
  ${palette}
  :root {
    --color-border-base: var(--ds-color-brand-primary-black);
    --color-border-secondary: var(--ds-color-brand-primary-white);
    --color-border-tertiary: var(--ds-color-brand-secondary-red);
    --color-border-button-primary-base: var(--ds-color-brand-primary-black);
    --color-border-button-primary-active: var(--ds-color-opaque-grey-800-high);
    --color-border-button-primary-disabled: var(--ds-color-opaque-grey-800-low);
    --color-border-button-secondary-base: var(--ds-color-base-white);
    --color-border-button-secondary-active: var(--ds-color-opaque-white-high);
    --color-border-button-secondary-disabled: var(--ds-color-opaque-white-low);
    --color-border-button-tertiary-base: var(--ds-color-brand-primary-black);
    --color-border-button-tertiary-active: var(--ds-color-opaque-grey-800-high);
    --color-border-button-tertiary-disabled: var(--ds-color-opaque-grey-800-low);

    --color-text-base: var(--ds-color-brand-primary-black);
    --color-text-inverse-base: var(--ds-color-brand-primary-grey);
    --color-text-inverse-secondary: var(--ds-color-brand-secondary-red);
    --color-text-button-primary-base: var(--ds-color-brand-primary-black);
    --color-text-button-primary-hover: var(--ds-color-brand-primary-white);
    --color-text-button-primary-active: var(--ds-color-brand-primary-white);
    --color-text-button-secondary-base: var(--ds-color-brand-primary-white);
    --color-text-button-secondary-hover: var(--ds-color-brand-primary-black);
    --color-text-button-secondary-active: var(--ds-color-brand-primary-black);
    --color-text-button-tertiary-base: var(--ds-color-brand-primary-black);
    --color-text-button-tertiary-hover: var(--ds-color-brand-secondary-red);
    --color-text-button-tertiary-active: var(--ds-color-brand-secondary-red);
    --color-text-footer-base: var(--ds-color-brand-primary-grey);
    --color-text-footer-inverse: var(--ds-color-brand-primary-black);
    --color-text-footer-copyright: var(--ds-color-base-grey-400);

    --layout-z-index-z-neg-3: -300;
    --layout-z-index-z-neg-2: -200;
    --layout-z-index-z-neg-1: -100;
    --layout-z-index-z-0: 0;
    --layout-z-index-z-1: 100;
    --layout-z-index-z-2: 200;
    --layout-z-index-z-3: 300;
    --layout-z-index-z-4: 400;
    --layout-z-index-z-5: 500;
    --layout-z-index-z-6: 600;
    --layout-z-index-z-7: 700;
    --layout-z-index-z-8: 800;
    --layout-z-index-z-9: 900;
    --layout-z-index-z-10: 1000;

    --time-transition-100: 0.1s;
    --time-transition-125: 0.13s;
    --time-transition-150: 0.15s;
    --time-transition-200: 0.2s;
    --time-transition-250: 0.25s;
    --time-transition-350: 0.35s;
    --time-transition-500: 0.5s;
    --time-transition-550: 0.55s;
    --time-transition-650: 0.65s;
    --time-transition-750: 0.75s;
    --time-transition-1000: 1s;
    --time-transition-none: 0s;

    --time-delay-25: 0.03s;
    --time-delay-100: 0.1s;
    --time-delay-200: 0.2s;
    --time-delay-250: 0.25s;
    --time-delay-350: 0.35s;
    --time-delay-375: 0.38s;
    --time-delay-500: 0.5s;
    --time-delay-600: 0.6s;
    --time-delay-750: 0.75s;
    --time-delay-1000: 1s;
    --time-delay-initial: 0.5s;
    --time-delay-none: 0s;

    --rem-base: 62.5%;

    --size-line-height-base: 1.6rem;

    --size-line-height-mobile-xs: 1.2rem;
    --size-line-height-mobile-small: 1.6rem;
    --size-line-height-mobile-medium: 2rem;
    --size-line-height-mobile-large: 2.4rem;
    --size-line-height-mobile-xl: 2.6rem;
    --size-line-height-mobile-2xl: 2.8rem;
    --size-line-height-mobile-3xl: 3.2rem;
    --size-line-height-mobile-4xl: 3.6rem;

    --size-line-height-desktop-xs: 1.2rem;
    --size-line-height-desktop-small: 1.4rem;
    --size-line-height-desktop-medium: 2rem;
    --size-line-height-desktop-large: 2.4rem;
    --size-line-height-desktop-xl: 3.2rem;
    --size-line-height-desktop-2xl: 3.8rem;
    --size-line-height-desktop-3xl: 4rem;
    --size-line-height-desktop-4xl: 4.4rem;
    --size-line-height-desktop-5xl: 5.2rem;
    --size-line-height-desktop-6xl: 6rem;
    --size-line-height-desktop-7xl: 6.8rem;
    --size-line-height-desktop-8xl: 7.6rem;

    --line-height-small: 1.14;
    --line-height-body: 1.4;
    --line-height-large: 1.45;
    --line-height-h1: 0.9;
    --line-height-h2: 1.1;
    --line-height-h3: 1.1;
    --line-height-h4: 1.2;
    --line-height-h5: 1.1;
    --line-height-h6: 1.1;

    --letter-spacing-small: -0.02em;
    --letter-spacing-body: -0.01em;
    --letter-spacing-large: -0.04em;
    --letter-spacing-h1: -0.05em;
    --letter-spacing-h2: -0.05em;
    --letter-spacing-h3: -0.035em;
    --letter-spacing-h4: -0.02em;
    --letter-spacing-h5: -0.02em;
    --letter-spacing-h6: -0.02em;

    --ds-font-text-body-sm-mobile-font-size: var(--ds-size-font-xxs);
    --ds-font-text-body-sm-desktop-font-size: var(--ds-size-font-xs);
    --ds-font-text-body-base-mobile-font-size: var(--ds-size-font-xs);
    --ds-font-text-body-base-desktop-font-size: var(--ds-size-font-md);
    --ds-font-text-body-lg-mobile-font-size: var(--ds-size-font-md);
    --ds-font-text-body-lg-desktop-font-size: var(--ds-size-font-xl);
    --ds-font-text-heading-xs-mobile-font-size: var(--ds-size-font-sm);
    --ds-font-text-heading-xs-desktop-font-size: var(--ds-size-font-xl);
    --ds-font-text-heading-sm-mobile-font-size: var(--ds-size-font-md);
    --ds-font-text-heading-sm-desktop-font-size: var(--ds-size-font-xl);
    --ds-font-text-heading-md-mobile-font-size: var(--ds-size-font-lg);
    --ds-font-text-heading-md-desktop-font-size: var(--ds-size-font-3xl);
    --ds-font-text-heading-lg-mobile-font-size: var(--ds-size-font-xl);
    --ds-font-text-heading-lg-desktop-font-size: var(--ds-size-font-5xl);
    --ds-font-text-heading-xl-mobile-font-size: var(--ds-size-font-xxl);
    --ds-font-text-heading-xl-desktop-font-size: var(--ds-size-font-7xl);
    --ds-font-text-heading-xxl-mobile-font-size: var(--ds-size-font-6xl);
    --ds-font-text-heading-xxl-portrait-font-size: var(--ds-size-font-8xl);
    --ds-font-text-heading-xxl-desktop-font-size: var(--ds-size-font-9xl);

    --font-weight-h1: var(--ds-font-weight-bold);
    --font-weight-h2: var(--ds-font-weight-bold);
    --font-weight-h3: var(--ds-font-weight-medium);
    --font-weight-h4: var(--ds-font-weight-bold);
    --font-weight-h5: var(--ds-font-weight-bold);
    --font-weight-h6: var(--ds-font-weight-medium);

    --font-size-small: var(--ds-font-text-body-sm-mobile-font-size);
    --font-size-body: var(--ds-font-text-body-base-mobile-font-size);
    --font-size-large: var(--ds-font-text-body-lg-mobile-font-size);

    --font-size-h1: var(--ds-font-text-heading-xxl-mobile-font-size);
    --font-size-h2: var(--ds-font-text-heading-xl-mobile-font-size);
    --font-size-h3: var(--ds-font-text-heading-lg-mobile-font-size);
    --font-size-h4: var(--ds-font-text-heading-md-mobile-font-size);
    --font-size-h5: var(--ds-font-text-heading-sm-mobile-font-size);
    --font-size-h6: var(--ds-font-text-heading-xs-mobile-font-size);

    --page-intro-small: var(--ds-size-spacing-section-intro-sm-mobile);
    --page-intro-large: var(--ds-size-spacing-section-intro-lg-mobile);
    --page-section: var(--ds-size-spacing-section-page-mobile);

    --blog-section: var(--ds-size-spacing-section-blog-mobile);
  }

  @media only screen and (min-width: 1280px) {
    :root {
      --page-intro-small: var(--ds-size-spacing-section-intro-sm-desktop);
      --page-intro-large: var(--ds-size-spacing-section-intro-lg-desktop);
      --page-section: var(--ds-size-spacing-section-page-desktop);
      --caseStudy-section: var(--ds-size-spacing-section-casestudy-desktop);
      --service-section: var(--ds-size-spacing-section-service-desktop);
      --industry-section: var(--ds-size-spacing-section-industry-desktop);
      --blog-section: var(--ds-size-spacing-section-blog-desktop);
      --thinking-section: var(--ds-size-spacing-section-thinking-desktop);
      --page-meta-bar: var(--ds-size-spacing-metabar-desktop);
      --caseStudy-meta-bar: var(--ds-size-spacing-metabar-desktop);
      --service-meta-bar: var(--ds-size-spacing-metabar-desktop);
      --industry-meta-bar: var(--ds-size-spacing-metabar-desktop);
    }
  }
`

export default theme
