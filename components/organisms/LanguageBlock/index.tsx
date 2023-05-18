import styled from 'styled-components'
import { useState } from 'react'
import { Heading } from '../../atoms/Heading'
import { MenuItems } from '../../molecules/MenuItems'

interface Props {
  languages: IItem[]
}

interface IItem {
  name: string
  description?: string
}

const Section = styled.section`
  min-height: 400px;
  width: 90%;
  margin: 0 auto;
  h2 {
    text-align: center;
  }
`

export const LanguagesBlock = ({ languages }: Props) => {
  const [activeItem, setActiveItem] = useState<IItem | undefined>(languages[0])

  const clicker = (e: React.MouseEvent<HTMLButtonElement>) => {
    const obj = languages.find((o) => o.name === e.currentTarget.value)
    setActiveItem(obj)
  }

  return (
    <Section>
      <Heading as="h2">Languages</Heading>
      <MenuItems items={languages} clicker={clicker} activeItem={activeItem} />
      <p>{activeItem && activeItem.description}</p>
    </Section>
  )
}
