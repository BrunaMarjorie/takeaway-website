import styled from 'styled-components';
import logo from '../../images/chinese.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    scroll-padding: 1200px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo});
    background-size: cover;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    width: 100%;
    max-width:900px;
    margin-top: 80px;
    background-color: #DDD8D7;
    text-align: center;
    line-height: 20px;    


    button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        padding: 0 10px;
        color: #312e38;
        width: 100%;
        font-weight: 200;
        margin-top: 6px;
        font-size: 14px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }

`;

export const Title = styled.tr`
    background-color: #C3BFBF;

`;

export const Button = styled.div`
    display: flex;
    flex-direction: row;
    height: 1vh;
    width: 100%;
    max-width:900px;
    margin-top: 30px;
    text-align: center;
    line-height: 20px;    


    button, .dropdown-button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        padding: 0 10px;
        color: #312e38;
        width: 25%;
        font-weight: 500;
        margin-top: 16px;
        font-size: 16px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }

`;
