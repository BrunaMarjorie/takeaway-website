import React, { useEffect, useState } from 'react';
import { Container, Content } from '../homepage/style';
import api from '../../services/api';


const Homepage = () => {

  return (
    <>
      <Container>
        <Content><h1>Welcome to Takeaway Restaurant</h1>
          <h3>Available for eating-in, takeaway and delivery</h3>
          <p>Address: Somewhere.</p>
          <p>Phone number: (999) 9999-9999.</p>
          <p>Opening hours: Wednesday to Monday - 16:00 to 20:00.</p>
        </Content>
      </Container>
    </>
  )
};

export default Homepage;