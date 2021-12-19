import { SerializedStyles, CSSObject, css } from '@emotion/react'
import React from 'react'
import { theme, ITheme } from '../../Theme/theme'

type HeadingProps = {
  tag: keyof IHeading
  children: string
  css?: SerializedStyles
}

const base = (headingTheme: ITheme = theme): SerializedStyles =>
  css({
    fontFamily: headingTheme.typography.secondaryFont,
    textTransform: 'uppercase',
  })

interface IHeading {
  h1: {
    color: string
  }
  h2: {
    color: string
  }
}

const componentStyles = (element: keyof IHeading): CSSObject => {
  const style = {
    h1: {
      color: 'red',
    },
    h2: {
      color: 'blue',
    },
  }
  return style[element]
}

export const Heading: React.FunctionComponent<HeadingProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag,
  children,
}) => {
  const CustomHeading = tag
  return (
    <>
      <CustomHeading css={[base(), componentStyles(tag)]}> {children} </CustomHeading>
    </>
  )
}
