import React, {useState} from 'react';
import {Box, Button, Grid, Input, Paper, styled, TextField} from "@mui/material";
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
    height: 'calc(100vh - 130px)',
    position: 'sticky',
    top: theme.spacing(2),
}))

export const Home = () => {

    const MoviesList = styled(Stack)(({theme}) => ({
        overflow: 'scroll',
        height: '90%'
    }))
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
                        <MoviesList>
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
                            }
                        </MoviesList>
                        {
                            selectedMovies.length && <Box sx={{display:'flex', margin:1}}>
                            <TextField variant={'outlined'}  fullWidth placeholder={'enter a title for the movie list'}/>
                            <Button variant={'contained'}>OK</Button>
                            </Box>
                        }
                    </SelectedMovies>
                </Grid>
            </Grid>
        </Box>
    );
};