
import { render, screen } from '@testing-library/react';
import { GifItem } from '../GifItem';

describe('<GifItem />', () => {
    const title = 'Naruto';
    const url = 'https://naturo.com/';

    test('should render the componente and make match with snapshot', () => {
        const container = render(
            <GifItem title={title} url={url} />
        );
        
        expect(screen.getByText(title)).toBeDefined();
        expect(screen.getByRole('img', {
            name: title,
        })).toBeDefined();
        expect(container).toMatchSnapshot();
    })

    test('should show the image with the url and alt', () => {
        render(
            <GifItem title={title} url={url} />
        );
        
        const image = screen.getByRole('img');

        expect(image.getAttribute('src')).toEqual(url);
        expect(image.getAttribute('alt')).toEqual(title);
    })
});

