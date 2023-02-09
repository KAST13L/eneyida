import React, {useCallback, useState} from 'react';
import {MovieType} from "../stories/stub";

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([])

    const selectMovie = useCallback((movie: MovieType) => {

        const selectedMoviesLength = selectedMovies.length
        const isNewMovie = !selectedMovies.find(({title}) => title === movie.title )

        if (isNewMovie && selectedMoviesLength < 20) {
            setSelectedMovies([movie, ...selectedMovies])
        }

    }, [selectedMovies])

    const deleteMovie = useCallback((movie: MovieType) => {
        setSelectedMovies(selectedMovies.filter(({title}) => title !== movie.title ))
    }, [selectedMovies])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

