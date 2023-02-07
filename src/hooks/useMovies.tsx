import React, {useCallback, useState} from 'react';
import {MovieType} from "../stories/stub";

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<MovieType[]>([])
    const selectMovie = useCallback((movie: MovieType)=>{
        setSelectedMovies([movie, ...selectedMovies])
    },[selectedMovies])
    const deleteMovie = useCallback(()=>{},[])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

