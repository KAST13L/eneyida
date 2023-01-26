import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {CardMenu} from "./components/cardMenu";

interface MovieCardPropsType {
    movie: {
        title: string,
        image: string,
        releaseDate: string
    },
    onSelectClick: () => void
}

export const MovieCard: React.FC<MovieCardPropsType> = ({movie, onSelectClick}) => {

    const {title,image,releaseDate} = movie


    return (
        <Card sx={{maxWidth: 250, position:'relative'}}>
            <CardMenu onSelectClick={onSelectClick}/>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography variant="h4">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {releaseDate}
                </Typography>
            </CardContent>
        </Card>
    );
};

