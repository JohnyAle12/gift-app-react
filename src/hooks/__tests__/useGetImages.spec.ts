import { renderHook, waitFor } from '@testing-library/react';
import { useGetImages } from '../useGetImages';


describe('Hook useGetImages', () => {
    test('should return the initial state', () => {
        const { result } = renderHook(() => useGetImages('Naruto'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });

    test('should return an array images and loading false', async() => {
        const { result } = renderHook(() => useGetImages('Naruto'));

        //* Here we wait to the useEffect hook in the custon hook call the function to execute the request
        //* If we dont use the waitfor, we get the initial state because we dont wait the useEffect be executed
        await waitFor(() => 
            expect(result.current.images.length).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    })
});