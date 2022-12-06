import { useState } from 'react';

type Props = {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>
    onAddCategory: (input: string) => void
}

const AddCategory = ({ setCategories, onAddCategory }: Props) => {

    const [input, setInput] = useState('');

    const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input.trim().length < 1) return;
        // setCategories(categories => [ ...categories, input ]);
        onAddCategory(input);
        setInput('');
    }

    return (
        <form onSubmit={ (e) => onSumbit(e) } aria-label="form">
            <input
                type="text"
                placeholder="Buscar Gif"
                value={input}
                onChange={ (e) => setInput(e.target.value)}
            />
        </form>
    );
}

export default AddCategory;