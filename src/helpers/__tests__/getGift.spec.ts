import getGifs from "../getGift"


describe('Test custom hook getGifs',  () => {
    test('should return an array of gifs', async() => {
        const gifs = await getGifs('Naruto');
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String) 
        })
    })
})