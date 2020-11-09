import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
    const [formState, setFormState] = useState({ email: '', password: ''});
    const [login, { error }] = useMutation(LOGIN_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <main>
            <div>
                <div className="container center-align">
                    <Link to='/' id='header'>Tic Tac Toe</Link>
                    <h4 className='signup-h2'>Login to save your games</h4>
                    <div>
                        <form onSubmit={handleFormSubmit}>
                            <br/>
                            <input 
                                className='form-input'
                                placeholder='Email'
                                name='email'
                                type='email'
                                id='email'
                                value={formState.email}
                                onChange={handleChange}
                            />
                            <br/>
                            <input
                                className='form-input'
                                placeholder='******'
                                name='password'
                                type='password'
                                id='password'
                                value={formState.password}
                                onChange={handleChange}
                            />
                            <br/>
                            <button className='btn' type='submit'>
                                Login
                            </button>
                            <Link to='/signup' className='btn'>
                                Sign-up
                            </Link>
                        </form>
                        {error && <div>Login failed</div>}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Login;