import React from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import {MovieCard, MovieCardSelected} from "../../components";
import {movies} from "../../stories/stub";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "./queries";

const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 130px)',
    position: 'sticky',
    top: theme.spacing(2),
}))

export const Home = () => {

    const {loading, error, data} = useQuery(MOVIES_QUERY)

    if (error) {
        return "Error"
    }

    return (
        <Box sx={{flexGrow: 1, marginTop: 2}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper elevation={5}>
                        filters section
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper elevation={5}>
                        <Box sx={{flexGrow: 1, padding: 1}}>
                            <Grid container spacing={2}>
                                {
                                    loading && "Loading..."
                                }
                                {
                                    data && data.movies.results.map((el: {title: string, posterPath: string, releaseDate: string}) => <Grid item xs={12} sm={6}
                                                                                md={4} lg={3} key={el.title}>
                                        <MovieCard movie={{
                                            title: el.title,
                                            posterPath: el.posterPath,
                                            releaseDate: el.releaseDate
                                        }} onSelectClick={() => alert('movie is select')}/>
                                    </Grid>)
                                }
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={5}>
                        <SelectedMovies>
                            <Grid container spacing={2} sx={{flex: ''}}>
                                {
                                    movies.map(el => <Grid item xs={12} sm={6}
                                                           md={4}
                                                           lg={3} key={el.title}>
                                        <MovieCardSelected movie={{
                                            title: el.title,
                                            image: el.image,
                                            releaseDate: el.releaseDate,
                                            genres: el.genres,
                                            runtime: el.runtime
                                        }} onCardDelete={() => alert('delete')}/>
                                    </Grid>)
                                }
                            </Grid>
                        </SelectedMovies>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

