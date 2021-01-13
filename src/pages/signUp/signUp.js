import React from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';



const SignUp = () => {
    
    const { data, submit } = Form();

    return (
        <Container>
            <Background />
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Create your account</h1>
                    <input name='name' type='text' placeholder='Username' value={data.values.name} onChange={data.handleChange} />
                    {data.errors.name && data.touched.name && (
                        <p>{data.errors.name}</p>)}
                    <input name='email' type='text' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}
                    <input name='password' type='password' placeholder='Password' value={data.values.password} onChange={data.handleChange} />
                    {data.errors.password && data.touched.password && (
                        <p>{data.errors.password}</p>)}
                    <input name='confPassword' type='password' placeholder='Confim Password' value={data.values.confPassword} onChange={data.handleChange} />
                    {data.errors.confPassword && data.touched.confPassword && (
                        <p>{data.errors.confPassword}</p>)}
                    <button type='submit'> Sign up </button>
                </form>

                <div>
                    {submit !== null &&
                        <p>{submit ? submit : null}</p>
                    }
                    <div>
                    <Link to='/login'> <FiLogIn /> Log in </Link>
                    </div>
                </div>

            </Content>
        </Container>
    );
};

export default SignUp;