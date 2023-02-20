import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {Field, Form} from 'react-final-form'
import {MovieType} from "../../../types/types";
import Typography from "@mui/material/Typography";
import {ConfirmModal} from "../../ConfirmModal";

interface OnSubmitSelectedMoviesFormPropsType {
    listName: string
}

interface SelectedMoviesFormPropsType {
    selectedMovies: MovieType[]
}

export const SelectedMoviesForm: React.FC<SelectedMoviesFormPropsType> = ({selectedMovies}) => {

    const [link, setLink] = useState('')
    const [listName, setListName] = useState('')

    const onSubmit = ({listName}: OnSubmitSelectedMoviesFormPropsType) => {
        const ids = selectedMovies.map(el => el.id)
        const link = `${window.location.host}/recommend?title=${listName}&ids=${ids.join()}`
        setLink(link)
        setListName(listName)
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
                            <Box sx={{display: 'flex', position: 'relative'}}>
                                <TextField {...input} variant={'outlined'} fullWidth
                                           placeholder={'enter a title for the movie list'}
                                />
                                {meta.error && meta.touched && <Typography sx={{
                                    color: 'red',
                                    position:'absolute',
                                    right:'70px',
                                    top:'15px'
                                }}>{meta.error}</Typography>}
                                <Button variant={'contained'} type={'submit'}>OK</Button>
                            </Box>
                        )}
                    </Field>
                    <ConfirmModal open={!!link} url={link} title={listName} onClose={()=>{}}/>
                </form>
            )}
        />
    );
};

