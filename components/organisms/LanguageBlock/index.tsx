import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'
import { Heading } from '../../atoms/Heading'
import { PrimaryButton } from '../../atoms/Button'

interface Props {
  languages: ILanguage[]
}

interface ILanguage {
  languageName: string
  languageDescription: string
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
  const [currentLanguage, setCurrentLanguage] = useState<ILanguage>(languages[0])
  return (
    <LanguagesSection>
      <Heading tag="h2">Languages</Heading>
      <ListOfLanguages>
        {languages.map((language) => (
          <PrimaryButton
            style={language.languageName === currentLanguage.languageName ? active : ''}
            onClick={() => setCurrentLanguage(language)}
            value={language.languageName}
            key={languages.indexOf(language)}
          >
            {language.languageName}
          </PrimaryButton>
        ))}
      </ListOfLanguages>
      <p>{currentLanguage.languageDescription}</p>
    </LanguagesSection>
  )
}
