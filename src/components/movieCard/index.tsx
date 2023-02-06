import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {RightTopButtonMenu} from "../RightTopMenu";

interface MovieCardPropsType {
    movie: {
        title: string,
        posterPath: string,
        releaseDate: string
    },
    onSelectClick: () => void
}

export const MovieCard: React.FC<MovieCardPropsType> = ({movie, onSelectClick}) => {

    const {title,posterPath,releaseDate} = movie


    return (
        <Card sx={{maxWidth: 250, position:'relative'}}>
            <RightTopButtonMenu callback={onSelectClick}/>
            <CardMedia
                component="img"
                height="300"
                image={posterPath}
                alt={title}
            />
            <CardContent>
                <Typography variant="h5">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {releaseDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

