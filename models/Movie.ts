import mongoose from 'mongoose'
import { config } from '../utils/config'
const { Schema } = mongoose
const connection = mongoose.createConnection(config.MDB_KEY)

// Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB
// collection and defines the shape of the documents within that collection.

const MovieSchema = new Schema({
  plot: String,
  title: String, // String is shorthand for { type: String }
  genres: [String],
  runtime: Number,
  cast: [String],
  num_mflix_comments: Number,
  fullplot: String,
  countries: [String],
  released: Date,
  directors: [String],
  rated: String,
  awards: {
    wins: Number,
    nominations: Number,
    text: String,
  },
  lastupdated: String,
  year: Number,
  imdb: {
    rating: Number,
    votes: Number,
    id: Number,
  },
  type: String,
  tomatoes: {
    viewer: {
      rating: Number,
      numReviews: Number,
      meter: Number,
    },
    lastupdated: Date,
  },
})

export default mongoose.models.Movie || connection.model('Movie', MovieSchema)
