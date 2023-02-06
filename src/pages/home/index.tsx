import React from 'react';
import {Box, Grid, Paper} from "@mui/material";
import {ListOfMovies} from "./listOfMovies";
import {ListOfSelectedMovies} from "./listOfSelectedMovies";

export const Home = () => {

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
                        <ListOfMovies/>
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

