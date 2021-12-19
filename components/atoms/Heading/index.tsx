import { SerializedStyles, CSSObject, css } from '@emotion/react'
import React from 'react'
import { theme, ITheme } from '../../Theme/theme'

// ?    Is there a better way of doing this?
// ?    It kind of feels like assigning tag as a key of IHeading is misrepresenting what it is, as at the end of the day I'm rendering out a component.
// ?    That being said, we are typing Heading as a React Functional Component, I'll need to read more into this to be sure.

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
