import React from 'react';
import { Container, Content, Title } from '../menu/style';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Header from '../../styles/header';


const Menu = () => {

  const menu = JSON.parse(localStorage.getItem('menuList'));

  try {
    if (menu.length > 0) {
    };
  } catch (e) {
    return <Redirect to='/'></Redirect>
  }

  const types = (menuType) => {
    return menu.map((item, key) => {
      const type = item.type;
      if (type === menuType) {
        const price = parseFloat(item.price).toFixed(2);
        const ingredients = item.ingredients;
        let ingList = '';
        ingredients.map((ing, index) => {
          ingList += ing + ", ";
        });
        let allergens = "";
        if (item.allergens[0]) {
          allergens = `(Allergens: ${item.allergens})`
        }
        return (
          <tr key={key}>
            <td>{item.number}</td>
            <td style={{ textAlign: 'left' }} >
              <div>
                {item.dish} {allergens}
              </div>
              <div style={{ fontStyle: 'italic' }}>
                (Ingredients: {ingList})
              </div>
            </td>
            <td>{price}</td>
          </tr>
        )
      }
    })
  }




  return (
    <>
      <Header />
      <Container>
        <Content>
          <Table responsive>
            <thead>
              <tr>
                <th style={{ width: '5px' }}>Item</th>
                <th style={{ width: '25px' }}>Description</th>
                <th style={{ width: '5px' }}>Price (€)</th>
              </tr>
            </thead>
            <tbody>
              <Title>
                <td></td>
                <td > Soups </td>
                <td></td>
              </Title>
              {types('soup')}
              <Title>
                <td></td>
                <td > Starters </td>
                <td></td>
              </Title>
              {types('starter')}
              <Title>
                <td></td>
                <td > Satay </td>
                <td></td>
              </Title>
              {types('satay')}
              <Title>
                <td></td>
                <td > Curry </td>
                <td></td>
              </Title>
              {types('curry')}
              <Title>
                <td></td>
                <td > Rice </td>
                <td></td>
              </Title>
              {types('rice')}
              <Title>
                <td></td>
                <td > Chow Mein </td>
                <td></td>
              </Title>
              {types('mein')}
              <Title>
                <td></td>
                <td > Sides </td>
                <td></td>
              </Title>
              {types('side')}
            </tbody>
          </Table>
        </Content>
      </Container>
    </>
  )
};

export default Menu;