import React from 'react';
import { Container, Content, Title } from '../menu/style';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Header from '../../styles/menuHeader';
import Form from './form';



const Menu = () => {

  const menu = JSON.parse(localStorage.getItem('menuList'));

  const { data } = Form();

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
          return ingList += ing + ", ";
        });
        let allergens = "";
        if (item.allergens[0]) {
          allergens = `(Allergens: ${item.allergens})`
        }
        return (
          <tr key={key}>
            <td><input name='quantity' type='number' min='0' style={{ width: '40px' }}
              value={data.values.quantity[key]} onChange={data.handleChange}
            ></input> </td>
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
            <td><button style={{fontWeight: 'bold'}} type='submit' onClick={() => takeaway(item.number, item.dish, data.values.quantity, item.price, item._id)}>Add to Cart</button></td>
          </tr>
        )
      }
    })
  }

  const takeaway = async (item, dish, quantity, price, id) => {
    if (!quantity) {
      alert('Error: Quantity is missing!')
    }

    else {
      let orders = await JSON.parse(localStorage.getItem('orders'));

      if (orders == null) {
        orders = []; //if no data found, set an empty array
      }

      const total = quantity * price;
      const order = { id: id, item: item, dish: dish, quantity: quantity, price: price, total: total }
      orders.push(order)
      localStorage.setItem('orders', JSON.stringify(orders));
      alert('Item added to the basket!');

    }

  }



  return (
    <Container>
      <Header />
      <Content>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th style={{ width: '80px' }}>Quantity</th>
              <th style={{ width: '80px' }}>Item</th>
              <th style={{ width: '400px' }}>Description</th>
              <th style={{ width: '100px' }}>Price (€)</th>
              <th style={{ width: '120px' }}></th>
            </tr>
          </thead>
          <tbody>
            <Title>
              <td></td>
              <td></td>
              <td > Soups </td>
              <td></td>
              <td></td>
            </Title>
            {types('soup')}
            <Title>
              <td></td>
              <td></td>
              <td > Starters </td>
              <td></td>
              <td></td>
            </Title>
            {types('starter')}
            <Title>
              <td></td>
              <td></td>
              <td > Satay </td>
              <td></td>
              <td></td>
            </Title>
            {types('satay')}
            <Title>
              <td></td>
              <td></td>
              <td > Curry </td>
              <td></td>
              <td></td>
            </Title>
            {types('curry')}
            <Title>
              <td></td>
              <td></td>
              <td > Rice </td>
              <td></td>
              <td></td>
            </Title>
            {types('rice')}
            <Title>
              <td></td>
              <td></td>
              <td > Chow Mein </td>
              <td></td>
              <td></td>
            </Title>
            {types('mein')}
            <Title>
              <td></td>
              <td></td>
              <td > Sides </td>
              <td></td>
              <td></td>
            </Title>
            {types('side')}
          </tbody>
        </Table>
      </Content>
    </Container>
  )
};

export default Menu;