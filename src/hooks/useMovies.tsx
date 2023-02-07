import React, {useCallback, useState} from 'react';

export const useMovies = () => {

    const [selectedMovies, setSelectedMovies] = useState<string[]>([])
    const selectMovie = useCallback((movie: string)=>{
        setSelectedMovies([movie, ...selectedMovies])
    },[selectedMovies])
    const deleteMovie = useCallback(()=>{},[])


    return {
        selectedMovies,
        selectMovie,
        deleteMovie
    }
};

