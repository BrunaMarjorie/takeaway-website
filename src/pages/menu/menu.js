import React, { useEffect, useState } from 'react';
import { Container, Content, Title } from '../menu/style';
import 'bootstrap-css-only/css/bootstrap.min.css';
import SearchItem from './search';
import { Table, FormCheck } from 'react-bootstrap';
import MenuList from './data';
import api from '../../services/api';


const Menu = () => {

  useEffect(() => {
    getMenu();

  }, []);

  const [menu, setMenu] = useState([]);

  async function getMenu() {
    let err;
    try {
      const res = await api.get('/menu');
      setMenu(res.data.Menu);
    } catch (e) {
      if (e.response) {
        err = e.response.data;
        const { error } = err;
        setMenu(error);
      } else {
        setMenu("Some error has occured. Please try again.");
      }
    }
  }


  return (
    <Container>
      <Content>
        <Table responsive>
          <thead>
            <tr>
              <th style={{ width: '5px' }}></th>
              <th style={{ width: '5px' }}>Item</th>
              <th style={{ width: '30px' }}>Description</th>
              <th style={{ width: '5px' }}>Price (€)</th>
            </tr>
          </thead>
          <tbody>
            <Title>
              <td></td>
              <td></td>
              <td > Soups </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'soup') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Starters </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'starter') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Satay </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'satay') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Curry </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'curry') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Rice </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'rice') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Chow Mein </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'mein') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
            <Title>
              <td></td>
              <td></td>
              <td > Sides </td>
              <td></td>
            </Title>
            {menu.map((item, key) => {
              const type = item.type;
              if (type === 'side') {
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
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td style={{ textAlign: 'left' }}>
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
            })}
          </tbody>
        </Table>
      </Content>
    </Container>
  )
};

export default Menu;