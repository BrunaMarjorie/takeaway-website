import React, { useEffect } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Background, Container, Content } from './style';
import { Link } from "react-router-dom";
import Form from './form';
import Header from '../../styles/header';



const SignIn = () => {

    const { data, submit } = Form();

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <form onSubmit={data.handleSubmit}>
                        <h1>Sign in</h1>
                        <input name='email' type='text' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
                        {data.errors.email && data.touched.email && (
                            <p>{data.errors.email}</p>)}
                        <input name='password' type='password' placeholder='Password' value={data.values.password} onChange={data.handleChange} />
                        {data.errors.password && data.touched.password && (
                            <p>{data.errors.password}</p>)}
                        <Link to='/forgotpassword'> Forgot password? </Link>
                        <button type='submit'> Sign in </button>
                    </form>
                    <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000' }}>
                        {submit !== null &&
                            <p>{submit ? submit : null}</p>
                        }
                    </div>
                    <div>
                        <Link to='/register'> <AiOutlineUserAdd /> Create an account</Link>
                    </div>
                </Content>
                <Background />
            </Container>
        </>
    )
};

export default SignIn;