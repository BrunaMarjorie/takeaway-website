import styled from 'styled-components';
import logo from '../../images/chinese.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100%;
    scroll-padding: 1000px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo});
    background-size: cover;
`;

export const Search = styled.div`
    margin-top: 50px;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: row;
    height: 80vh;
    margin-top: 100px;
    background-color: #DDD8D7;
    text-align: center;

`;

export const Title = styled.tr`
    background-color: #C3BFBF;

`;

