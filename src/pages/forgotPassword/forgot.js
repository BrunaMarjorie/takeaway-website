import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Background, Container, Content } from './style';
import { Link } from "react-router-dom";
import Form from './form';


const SignIn = () => {
    const { data } = Form();


    return (
        <Container>
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Reset your password</h1>
                    <p style={{textAlign: 'center', color:'#312e38', fontWeight:'500', fontSize: '14px'}}>Enter your user email address and we will send you a link to reset your password. </p>
                    <input name='email' type='text' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}
                   
                    <button type='submit'> Send email </button>
                </form>
            </Content>
            <Background />
        </Container>
    )
};

export default SignIn;