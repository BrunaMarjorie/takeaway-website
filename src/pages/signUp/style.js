import styled from 'styled-components';
import logo from '../../images/new.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
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
        margin: 10px 0;
        height: 70%;
        width: 50%;
        text-align: center;
        width: 340px;

    h1 {
        margin-bottom: 24px;
    }

    input {
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 8px;
        width: 100%;
        color: #CCD1D1;

        &:focus {
            background: #CCD1D1;
            color: #232129;
        }

        & + input {
            margin-top: 8px;
            color: #FFF;
        } 
    }

    p {
        width: 100%;
        color: #800000;
        text-align: left;
        font-size: 12px;
    }


    button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        padding: 0 16px;
        color: #312e38;
        width: 100%;
        font-weight: 500;
        margin-top: 10px;
        
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

