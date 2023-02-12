import React, {useCallback, useState} from 'react';
import {MovieType} from "../../types/types";

const MAX_SELECTED_MOVIES = 20;

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([])

    const selectMovie = useCallback((movie: MovieType) => {

        const selectedMoviesLength = selectedMovies.length
        const isNewMovie = !selectedMovies.find(({title}) => title === movie.title)

        if (isNewMovie && selectedMoviesLength < MAX_SELECTED_MOVIES) {
            setSelectedMovies([movie, ...selectedMovies])
        }

    }, [selectedMovies])

    const deleteMovie = useCallback((movie: MovieType) => {
        setSelectedMovies(selectedMovies.filter(({title}) => title !== movie.title))
    }, [selectedMovies])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

