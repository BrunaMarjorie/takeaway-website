import React from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import { Link } from "react-router-dom";
import { FiLogIn } from 'react-icons/fi';
import Header from '../../styles/header';
import { Row } from 'react-bootstrap';


const SignUp = () => {

    const { data, submit, loading } = Form();

    return (
        <Container>
            <Row >
                <Header />
            </Row>
            <Background />
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Create your account</h1>
                    <input name='name' type='text' placeholder='Username' value={data.values.name} onChange={data.handleChange} />
                    {data.errors.name && data.touched.name && (
                        <p>{data.errors.name}</p>)}
                    <input name='phoneNumber' type='text' placeholder='Phone number' value={data.values.phoneNumber} onChange={data.handleChange} />
                    {data.errors.phoneNumber && data.touched.phoneNumber && (
                        <p>{data.errors.phoneNumber}</p>)}
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
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000', marginTop: '15px' }}>
                    {loading !== null &&
                        <p>{loading ? loading : null}</p>
                    }
                </div>
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000', marginTop: '15px' }}>
                    {submit !== null &&
                        <div>
                            <p>{submit ? submit : null}</p>
                            <Link to='/login'> <FiLogIn /> Log in </Link>
                        </div>
                    }

                </div>

            </Content>
        </Container>
    );
};

export default SignUp;