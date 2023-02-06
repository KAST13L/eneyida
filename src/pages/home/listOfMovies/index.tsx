import React, {useState} from 'react';
import {Box, Grid} from "@mui/material";
import {MovieType} from "../../../stories/stub";
import {MovieCard} from "../../../components";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "../queries";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const ListOfMovies = () => {

    const [page, setPage] = useState(1)
    const {loading, error, data} = useQuery(MOVIES_QUERY, {variables: {page}})

    if (error) {
        return <div>ERROR</div>
    }

    const totalCountPages = Math.floor(data?.movies?.totalPages / 20)

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
                <Stack spacing={2} sx={{margin: 3}}>
                    <Pagination
                        count={totalCountPages}
                        page={page}
                        onChange={(event, page) => setPage(page)}
                    />
                </Stack>
            </Grid>
        </Box>
    );
};

