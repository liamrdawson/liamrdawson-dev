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
  justify-content: center;
  flex-wrap: wrap;
`

const base = css`
  text-decoration: none;
  flex: 0 0 calc(16.66% - 20px);
  padding: 10px;
  margin: 10px;
`

const active = css`
  text-decoration: underline;
  flex: 0 0 calc(16.66% - 20px);
  padding: 10px;
  margin: 0 10px;
`

export const MenuItems = ({ items, clicker, activeItem }: Props) => (
  <ItemsContainer>
    {items.map((item) => (
      <PrimaryButton
        style={activeItem && item.name === activeItem.name ? active : base}
        onClick={clicker}
        value={item.name}
        key={items.indexOf(item)}
      >
        {item.name}
      </PrimaryButton>
    ))}
  </ItemsContainer>
)
