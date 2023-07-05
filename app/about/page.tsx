import Image from 'next/image'
import { DateTime, Interval } from 'luxon'
import Link from 'next/link'
import Callout from '@/components/atoms/Callout/Callout'
import { Heading } from '@/components/atoms/Heading/Heading'
import HeroImage from '@/components/atoms/HeroImage/HeroImage'
import aboutMePic from '@/assets/images/about-image-1.jpg'
import photo1 from '@/assets/images/about-image-2.jpg'
import photo2 from '@/assets/images/about-image-3.jpg'
import style from './page.module.css'

function About() {
  const now = DateTime.now()
  const dob = DateTime.local(1989, 8, 31)
  const age = Math.floor(Interval.fromDateTimes(dob, now).length('years'))
  return (
    <>
      <section>
        <p>Hey, I&apos;m Liam Dawson.</p>
        <HeroImage imageData={aboutMePic} alt="hero image" />
        <p>
          I&apos;m a web developer from Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿, based in Hampshire, England. I&apos;m {age} years old, speak two
          languages and I love using technology to innovate and solve problems for businesses and their customers.
        </p>
        <Callout>
          I use cutting-edge web technologies in order to build tailored, modern and scalable business solutions in
          order to help business grow. My focus right now is on AWS, Serverless, GraphQL, TypeScript, React, and NextJS.
        </Callout>
      </section>

      <section>
        <Heading as="h3">A Bit More...</Heading>
        <p>I live near Winchester, in the beautiful South Downs with my wife Louise and our tortoise called Olive.</p>
        <p>
          <strong>I have a few hobbies.</strong> I love photography, either taking pictures or admiring the work of
          people like <Link href="https://www.pinterest.co.uk/tedforbes/saul-leiter/">Saul Leiter</Link>,{' '}
          <Link href="https://www.pinterest.co.uk/tedforbes/fred-herzog/">Fred Herzog</Link> and{' '}
          <Link href="https://www.pinterest.co.uk/kongpinchen1/ernst-haas/">Ernst Haas</Link>. I&apos;m enthusiastic but
          very mediocre at powerlifting, something I try to get done consistently and helps me carry the groceries from
          the car in as few trips as possible 💪.
        </p>
        <div className={style['image-row']}>
          <Image src={photo1} alt="photo 1" placeholder="blur" />
          <Image src={photo2} alt="photo 2" placeholder="blur" />
        </div>
      </section>
    </>
  )
}

export default About
