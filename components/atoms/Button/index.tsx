import { SerializedStyles } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  value: string
  key?: number
  style?: string | SerializedStyles
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  children: string
}

const StyledPrimaryButton = styled.button`
  font-family: ${(props) => props.theme.typography.primaryFont};
  color: ${(props) => props.theme.colour.tertiary};
  font-size: 1rem;
  font-weight: 600;
  background: none;
  border: none;
  cursor: pointer;
  outline: inherit;
  &:hover {
    text-decoration: underline;
  }
`

export const PrimaryButton = ({ value, key, style, onClick }: Props) => {
  return (
    <StyledPrimaryButton value={value} css={style} onClick={onClick} key={key}>
      {value}
    </StyledPrimaryButton>
  )
}
