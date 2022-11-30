import { GifResponse } from "../types/GifResponse";
import axios from "axios";

export type Gif = {
    id: string;
    title: string;
    url: string;
}

const getGifs = async(category: string): Promise<Gif[]> => {
    const apiKey = '54GRaL2jBtkRYJJNMd54CIIbwH3XEjeP'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`;
    const { data } = await axios.get<GifResponse>(url);
    const result = data.data

    const gifs = result.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}

export default getGifs;