import React from 'react';
import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import {CardMenu} from "./components/cardMenu";

export const MovieCard = () => {

    return (
        <Card sx={{maxWidth: 250, position:'relative'}}>
            <CardMenu/>
            <CardMedia
                component="img"
                height="200"
                image="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
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

