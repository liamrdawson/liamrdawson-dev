import { SerializedStyles, css, useTheme } from '@emotion/react'
import React from 'react'
import { ITheme, theme } from '../../Theme/theme'

// ?    Is there a better way of doing this?
// ?    It kind of feels like assigning tag as a key of IHeading is misrepresenting what it is, as at the end of the day I'm rendering out a component.
// ?    That being said, we are typing Heading as a React Functional Component, I'll need to read more into this to be sure.

type HeadingProps = {
  tag?: keyof IHeading
  children: string
  css?: SerializedStyles
  className?: string
}
interface IHeading {
  h1: {
    color: string
  }
  h2: {
    color: string
  }
}

const getHeadingStyles = (tag: keyof IHeading, theme: ITheme) => {
  const base = css`
    text-transform: uppercase;
    color: ${theme.colour.text};
    font-family: ${theme.typography.secondaryFont};
  `
  const style = {
    h1: css`
      font-size: ${theme.typography.typeScale.heading1};
    `,
    h2: css`
      font-size: ${theme.typography.typeScale.heading2};
    `,
  }
  return [base, style[tag]]
}

export const Heading: React.FunctionComponent<HeadingProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag = 'h1',
  className,
  children,
}) => {
  const theme: ITheme = useTheme()
  const CustomHeading = tag
  const headingStyles = getHeadingStyles(tag, theme)
  return (
    <>
      <CustomHeading className={className} css={headingStyles}>
        {children}
      </CustomHeading>
    </>
  )
}
