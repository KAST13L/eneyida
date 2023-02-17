import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Field, Form} from 'react-final-form'

export const SelectedMoviesForm = () => {
    return (
        <Form
            onSubmit={() => {}}
            validate={values => {
                const errors: {listTitle?: string} = {}
                if (!values.username) {
                    errors.listTitle = 'Required'
                }
                return errors
            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="listTitle">
                        {({input, meta}) => (
                            <Box sx={{display: 'flex'}}>
                                <TextField {...input} variant={'outlined'} fullWidth
                                           placeholder={'enter a title for the movie list'}
                                />
                                <Button variant={'contained'}>OK</Button>
                            </Box>
                        )}
                    </Field>
                </form>
            )}
        />
    );
};

