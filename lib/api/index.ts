// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios"
import { ArtworkType } from "../Interfaces"


export const getArtwork = async (id: string): Promise<ArtworkType> => (await axios.get(`https://storage.googleapis.com/ya-misc/interviews/front/examples/${id}.json`)).data
