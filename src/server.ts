import express, { Express, Request, Response} from 'express'
// import Film, {IFilm} from './models/Film'
import FilmRoutes from './routes/FilmRoutes'
import RealisateurRoutes from './routes/directorRoutes'
import SeanceRoutes from './routes/sessionRoutes'

const app: Express = express()

import mongoose from 'mongoose'
const uri = "mongodb+srv://azerty123:azerty@cluster0.ofjlexz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";



async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error(error)
  }
}
run().catch(console.dir);


app.use(express.json())
app.use('/api/films', FilmRoutes)
app.use('/api/directors', RealisateurRoutes)
app.use('/api/sessions', SeanceRoutes)


const PORT = 3000

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})





