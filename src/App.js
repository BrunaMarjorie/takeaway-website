import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import Header from './styles/header';
import api from './services/api';


const App = () => {

  const getMenu = async () => {
    const res = await api.get('/menu');
    localStorage.setItem('menuList', JSON.stringify(res.data.Menu));
  }

  useEffect(() => {
    getMenu();
  }, []);

  return <>
    <GlobalStyle />
    <Header />
  </>
}

export default App;
