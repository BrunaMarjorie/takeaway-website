import React from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import Header from '../../styles/header';
import { Row } from 'react-bootstrap';


const SignIn = () => {
    const { data, submit } = Form();


    return (
        <Container>
            <Row >
                <Header />
            </Row>
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Reset your password</h1>
                    <p style={{ textAlign: 'center', color: '#312e38', fontWeight: '500', fontSize: '14px' }}>Enter your user email address and we will send you a link to reset your password. </p>
                    <input name='email' type='text' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}

                    <button type='submit'> Send email </button>
                </form>
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000' }}>
                    {submit !== null &&
                        <p>{submit ? submit : null}</p>
                    }
                </div>
            </Content>
            <Background />
        </Container>
    )
};

export default SignIn;