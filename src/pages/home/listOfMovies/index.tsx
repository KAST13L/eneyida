import React from 'react';
import {Box, Grid} from "@mui/material";
import {MovieType} from "../../../stories/stub";
import {MovieCard} from "../../../components";

export const ListOfMovies = ({loading, data}: any) => {
    return (
        <Box sx={{flexGrow: 1, padding: 1}}>
            <Grid container spacing={2}>
                {
                    loading && "Loading..."
                }
                {
                    data && data.movies.results.map((el: MovieType) =>
                        <Grid item xs={12} sm={6} md={4} lg={3}
                              key={el.title}>
                            <MovieCard movie={{
                                title: el.title,
                                posterPath: el.posterPath,
                                releaseDate: el.releaseDate
                            }}
                                       onSelectClick={() => alert('movie is select')}/>
                        </Grid>)
                }
            </Grid>
        </Box>
    );
};

