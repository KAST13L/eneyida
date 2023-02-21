import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Typography from "@mui/material/Typography";

interface SearchParamsType {
    ids?: string[] | null,
    title: string | null
}

export const Recommend = () => {

    const [searchParams] = useSearchParams();
    const [params, setParams] = useState<SearchParamsType>({
        ids: [],
        title: ''
    })

    useEffect(() => {
        const title = searchParams.get('title')
        const ids = searchParams.get('ids')

        setParams({
            ids: ids?.split(','),
            title: title
        })

    }, [searchParams])

    return (
        <>
            <Typography variant={'h2'} component={'div'}>
                {params.title}
            </Typography>
        </>
    );
};
