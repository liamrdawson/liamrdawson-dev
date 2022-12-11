import { SerializedStyles, css, useTheme } from '@emotion/react'
import React from 'react'
import useHasMounted from '../../../utils/setHasMountedHook'
import { ITheme, theme } from '../../Theme/theme'

// ?    Is there a better way of doing this?
// ?    It kind of feels like assigning tag as a key of IHeading is misrepresenting what it is, as at the end of the day I'm rendering out a component.
// ?    That being said, we are typing Heading as a React Functional Component, I'll need to read more into this to be sure.

type HeadingProps = {
  tag?: Heading
  children: React.ReactNode
  css?: SerializedStyles
  className?: string
}

type Heading = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

const getHeadingStyles = (tag: Heading, theme: ITheme) => {
  const base = css`
    text-transform: uppercase;
    color: ${theme.colour.text};
    font-family: ${theme.typography.secondaryFont};
  `
  const style = {
    h1: css`
      font-size: ${theme.typography.typeScale._700};
    `,
    h2: css`
      font-size: ${theme.typography.typeScale._600};
    `,
    h3: css`
      font-size: ${theme.typography.typeScale._500};
    `,
    h4: css`
      font-size: ${theme.typography.typeScale._400};
    `,
    h5: css`
      font-size: ${theme.typography.typeScale._300};
    `,
  }
  return [base, style[tag]]
}

/**
 *  # Heading Atom Component
 *  Used for rendering headlines.
 *
 *  @param tag - Specifies the heading level, e.g. h1, h2, etc.
 *  @param css - Allows you to pass additional css styles either as object or string literal.
 */
export const Heading: React.FunctionComponent<HeadingProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag = 'h1',
  className,
  children,
}) => {
  const hasMounted = useHasMounted()
  const theme: ITheme = useTheme()
  const CustomHeading = tag
  const headingStyles = getHeadingStyles(tag, theme)

  if (!hasMounted) {
    return null
  }
  // adding className enables us to extend the styling of this component via emotions
  // styled(Heading) API. This is not a required param when calling this component.
  return (
    <CustomHeading className={className} css={headingStyles}>
      {children}
    </CustomHeading>
  )
}
