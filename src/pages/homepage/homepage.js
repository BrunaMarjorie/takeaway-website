import React from 'react';
import { Container, Content, Column } from '../homepage/style';
import Header from '../../styles/header';
import { Row, Col } from 'react-bootstrap';


const Homepage = () => {

  return (
    <Container>
      <Row >
        <Column>
          <Header />
        </Column>
      </Row>
      <Content>
        <Row>
          <Column>
            <h1>Welcome to Takeaway Restaurant</h1>
            <h3>Available for eating-in, takeaway and delivery</h3>
            <p>Address: Somewhere.</p>
            <p>Phone number: (999) 9999-9999.</p>
            <p>Opening hours: Wednesday to Monday - 16:00 to 20:00.</p>
          </Column>
        </Row>
      </Content>
    </Container>
  )
};

export default Homepage;