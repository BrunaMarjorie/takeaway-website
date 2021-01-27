import styled from 'styled-components';
import logo from '../../images/chinese.jpg';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo});
    background-size: cover;
`;

export const Content = styled.div`
    align-items: center;
    width: 100vw;

    h1 {
      margin-top: 200px;       
      color: #fff;
      font-size: 3rem;
      font-weight: 500;
      white-space: nowrap;
      text-align: center;
    }

    p { 
      font-size: 0.8rem;
      color: #fff;
      text-align: center;
      margin-bottom: 5px;
    }

    h3 { 
      font-size: 1.5rem;
      color: #fff;
      text-align: center;
      margin-bottom: 210px
    }
`;


