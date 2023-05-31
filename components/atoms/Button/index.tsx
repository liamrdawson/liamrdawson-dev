import styled from 'styled-components'

interface Props {
  value: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const StyledPrimaryButton = styled.button`
  font-family: var(--font-family-primary);
  color: var(--color-border-button-primary-base);
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

export const PrimaryButton = ({ value, onClick }: Props) => <StyledPrimaryButton value={value} onClick={onClick} />
