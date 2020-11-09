import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return <div>loading...</div>;
    } else {
        console.log(data.me.games);
    }

    return (
        <div>
            <h1>Saved Games</h1>
        </div>
    )
}

export default Home;