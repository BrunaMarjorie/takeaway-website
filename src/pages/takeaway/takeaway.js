import React from 'react';
import { Container, Content } from './style';
import { Link } from "react-router-dom";
import Form from './form';


const Takeaway = () => {

    const { data, submit } = Form();

    let date = new Date();
    date = date.getDate();

    return (
        <Container>
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Select date to pick up</h1>
                    <select name='date'>
                        <option>{date}</option>
                        <option>tomorrow</option>
                    </select>
                    <input name='email' type='select' placeholder='E-mail' value={data.values.email} onChange={data.handleChange} />
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
                    <Link to='/register'> Create an account</Link>
                </div>
            </Content>
        </Container>
    )
};

export default Takeaway;