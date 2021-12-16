import safeJsonStringify from 'safe-json-stringify'
import Link from 'next/link'
import Image from 'next/image'
import mongooseDBConnect from '../lib/dbConnect'
import Movie from '../models/Movie'

const HomePage = ({ movies }) => {
  console.log(movies)
  return (
    <>
      {movies[0].title}
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

/* Retrieves movie(s) data from mongodb database */
export async function getServerSideProps() {
  await mongooseDBConnect()

  const myArrayOfData = []

  /* find all the data in our database */
  const result = await Movie.findOne({ title: 'The Italian' })
  const data = JSON.parse(safeJsonStringify(result))
  myArrayOfData.push(data)
  const movies = myArrayOfData.map((doc) => {
    const movie = doc
    movie._id = movie._id.toString()
    return movie
  })

  return { props: { movies: movies } }
}
