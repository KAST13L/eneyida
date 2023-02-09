import React from 'react';
import {Card, CardContent, CardMedia, Tooltip, Typography} from "@mui/material";
import {RightTopButtonMenu} from "../RightTopMenu";
import {MovieType} from "../../stories/stub";


interface MovieCardPropsType {
    movie: {
        title: string,
        posterPath: string,
        releaseDate: string
    },
    onSelectClick: (movie: MovieType) => void
}

export const MovieCard: React.FC<MovieCardPropsType> = ({movie, onSelectClick}) => {

    const {title, posterPath, releaseDate} = movie


    return (
        <Card sx={{maxWidth: 250, position: 'relative'}}>
            <RightTopButtonMenu callback={(movie: MovieType) => onSelectClick(movie)}
                                movie={movie}/>
            <Tooltip  title={'Add'} followCursor enterDelay={500} enterNextDelay={500} >
                <CardMedia
                    component="img"
                    height="300"
                    image={posterPath}
                    alt={title}
                    onClick={() => onSelectClick(movie)}
                />
            </Tooltip >
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

