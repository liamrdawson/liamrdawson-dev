import Callout from '@/components/atoms/Callout/Callout'
import { PrimaryButton } from '@/components/atoms/Button/Button'
import style from './intro-section.module.css'

const IntroSection = () => (
  <section className={style.section}>
    <strong>Hey, I&apos;m Liam Dawson.</strong>
    <Callout>
      <strong>I love building amazing websites and applicataions.</strong>
    </Callout>
    <p>
      I&apos;m a web designer/developer and photographer based in England who loves building innovative apps and solving
      problems with code. I help businesses grow their sales, enhance their brand and connect with their audience by
      creating unforgettable digital e-commerce experiences rooted in culture.
    </p>
    <p>Welcome to my small corner of the internet.</p>
    <p>If you think we could work together to enhance your business, or just want to say hi;</p>
    <p>
      <PrimaryButton value="let's talk" />
    </p>
  </section>
)

export default IntroSection
