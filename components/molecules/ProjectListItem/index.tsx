import styled from 'styled-components'
import { Heading } from '../../atoms/Heading'

type Props = {
  repository: Repository
}

export type Repository = {
  name: string
  description: string
  languages: {
    nodes: Language[]
  }
  object: {
    entries: GitObject[]
  }
  primaryLanguage: Language
  repositoryTopics: {
    nodes: Topic[]
  }
}

type GitObject = {
  name: string
  type: string
  mode: number
  object: {
    text: string
  }
}

type Language = {
  name: string
}

type Topic = {
  name: string
}

const Section = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
`

export const ProjectListItem = ({ repository }: Props) => (
  <Section>
    <Heading as="h4">{repository.name}</Heading>
    <p>{repository.description}</p>
  </Section>
)
