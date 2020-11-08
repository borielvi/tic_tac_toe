import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

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
            const { data } = await addUser({
                variables: { ...formState }
            });

            Auth.login(data.addUser.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <main>
            <div>
                <div className="container center-align">
                    <h4 className='signup-h2'>Sign-up to save your games</h4>
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
                                placeholder='Username'
                                name='username'
                                type='email'
                                id='username'
                                value={formState.username}
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
                            <div className='btns'>
                                <button className='btn' type='submit'>
                                    Sign-up
                                </button>
                                <Link to='/login' className='btn'>
                                    Login
                                </Link>
                            </div>
                        </form>
                        {error && <div>Sign up failed</div>}
                    </div>
                </div>
            </div>
        </main>
    )
};

export default Signup;