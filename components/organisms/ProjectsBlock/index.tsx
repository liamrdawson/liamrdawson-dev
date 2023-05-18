import styled from 'styled-components'
import { ProjectListItem, Repository } from '../../molecules/ProjectListItem'

type Props = {
  repositories: Repository[]
}

const Section = styled.section`
  margin: 0 auto;
  width: 80%;
`

export const ProjectsBlock = ({ repositories }: Props) => (
  <Section>
    {repositories.map((repo: Repository) => (
      <ProjectListItem key={repositories.indexOf(repo)} repository={repo} />
    ))}
  </Section>
)
