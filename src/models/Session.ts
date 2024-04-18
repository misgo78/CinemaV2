import mongoose from "mongoose"
import {IFilm} from "./Film"
 
export interface ISession  {
    film: IFilm; 
    date: Date; 
    time: string;
    availableSeats: number;

}

const SessionSchema = new mongoose.Schema<ISession>({
    film: { type: mongoose.Schema.Types.ObjectId, ref: 'Film' },
    date: Date,
    time: String,
    availableSeats: Number
  });
const Session = mongoose.model<ISession>('Session', SessionSchema);

export default Session