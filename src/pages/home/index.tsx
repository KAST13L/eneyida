import React from 'react';
import {Box, Grid, Paper, styled} from "@mui/material";
import {useQuery} from "@apollo/client";
import {MOVIES_QUERY} from "./queries";
import {ListOfMovies} from "./listOfMovies";
import {ListOfSelectedMovies} from "./listOfSelectedMovies";

export const Home = () => {

    const {loading, error, data} = useQuery(MOVIES_QUERY)

    if (error) {
        return <div>Error</div>
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
                        <ListOfMovies loading={loading} data={data}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper elevation={5}>
                        <ListOfSelectedMovies/>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

