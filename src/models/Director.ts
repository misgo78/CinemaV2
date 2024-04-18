import mongoose from "mongoose"

export interface IDirector {
    name: string; 
    birthDate: Date; 
    biography: string;
}

export const directorSchema = new mongoose.Schema({
    name: String,
    birthDate: Date,
    biography: String
})


const Director = mongoose.model('Director', directorSchema)



export default Director