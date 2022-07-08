import { gql } from '@apollo/client'
import Link from 'next/link'
import Image from 'next/image'
import { languages, tools } from '../context'
import client from '../graphql/apollo-client'
import HeroHeading from '../components/molecules/HeroHeading'
import { ProjectListItem, Repository } from '../components/molecules/ProjectListItem'
import Introduction from '../components/molecules/Intro'
import { LanguagesBlock } from '../components/organisms/LanguageBlock'
import { ToolsBlock } from '../components/organisms/ToolsAndLibrariesBlock'
import { ProjectsBlock } from '../components/organisms/ProjectsBlock'
import { createArticle, getArticles } from '../utils/crud'

interface IUser {
  name: String
  bio: String
  repositories: {
    nodes: Repository[]
  }
}

type HomePageProps = {
  user: IUser
}

const HomePage = ({ user }: HomePageProps) => {
  // createArticle()
  // getArticles()
  const gitHubRepositoryInfo = user.repositories.nodes.filter(
    (repo: Repository) => repo.repositoryTopics.nodes.length > 0,
  )
  console.log(gitHubRepositoryInfo)
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <Introduction />
      <LanguagesBlock languages={languages} />
      <ToolsBlock tools={tools} />
      <ProjectsBlock repositories={gitHubRepositoryInfo} />
      <Image src="/images/profile.jpg" height={200} width={200} alt="A picture of me having a tea." />
      <h1>
        Read{' '}
        <Link href="/blog/first-post">
          <a>this Article!</a>
        </Link>
      </h1>
    </>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetGitHubInfo {
        user(login: "liamrdawson") {
          name
          bio
          repositories(ownerAffiliations: OWNER, last: 30, isFork: false, privacy: PUBLIC) {
            nodes {
              name
              description
              languages(last: 10) {
                nodes {
                  name
                }
              }
              primaryLanguage {
                name
              }
              repositoryTopics(first: 20) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  return {
    props: {
      user: data.user,
    },
  }
}

export default HomePage
