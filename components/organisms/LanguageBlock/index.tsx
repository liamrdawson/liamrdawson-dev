import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { useState } from 'react'
import { Heading } from '../../atoms/Heading'

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
const LanguageButton = styled.button`
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
export const LanguagesBlock = ({ languages }: Props) => {
  const [currentLanguage, setCurrentLanguage] = useState<ILanguage>(languages[0])
  return (
    <LanguagesSection>
      <Heading tag="h2">Languages</Heading>
      <ListOfLanguages>
        {languages.map((language) => (
          <LanguageButton
            css={language.languageName === currentLanguage.languageName ? active : ''}
            onClick={() => setCurrentLanguage(language)}
            value={language.languageName}
            key={languages.indexOf(language)}
          >
            {language.languageName}
          </LanguageButton>
        ))}
      </ListOfLanguages>
      <p>{currentLanguage.languageDescription}</p>
    </LanguagesSection>
  )
}
