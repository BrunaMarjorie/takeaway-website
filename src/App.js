import React, { useEffect } from 'react';
import GlobalStyle from './styles/global';
import api from './services/api';
import Routes from './routes/routes';


const App = () => {


  const getMenu = async () => {
    const res = await api.get('/menu');
    localStorage.setItem('menuList', JSON.stringify(res.data.Menu));
  }

  useEffect(() => {
    getMenu();
  }, []);


  return (
    <>
      <GlobalStyle />
      <Routes/>
    </>
  )
}

export default App;
