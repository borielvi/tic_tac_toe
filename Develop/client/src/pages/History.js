import { QUERY_GAMES } from '../utils/queries';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';

const History = () => {
    const { loading, data } = useQuery(QUERY_GAMES, {
        variables: { username }
    })

    return (
        <>
        </>
    )
}

export default History;