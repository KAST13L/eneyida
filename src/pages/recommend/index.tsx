import React from 'react';
import {useSearchParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import {useQuery} from "@apollo/client";
import {MOVIES_BY_IDS_QUERY} from "./queries";


export const Recommend = () => {

    const [searchParams] = useSearchParams();
    const {
        loading,
        error,
        data
    } = useQuery(MOVIES_BY_IDS_QUERY, {variables: {ids: searchParams.get('ids')?.split(',')}})

    if (error) {
        return <div>ERROR</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Typography variant={'h2'} component={'div'}>
                {searchParams.get('title')}
            </Typography>
        </>
    );
};
