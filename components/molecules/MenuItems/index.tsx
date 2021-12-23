import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { PrimaryButton } from '../../atoms/Button'

interface IItem {
  name: string
  description?: string
}

interface Props {
  items: IItem[]
  clicker: React.MouseEventHandler<HTMLButtonElement>
  activeItem: IItem | undefined
}

const ItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

const active = css`
  text-decoration: underline;
`

export const MenuItems = ({ items, clicker, activeItem }: Props) => {
  return (
    <ItemsContainer>
      {items.map((item) => (
        <PrimaryButton
          style={activeItem && item.name === activeItem.name ? active : ''}
          onClick={clicker}
          value={item.name}
          key={items.indexOf(item)}
        >
          {item.name}
        </PrimaryButton>
      ))}
    </ItemsContainer>
  )
}
