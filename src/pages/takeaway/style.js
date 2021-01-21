import styled from 'styled-components';
import logo from '../../images/background.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
    background-image: radial-gradient(#8e9eab, #eef2f3);

    form {
        margin-bottom: 10px;
        height: 70%;
        text-align: center;
        width: 70%;
    
        h1 {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 24px;
    }

    input, select {
        flex: 1;
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 7px;
        width: 55%;
        color: #CCD1D1;
        margin-bottom: 10px;


        &:focus {
            background: #CCD1D1;
            color: #232129;
        }

        & + input {
            margin-top: 8px;
        } 
    }

    p {
        width: 100%;
        color: #800000;
        text-align: center;
        font-size: 12px;
    }

    button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        padding: 0 10px;
        color: #312e38;
        width: 55%;
        font-weight: 500;
        margin-top: 16px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }

    a {
        color: #f5f5f5;
        display: block;
        margin-top: 14px;
        margin-bottom: 14px;
        text-decoration: none;
        text-align: right;
        font-size: 14px;

        &:hover {
            color: ${shade(0.2, '#f5f5f5')}
        }
    }
    }

    > a {
        color: #2f9162;
        display: flex;
        text-decoration: none;
        align-items: center;

        svg{
            margin-right: 8px;
        }

        &:hover {
            color: ${shade(0.2, '#2f9162')}
        }
    }
`;


export const Background = styled.div`
    flex: 1;
    background: url(${logo}) no-repeat center;
    background-size: cover;
`;



