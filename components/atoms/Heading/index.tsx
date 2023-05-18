import styled from 'styled-components'

function getFontSize(tag: NewHeadingProps['as']) {
  const headingFontSizes: { [key: string]: string } = {
    h1: '10rem',
    h2: '8rem',
    h3: '6rem',
    h4: '4rem',
    h5: '2rem',
  }
  return headingFontSizes[(tag = 'h1')]
}

interface NewHeadingProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export const Heading = styled.span<NewHeadingProps>`
  text-transform: uppercase;
  margin: 3rem 0 1.38rem;
  line-height: 1.3;
  font-size: ${(props) => getFontSize((props.as = 'h1'))};
`
