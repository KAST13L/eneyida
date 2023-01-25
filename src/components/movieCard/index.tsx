import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";

export const MovieCard = () => {
    return (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                height="194"
                image=".."
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h4">
                    Sonic. The legend of white space
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Apr 08, 2022
                </Typography>
            </CardContent>
        </Card>
    );
};

