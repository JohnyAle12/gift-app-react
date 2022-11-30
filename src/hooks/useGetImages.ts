import { useState, useEffect } from 'react';
import getGifs, { Gif } from '../helpers/getGift';

export const useGetImages = (category: string) => {
    const [images, setImages] = useState<Gif[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const images = await getGifs(category);
        setImages(images);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading
    }
}
