import {act, renderHook} from '@testing-library/react-hooks';
import {useMovies} from "./useMovies";
import {movies} from "../../stories/stub";

describe('test useMovies hook', () => {

    const basicMovie = movies[0]

    it('should select movie', () => {
        const { result } = renderHook(() => useMovies())
        act(() => {
            result.current.selectMovie(basicMovie)
        })
        expect(result.current.selectedMovies[0].title).toBe('Title movie')
        expect(result.current.selectedMovies[0].adult).toBeTruthy();
        expect(result.current.selectedMovies.length).toBe(1)
    })
})