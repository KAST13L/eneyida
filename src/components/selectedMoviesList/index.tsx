import React from 'react';
import Typography from "@mui/material/Typography";
import {MoviesList, SelectedMovies} from "../../styled/styled";
import {MovieCardSelected} from "../movieCardSelected";
import {Box, Button, TextField} from "@mui/material";
import {MovieType} from "../../types/types";

interface SelectedMoviesListPropsType {
    selectedMovies: any[]
    deleteMovie: (movie: MovieType) => void
}

export const SelectedMoviesList: React.FC<SelectedMoviesListPropsType> = ({selectedMovies, deleteMovie}) => {

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
                !!selectedMovies.length &&
                <Box sx={{display: 'flex', margin: 1}}>
                    <TextField variant={'outlined'} fullWidth
                               placeholder={'enter a title for the movie list'}/>
                    <Button variant={'contained'}>OK</Button>
                </Box>
            }
        </SelectedMovies>
    );
};

