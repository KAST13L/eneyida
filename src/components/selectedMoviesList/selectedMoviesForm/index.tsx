import React from 'react';
import {Box, Button, TextField} from "@mui/material";

export const SelectedMoviesForm = () => {
    return (
        <Box sx={{display: 'flex'}}>
            <TextField variant={'outlined'} fullWidth
                       placeholder={'enter a title for the movie list'}/>
            <Button variant={'contained'}>OK</Button>
        </Box>
    );
};

