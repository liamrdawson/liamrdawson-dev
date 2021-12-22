import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useContext } from 'react'
import { LanguageContext } from '../../../context'
import { Heading } from '../../atoms/Heading'
import { PrimaryButton } from '../../atoms/Button'

interface Props {
  languages: ILanguage[]
}

interface ILanguage {
  name: string
  description: string
}

const active = css`
  text-decoration: underline;
`

const LanguagesSection = styled.section`
  h2 {
    text-align: center;
  }
`

const ListOfLanguages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`

export const LanguagesBlock = ({ languages }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useContext(LanguageContext)
  return (
    <LanguagesSection>
      <Heading tag="h2">Languages</Heading>
      <ListOfLanguages>
        {languages.map((language) => (
          <PrimaryButton
            style={language.name === currentLanguage.name ? active : ''}
            onClick={() => {
              setCurrentLanguage(language)
            }}
            value={language.name}
            key={languages.indexOf(language)}
          >
            {language.name}
          </PrimaryButton>
        ))}
      </ListOfLanguages>
      <p>{currentLanguage.description}</p>
    </LanguagesSection>
  )
}
