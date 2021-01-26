import styled from 'styled-components';
import logo from '../../images/chinese.jpg';
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    scroll-padding: 1000px;
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${logo});
    background-size: cover;
    
`;

export const ContainerSec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 89vh;
    max-width:450px;
    margin-top: 60px;
    margin-left: 4px;
    background-image: radial-gradient(#8e9eab, #eef2f3);
    text-align: center;
    line-height: 20px;   
`;

export const Content = styled.div`
    form {
        flex: 1;
        margin-bottom: 10px;
        height: 70%;
        text-align: center;
        width: 400px;
        margin-right: 30px;
    
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
        padding: 2px;
        width: 50%;
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

        button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        color: #312e38;
        width: 20%;
        font-weight: 500;
        margin-bottom: 10px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }       
    }
`;

export const Bookings = styled.div`
    form {
        flex: 1;
        margin-bottom: 10px;
        height: 70%;
        text-align: center;
        width: 400px;
        margin-right: 30px;
        margin-left: 15px;
    
        h1 {
        margin-top: 10px;
        margin-bottom: 24px;
        font-size: 24px;
        }
        
        button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        color: #312e38;
        width: 40%;
        font-weight: 500;
        margin-bottom: 15px;
        margin-left: 30px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }       
    } 
`;

export const Takeaway = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 80vh;
    max-width: 450px;
    width: 100%;
    margin-top: 60px;
    background-image: radial-gradient(#8e9eab, #eef2f3);
    text-align: center;
    line-height: 20px; 

    form {
        flex: 1;
        margin-bottom: 10px;
        height: 70%;
        text-align: center;
        width: 350px;
        margin-right: 10px;
    
        h1 {
        margin-top: 8px;
        margin-bottom: 24px;
        font-size: 24px;
        }

        button {
        background: #2f9162;
        height: 35px;
        border-radius: 10px;
        border: 0;
        color: #312e38;
        width: 40%;
        font-weight: 500;
        margin-bottom: 15px;
        margin-left: 25px;
        
        &:hover {
            background: ${shade(0.2, '#2f9162')}
        }
    }       
    } 
`;