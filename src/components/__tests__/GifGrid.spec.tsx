import { fireEvent, render, screen } from '@testing-library/react';
import GifGrid from '../GifGrid';
import { useGetImages } from '../../hooks/useGetImages';

jest.mock('../../hooks/useGetImages');

describe('<GifGrid />', () => {
    const category = 'Naruto';

    test('should render the category and loading message', () => {
        
        useGetImages.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(
            <GifGrid category={ category } />
        )

        expect(screen.getByText(category)).toBeDefined();
        expect(screen.getByText('Cargando ...')).toBeDefined();
    });

    test('should show images when them was uploaded', () => {
        const images = [
            {
                id: '123',
                title: 'Naruto',
                url: 'https://naruto.com'
            },
            {
                id: '124',
                title: 'Goku',
                url: 'https://goku.com'
            }
        ];

        useGetImages.mockReturnValue({
            images,
            isLoading: false
        })

        render(
            <GifGrid category={ category } />
        )
        expect(screen.getAllByRole('img').length).toBe(2);
    });

})