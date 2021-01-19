import styled from 'styled-components';
import background from '../../images/background.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    background-image: radial-gradient(#8e9eab, #eef2f3);
    
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
    
    form {
        margin: 10px 0;
        height: 70%;
        width: 340px;
        text-align: center;

    h1 {
        margin-top: 50px;
        margin-bottom: 24px;
    }

    input {
        padding: 10px;
        width: 100%;
        color: #fff;

        & + input {
            margin-top: 8px;
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
        padding: 0 10px;
        color: #312e38;
        width: 100%;
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
    background: url(${background}) no-repeat center;
    background-size: cover;
`;
