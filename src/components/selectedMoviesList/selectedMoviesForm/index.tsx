import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Field, Form} from 'react-final-form'

export const SelectedMoviesForm = () => {
    return (
        <Form
            onSubmit={() => {}}
            render={({handleSubmit, form, values}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="titleOfList">
                        {({input, meta}) => (
                            <Box sx={{display: 'flex'}}>
                                <TextField {...input} variant={'outlined'} fullWidth
                                           placeholder={'enter a title for the movie list'}/>
                                <Button variant={'contained'}>OK</Button>
                                {meta.error && meta.touched &&
                                    <span>{meta.error}</span>}
                            </Box>
                        )}
                    </Field>
                </form>
            )}
        />
    );
};

