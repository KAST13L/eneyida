import {act, renderHook} from '@testing-library/react-hooks';
import {useMovies} from "./useMovies";
import {movies} from "../../stories/stub";

describe('test useMovies hook', () => {

    const basicMovie = movies[0]

    it('should select movie', () => {
        const {result} = renderHook(() => useMovies())
        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies[0].title).toBe('Title movie')
        expect(result.current.selectedMovies.length).toBe(1)
    });

    it('should delete movie', () => {
        const {result} = renderHook(() => useMovies())
        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBeTruthy()

        act(() => {
            result.current.deleteMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBeFalsy()
    });

    it('should select movie only once', () => {
        const {result} = renderHook(() => useMovies())
        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(1)

        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies.length).toBe(1)
    });

})