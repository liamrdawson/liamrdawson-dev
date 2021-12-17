import { SerializedStyles, useTheme } from '@emotion/react'
import React from 'react'
import { css } from '@emotion/react'

type HeadingProps = {
  tag: keyof JSX.IntrinsicElements
  children: string
  css?: SerializedStyles
}

const style = {
  border: 'solid red 1px',
}

export const Heading: React.FunctionComponent<HeadingProps & React.HTMLAttributes<HTMLOrSVGElement>> = ({
  tag: CustomHeading = 'h1',
  children,
}) => {
  return (
    <>
      <CustomHeading css={style}> {children} </CustomHeading>
    </>
  )
}
