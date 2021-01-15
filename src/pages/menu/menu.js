import React, { useEffect, useState } from 'react';
import { Container, Content, Search } from '../menu/style';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBCol, MDBFormInline } from "mdbreact";
import SearchItem from './search';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';
import { Table, FormCheck } from 'react-bootstrap';



const Menu = () => {

  const { data } = SearchItem();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getMenu();
  }, []);

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
  };

  return (
    <Container>
      <Search>
        <MDBCol md="6">
          <MDBFormInline className="md-form">
            <MDBBtn onClick={data.handleSubmit} > <FaSearch /> </MDBBtn>
            <input className="form-control form-control-sm ml-3 w-75" name='search' type="text" placeholder="Search" aria-label="Search" value={data.values.search} onChange={data.handleChange} />
            {data.errors.search && data.touched.search && (
              <p>{data.errors.search}</p>)}
          </MDBFormInline>
        </MDBCol>
      </Search>
      <Content>
        <Table responsive style={{ maxWidth: '700px' }} >
          <thead>
            <tr>
              <th></th>
              <th>Item</th>
              <th style={{ width: '500px' }}>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td > Soups </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Starters </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Satay </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Curry </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Rice </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Chow Mein </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
                        (Ingredients: {ingList})
                      </div>
                    </td>
                    <td>{price}</td>
                  </tr>
                )
              }
            })}
            <tr>
              <td></td>
              <td></td>
              <td > Sides </td>
              <td></td>
            </tr>
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
                if (item.allergens[0] ) {
                    allergens = `(Allergens: ${item.allergens})`
                }
                return (
                  <tr key={key}>
                    <td> <FormCheck type='checkbox'>
                    </FormCheck> </td>
                    <td>{item.number}</td>
                    <td color={'darkblue'}>
                      <div>
                        {item.dish} {allergens}
                      </div>
                      <div style={{fontStyle:'italic'}}>
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