'use client'

import styled from 'styled-components'
import Image from 'next/image'
import { DateTime, Interval } from 'luxon'
import Link from 'next/link'
import aboutMePic from '../../public/assets/images/about-image-1.jpg'
import photo1 from '../../public/assets/images/about-image-2.jpg'
import photo2 from '../../public/assets/images/about-image-3.jpg'
import { Heading } from '../../components/atoms/Heading'
import { Callout } from '../../components/atoms/Callout'

const ImageContainer = styled.div`
  height: 500px;
  width: 100%;
  position: relative;
  img {
    object-fit: cover;
  }
`

const ImageRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  img {
    width: 48%;
    object-fit: cover;
    height: 500px;
  }
`

const Text = styled.p`
  margin-top: var(--page-paragraph);
`

const Section = styled.section`
  margin-top: var(--page-section);
`

function About() {
  const now = DateTime.now()
  const dob = DateTime.local(1989, 8, 31)
  const age = Math.floor(Interval.fromDateTimes(dob, now).length('years'))
  return (
    <>
      <Section>
        <p>Hey, I&apos;m Liam Dawson.</p>
        <ImageContainer>
          <Image src={aboutMePic} alt="hero image" placeholder="blur" fill />
        </ImageContainer>
        <Text>
          I&apos;m a web developer from Wales 🏴󠁧󠁢󠁷󠁬󠁳󠁿, based in Hampshire, England. I&apos;m {age} years old, speak two
          languages and I love using technology to innovate and solve problems for businesses and their customers.
        </Text>
        <Callout>
          I use cutting-edge web technologies in order to build tailored, modern and scalable business solutions in
          order to help business grow. My focus right now is on AWS, Serverless, GraphQL, TypeScript, React, and NextJS.
        </Callout>
      </Section>

      <Section>
        <Heading as="h3">A Bit More...</Heading>
        <Text>
          I live near Winchester, in the beautiful South Downs with my wife Louise and our tortoise called Olive.
        </Text>
        <Text>
          <strong>I have a few hobbies.</strong> I love photography, either taking pictures or admiring the work of
          people like <Link href="https://www.pinterest.co.uk/tedforbes/saul-leiter/">Saul Leiter</Link>,{' '}
          <Link href="https://www.pinterest.co.uk/tedforbes/fred-herzog/">Fred Herzog</Link> and{' '}
          <Link href="https://www.pinterest.co.uk/kongpinchen1/ernst-haas/">Ernst Haas</Link>. I&apos;m enthusiastic but
          very mediocre at powerlifting, something I try to get done consistently and helps me carry the groceries from
          the car in as few trips as possible 💪.
        </Text>
        <ImageRow>
          <Image src={photo1} alt="photo 1" placeholder="blur" />
          <Image src={photo2} alt="photo 2" placeholder="blur" />
        </ImageRow>
      </Section>
    </>
  )
}

export default About
