import { GetStaticProps } from 'next'
import Link from 'next/link'
import useSWR from 'swr'
import Image from 'next/image'
import getMovieData from '../utils/getMovieData'
import { IMovie } from '../models/Movie'
import { Heading } from '../components/atoms/Heading'
import Introduction from '../components/molecules/Intro'

type Props = {
  movies: IMovie[]
}

const HomePage = (movies: Props) => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data } = useSWR('/api/movies', fetcher, {
    fallbackData: movies,
    refreshInterval: 30000,
  })
  const firstMovie: IMovie = data.movies[0]
  return (
    <>
      <Heading tag={'h1'}>I Build Things</Heading>
      <Introduction />
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

/* 
  Use getStaticProps to get inital data from the database, this will be our 
  initial data. Any new data will be handled client-side as we useSWR to 
  get fresh data from our API on each page load.
*/
export const getStaticProps: GetStaticProps = async () => {
  const movies = await getMovieData()
  return { props: { movies: movies }, revalidate: 1 }
}
