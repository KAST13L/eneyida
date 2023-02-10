import React, {useCallback, useState} from 'react';
import {MovieTypeForStories} from "../stories/stub";

const MAX_SELECTED_MOVIES = 20;

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<MovieTypeForStories[]>([])

    const selectMovie = useCallback((movie: MovieTypeForStories) => {

        const selectedMoviesLength = selectedMovies.length
        const isNewMovie = !selectedMovies.find(({title}) => title === movie.title)

        if (isNewMovie && selectedMoviesLength < MAX_SELECTED_MOVIES) {
            setSelectedMovies([movie, ...selectedMovies])
        }

    }, [selectedMovies])

    const deleteMovie = useCallback((movie: MovieTypeForStories) => {
        setSelectedMovies(selectedMovies.filter(({title}) => title !== movie.title))
    }, [selectedMovies])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

