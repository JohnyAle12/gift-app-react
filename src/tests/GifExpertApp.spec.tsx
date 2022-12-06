import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import GifExpertApp from '../GifExpertApp';


describe('<GifExpertApp />', () => {
    test('should render the component successfully', () => {
        const container = render(<GifExpertApp />);

        expect(screen.getByText('Gif Expert App')).toBeDefined();
        expect(container).toMatchSnapshot();
    })

    test('should show images if change the input text', async() => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {
            target: {
                value: 'Goku'
            }
        });

        fireEvent.submit(form);

        expect(screen.getByText('Cargando ...')).toBeDefined();

        await waitFor(() => 
            expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
        );

        expect(
            screen.getByRole('heading', {
                level: 3,
                name: 'Goku',
            })
        ).toBeDefined();
        expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
    });
});