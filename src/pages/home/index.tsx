import React from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import {MovieCard} from "../../components";
import {movies} from "../../ss/stub";


export const Home = () => {

    const SelectedMovies = styled(Paper)(({theme}) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        color: theme.palette.text.secondary,
        height: 'calc(100vh - 130px)',
        position: 'sticky',
        top: theme.spacing(2),
    }))

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
                                    movies.map(el => <Grid item xs={12} sm={6} md={4} lg={3}>
                                        <MovieCard movie={{
                                            title: el.title,
                                            image: el.image,
                                            releaseDate: el.releaseDate
                                        }}
                                           onSelectClick={() => alert('movie is select')}/>
                                    </Grid>)
                                }
                            </Grid>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={5}>
                        <SelectedMovies>selected movies</SelectedMovies>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

