import React from 'react';
import { Container, Content, Title } from '../menu/style';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import Header from '../../styles/menuHeader';
import Form from './form';



const Menu = () => {

  //collect menu list
  const menu = JSON.parse(localStorage.getItem('menuList'));

  //formik form
  const { data } = Form();

  //if menu is not available, rediret user to homepage
  try {
    if (menu.length > 0) {
    };
  } catch (e) {
    return <Redirect to='/'></Redirect>
  }

  //separate items by type
  const types = (menuType) => {
    //iterate through menu array
    return menu.map((item, key) => {
      const type = item.type;
      //check item type
      if (type === menuType) {
        //format number
        const price = parseFloat(item.price).toFixed(2);      
        //iterate through ingredients array
        const ingredients = item.ingredients;
        let ingList = '';
        ingredients.map((ing, index) => {
          return ingList += ing + ", ";
        });
        //format allergens
        let allergens = "";
        if (item.allergens[0]) {
          allergens = `(Allergens: ${item.allergens})`
        }
        //return table
        return (
          <tr key={key}>
            {/* collect quantity for the item  */}
            <td><input name='quantity' type='number' min='0' style={{ width: '40px' }}
              value={data.values.quantity[key]} onChange={data.handleChange}
            ></input> </td>
            {/* display item number  */}
            <td>{item.number}</td>
            <td style={{ textAlign: 'left' }} >
              <div>
                {/* display item description and allergens  */}
                {item.dish} {allergens}
              </div>
              <div style={{ fontStyle: 'italic' }}>
                {/* display item ingredients  */}
                (Ingredients: {ingList})
              </div>
            </td>
            {/* display item price  */}
            <td>{price}</td>
            {/* add item button  */}
            <td><button style={{fontWeight: 'bold'}} type='submit' 
            onClick={() => takeaway(item.number, item.dish, data.values.quantity, item.price, item._id)}>
              Add item</button></td>
          </tr>
        )
      }
    })
  }

  const takeaway = async (item, dish, quantity, price, id) => {
    //alert if no quantity is set
    if (!quantity) {
      alert('Error: Quantity is missing!')
    
    } else {
      //check if there is already any item in the basket
      let orders = await JSON.parse(localStorage.getItem('orders'));

      if (orders == null) {
        orders = []; //if no data found, set an empty array
      }

      //calculate total;
      const total = quantity * price;
      //create an order object
      const order = { id: id, item: item, dish: dish, quantity: quantity, price: price, total: total }
      //push order to the array
      orders.push(order);
      //store the updated order
      localStorage.setItem('orders', JSON.stringify(orders));
      //send message to user
      alert('Item added to the basket!');

    }

  }


  return (
    <Container>
      <Header />
      <Content>
        {/* display menu table  */}
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
          {/* display items by type  */}
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