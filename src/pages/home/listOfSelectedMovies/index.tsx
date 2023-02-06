import React from 'react';
import {Grid, Paper, styled} from "@mui/material";
import {movies} from "../../../stories/stub";
import {MovieCardSelected} from "../../../components";

const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 130px)',
    position: 'sticky',
    top: theme.spacing(2),
}))

export const ListOfSelectedMovies = () => {
    return (
        <SelectedMovies>
            <Grid container spacing={2} sx={{flex: ''}}>
                {
                    movies.map(el => <Grid item xs={12} sm={6}
                                           md={4}
                                           lg={3} key={el.title}>
                        <MovieCardSelected movie={{
                            title: el.title,
                            posterPath: el.posterPath,
                            releaseDate: el.releaseDate,
                            genres: el.genres,
                            runtime: el.runtime
                        }} onCardDelete={() => alert('delete')}/>
                    </Grid>)
                }
            </Grid>
        </SelectedMovies>
    );
};

