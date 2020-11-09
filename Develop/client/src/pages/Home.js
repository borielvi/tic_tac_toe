import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { Link } from 'react-router-dom'

const Home = () => {
    const { loading, data } = useQuery(QUERY_ME);

    if(loading) {
        return <div>loading...</div>;
    } else {
        const games = data.me.games;
        return (
            <div>
                <Link to='/' id='header'>Tic Tac Toe</Link>
                <h2 className='center'>Saved Games</h2>
                <br/>
                {games.reverse().map(game => (
                    <div className='container' key={game._id}>
                        <br/>
                        <h3>Winner: {game.winner}</h3>
                        <h3>Loser: {game.loser}</h3>
                        <h4>Date: {game.createdAt}</h4>
                    </div>
                ))}
            </div>
        )
    }
}

export default Home;