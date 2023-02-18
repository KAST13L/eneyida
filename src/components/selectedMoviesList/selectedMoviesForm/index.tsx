import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Field, Form} from 'react-final-form'
import {MovieType} from "../../../types/types";
import Typography from "@mui/material/Typography";

interface OnSubmitSelectedMoviesFormPropsType {
    listName: string
}

interface SelectedMoviesFormPropsType {
    selectedMovies: MovieType[]
}

export const SelectedMoviesForm: React.FC<SelectedMoviesFormPropsType> = ({selectedMovies}) => {

    const onSubmit = ({listName}: OnSubmitSelectedMoviesFormPropsType) => {
        const ids = selectedMovies.map(el => el.id)
        const link = `${window.location.host}/recommend?title=${listName}&ids=${ids.join()}`
        debugger
    }

    return (
        <Form
            onSubmit={onSubmit}
            validate={values => {
                const errors: { listName?: string } = {}
                if (!values.listName) {
                    errors.listName = 'Required'
                }
                return errors
            }}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <Field name="listName">
                        {({input, meta}) => (
                            <Box sx={{display: 'flex'}}>
                                <TextField {...input} variant={'outlined'} fullWidth
                                           placeholder={'enter a title for the movie list'}
                                />
                                    {meta.error && meta.touched && <Typography sx={{color:'red'}}>{meta.error}</Typography>}
                                <Button variant={'contained'} type={'submit'}>OK</Button>
                            </Box>
                        )}
                    </Field>
                </form>
            )}
        />
    );
};

