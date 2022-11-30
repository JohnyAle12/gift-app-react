import { useState } from 'react';
import {AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
    const [categories, setCategories] = useState<string[]>(['Naruto']);

    const onAddCategory = (value: string) => {
        if (categories.includes(value)) return;
        //*  setCategories(categories.concat([value]));
        setCategories([ ...categories, value ]);
    }

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory
                setCategories={setCategories}
                onAddCategory={ (value) => onAddCategory(value) }
            />
            <ol>
                { categories.map( (category, index) => <GifGrid category={category} key={index} /> ) }
            </ol>
        </>
    )
}

export default GifExpertApp;