import React from 'react';
import Typography from "@mui/material/Typography";
import {MoviesList, SelectedMovies} from "../../styled/styled";
import {MovieCardSelected} from "../movieCardSelected";
import {MovieType} from "../../types/types";
import {SelectedMoviesForm} from "../selectedMoviesForm";

interface SelectedMoviesListPropsType {
    selectedMovies: any[]
    deleteMovie: (movie: MovieType) => void
}

export const SelectedMoviesList: React.FC<SelectedMoviesListPropsType> = ({
                                                                              selectedMovies,
                                                                              deleteMovie
                                                                          }) => {

    return (
        <SelectedMovies>
            {
                !selectedMovies.length &&
                <Typography sx={{textAlign: 'center', paddingTop: 5}}
                            component="div" variant="h5">No selected
                    movies...
                </Typography>
            }
            <MoviesList>
                {
                    selectedMovies.map(el => <MovieCardSelected
                        key={el.id}
                        movie={{...el}}
                        onCardDelete={deleteMovie}/>)
                }
            </MoviesList>
            {
                !!selectedMovies.length && <SelectedMoviesForm/>
            }
        </SelectedMovies>
    );
};

