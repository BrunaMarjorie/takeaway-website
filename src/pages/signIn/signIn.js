import React from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { Background, Container, Content } from './style';
import { Link } from "react-router-dom";
import Form from './form';
import Header from '../../styles/header';
import { Row } from 'react-bootstrap';



const SignIn = () => {

    //formik form
    const { data, submit } = Form();


    return (
        <Container>
            <Row >
                <Header />
            </Row>
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Sign in</h1>
                    {/* collect user name  */}
                    <input name='email' type='text' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}
                    {/* collect user password  */}
                    <input name='password' type='password' placeholder='Password' value={data.values.password} onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.password && data.touched.password && (
                        <p>{data.errors.password}</p>)}
                    <Link to='/forgotpassword'> Forgot password? </Link>
                    <button type='submit'> Sign in </button>
                </form>
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000' }}>
                    {/* display loading message and errors  */}
                    {submit !== null &&
                        <p>{submit ? submit : null}</p>
                    }
                </div>
                <div>
                    {/* link to register user page  */}
                    <Link to='/register'> <AiOutlineUserAdd /> Create an account</Link>
                </div>
            </Content>
            <Background />
        </Container>
    )
};

export default SignIn;