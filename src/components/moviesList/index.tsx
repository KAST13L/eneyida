import React, {useState} from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {MovieType} from "../../types/types";
import {MovieCard} from "../movieCard";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "../../pages/home/queries";
import {useMovies} from "../../hooks/useMovies/useMovies";

export const MoviesList = () => {

    const [page, setPage] = useState(1)
    const {loading, error, data} = useQuery(MOVIES_QUERY, {variables: {page}})
    const {selectMovie} = useMovies()

    if (error) {
        return <div>ERROR</div>
    }

    return (
        <Paper elevation={5}>
            <Box sx={{flexGrow: 1, padding: 1}}>
                <Grid container spacing={2}>
                    {
                        loading && "Loading..."
                    }
                    {
                        data && data.movies.results.map((el: MovieType) =>
                            <Grid item xs={12} sm={6} md={4} lg={3}
                                  key={el.id}>
                                <MovieCard movie={{...el}}
                                           onSelectClick={selectMovie}/>
                            </Grid>)
                    }
                    <Stack spacing={2} sx={{margin: 3}}>
                        <Pagination
                            count={500}
                            page={page}
                            onChange={(event, page) => setPage(page)}
                        />
                    </Stack>
                </Grid>
            </Box>
        </Paper>
    );
};

