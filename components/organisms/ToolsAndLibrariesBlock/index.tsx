import { useState } from 'react'
import styled from '@emotion/styled'
import { Heading } from '../../atoms/Heading'
import { MenuItems } from '../../molecules/MenuItems'

interface IItem {
  name: string
  description?: string
}

interface Props {
  tools: IItem[]
}

const Section = styled.section`
  h2 {
    text-align: center;
  }
`

export const ToolsBlock = ({ tools }: Props) => {
  const [activeItem, setActiveItem] = useState<IItem | undefined>(tools[0])

  const clicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    const obj = tools.find((o) => o.name === e.currentTarget.value)
    setActiveItem(obj)
  }

  return (
    <Section>
      <Heading tag="h2">Tools & Libraries</Heading>
      <MenuItems items={tools} clicker={clicker} activeItem={activeItem} />
    </Section>
  )
}
