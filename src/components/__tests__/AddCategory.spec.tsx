import { fireEvent, render, screen } from '@testing-library/react';
import AddCategory from '../AddCategory';

describe('<AddCategory />', () => {
    const inputValue = 'Naruto';

    test('should render component and change input value', () => {
        render(
            <AddCategory setCategories={()=>{}} onAddCategory={()=>{}} />
        )

        const input = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });
        
        expect(input.value).toBe(inputValue)
    });

    test('should call the function onAddCategory if exist an input value', () => {
        const onAddCategory = jest.fn();
        render(
            <AddCategory setCategories={()=>{}} onAddCategory={onAddCategory} />
        )

        const input = screen.getByRole<HTMLInputElement>('textbox');
        const form = screen.getByRole<HTMLFormElement>('form');
        fireEvent.input(input, {
            target: {
                value: inputValue
            }
        });

        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onAddCategory).toBeCalledTimes(1);
        expect(onAddCategory).toBeCalledWith(inputValue);
    });

    test('should not call the function onAddCategory if does not exist an input value', () => {
        const onAddCategory = jest.fn();
        render(
            <AddCategory setCategories={()=>{}} onAddCategory={onAddCategory} />
        )

        const form = screen.getByRole<HTMLFormElement>('form');

        fireEvent.submit(form);
        expect(onAddCategory).not.toBeCalled();
        expect(onAddCategory).toBeCalledTimes(0);
    });
});