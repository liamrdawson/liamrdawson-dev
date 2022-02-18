import Link from 'next/link'
import Image from 'next/image'
import { languages, tools } from '../context'
import HeroHeading from '../components/molecules/HeroHeading'
import Introduction from '../components/molecules/Intro'
import { LanguagesBlock } from '../components/organisms/LanguageBlock'
import { ToolsBlock } from '../components/organisms/ToolsAndLibrariesBlock'
import { createArticle, getArticles } from '../utils/crud'

const HomePage = () => {
  createArticle()
  getArticles()
  return (
    <>
      <HeroHeading>I Build things</HeroHeading>
      <Introduction />
      <LanguagesBlock languages={languages} />
      <ToolsBlock tools={tools} />
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

export default HomePage
