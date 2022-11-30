import { GifItem } from './GifItem';
import { useGetImages } from '../hooks/useGetImages';

type Props = {
    category: string
}

const GifGrid = ({category}:Props) => {

    const { images, isLoading } = useGetImages(category);
    
    return (
        <>
            <h3>{category}</h3>
            
            {isLoading && (
                <h2>Cargando ...</h2>
            )}
            
            <div className='card-grid'>
                { images.map( (image, index) => <GifItem key={index} { ...image } />) }
            </div>
        </>
    );
}

export default GifGrid;