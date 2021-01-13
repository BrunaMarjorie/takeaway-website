import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
    flex-direction: column; 
`;

export const Search = styled.div`
    margin-top: 50px;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 100%;
    
    form {
        margin: 10px 0;
        height: 70%;
        width: 340px;
        text-align: center;

    input {
        background: #232129;
        border-radius: 10px;
        border: 2px solid #232129;
        padding: 16px;
        width: 100%;
        color: #FFF;

        & + input {
            margin-top: 8px;
        } 
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

