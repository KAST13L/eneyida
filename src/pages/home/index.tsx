import React, {useState} from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "./queries";
import {MovieType} from "../../stories/stub";
import {MovieCard, MovieCardSelected} from "../../components";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {useMovies} from "../../hooks/useMovies";
import Typography from "@mui/material/Typography";


const SelectedMovies = styled(Paper)(({theme}) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    height: 'calc(100vh - 30px)',
    position: 'sticky',
    top: theme.spacing(2),
}))

export const Home = () => {

    const [page, setPage] = useState(1)
    const {loading, error, data} = useQuery(MOVIES_QUERY, {variables: {page}})

    const {selectedMovies, selectMovie, deleteMovie} = useMovies()

    if (error) {
        return <div>ERROR</div>
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
                                    data && data.movies.results.map((el: MovieType) =>
                                        <Grid item xs={12} sm={6} md={4} lg={3}
                                              key={el.title}>
                                            <MovieCard movie={{
                                                title: el.title,
                                                posterPath: el.posterPath,
                                                releaseDate: el.releaseDate
                                            }}
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
                </Grid>
                <Grid item xs={12} md={4}>
                    <SelectedMovies>
                        {
                            !selectedMovies.length &&
                            <Typography sx={{textAlign: 'center', paddingTop: 5}}
                                        component="div" variant="h5">No selected
                                movies...
                            </Typography>
                        }

                        {
                            selectedMovies.map(el => <MovieCardSelected
                                key={el.title}
                                movie={{
                                    title: el.title,
                                    posterPath: el.posterPath,
                                    releaseDate: el.releaseDate,
                                    genres: el.genres,
                                    runtime: el.runtime
                                }}
                                onCardDelete={deleteMovie}/>)
                        }                                                </SelectedMovies>
                </Grid>
            </Grid>
        </Box>
    );
};