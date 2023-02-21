import React from 'react';
import {useSearchParams} from "react-router-dom";

export const Recommend = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <div>
            {searchParams}
        </div>
    );
};
