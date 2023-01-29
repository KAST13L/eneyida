import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

interface MovieCardSelectedPropsType {
    movie: {
        title: string,
        image: string,
        releaseDate: string
    }
}

export const MovieCardSelected: React.FC<MovieCardSelectedPropsType> = ({movie}) => {

    const {title, image, releaseDate} = movie

    return (
        <Card sx={{display: 'flex'}}>
            <CardMedia
                component="img"
                sx={{width: 151}}
                image={image}
                alt={title}
            />
            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <CardContent>
                    <Typography component="div" variant="h5">
                        {title}
                    </Typography>
                    <Typography variant="subtitle1"
                                component="div">
                        {releaseDate}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    );
}