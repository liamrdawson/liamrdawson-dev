import styled from 'styled-components'
import { Heading } from '../../atoms/Heading'

const HeroHeading = styled(Heading)`
  color: ${(props) => props.theme.colour.textInverted};
  background-color: ${(props) => props.theme.colour.tertiary};
  padding: ${(props) => props.theme.SPACING[10]};
  text-align: center;
`

export default HeroHeading
