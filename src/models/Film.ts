import mongoose from "mongoose"
import { IDirector } from "./Director"
import { directorSchema } from "./Director";

export interface IFilm {
    title: string,
    releaseYear: number,
    genre: string,
    directors: IDirector[]
}

const FilmSchema = new mongoose.Schema<IFilm>({
    title: String,
    releaseYear: Number,
    genre: String,
    directors: [{directorSchema}]
  });

const Film = mongoose.model<IFilm>('Film', FilmSchema);

export default Film