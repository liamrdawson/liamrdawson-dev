import { useState } from 'react'
import styled from '@emotion/styled'
import { css, useTheme } from '@emotion/react'
import { Heading } from '../../atoms/Heading'
import { MenuItems } from '../../molecules/MenuItems'
import { ITheme } from '../../Theme/theme'

interface IItem {
  name: string
  description?: string
}

interface Props {
  tools: IItem[]
}

const headingStyle = (theme: ITheme) => css`
  position: relative;
  text-align: center;
  span {
    font-size: ${theme.typography.typeScale._200};
    text-transform: none;
    position: absolute;
    top: -15px;
  }
`

const Section = styled.section`
  min-height: 400px;
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
  const theme: ITheme = useTheme()

  return (
    <Section>
      <Heading tag="h2">Tools and Libraries</Heading>
      <MenuItems items={tools} clicker={clicker} activeItem={activeItem} />
      <Heading css={headingStyle(theme)} tag="h3">
        <span>Used on these</span>Projects
      </Heading>
    </Section>
  )
}
