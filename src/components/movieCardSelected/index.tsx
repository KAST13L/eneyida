import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {MovieType} from "../../stories/stub";

interface MovieCardSelectedPropsType {
    movie: MovieType
    onCardDelete: () => void
}

export const MovieCardSelected: React.FC<MovieCardSelectedPropsType> = ({movie}) => {

    const {title, image, releaseDate, genres, runtime} = movie

    return (
        <Card sx={{display: 'flex'}}>
            <CardMedia
                component="img"
                sx={{width: 100}}
                image={image}
                alt={title}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent sx={{flex: '1 0 auto'}}>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1"
                                component="div">
                        {releaseDate}
                    </Typography><hr/>
                    <Typography variant="subtitle2"
                                component="div">
                        genres: {genres[0].name}
                    </Typography>
                    <Typography variant="subtitle2"
                                component="div">
                        runtime: {runtime}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}