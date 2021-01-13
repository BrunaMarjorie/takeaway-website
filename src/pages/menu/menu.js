import React, { useEffect, useState } from 'react';
import { Container, Content, Search } from '../menu/style';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBBtn, MDBCol, MDBFormInline } from "mdbreact";
import SearchItem from './search';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';



const Menu = () => {

  const { data, submit } = SearchItem();
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

  console.log(menu);

  const list = menu.map((item) =>
    <li key='item'>item</li>
  );

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
        <dl>
          <dt>Soups</dt>
          {menu.map((menu, key) => {
            return <button color={'darkblue'} key={key} title={menu.dish}
              //when pressed the button, an alert will be send 
              //with the collected information
              //onPress={() => Alert.alert(
                //place.place + ' on ' + place.date,
                //'\n Weather: ' + place.descr + ' (' + place.temp + '\u00b0) \n \n Local currency: '
                //+ place.currency + '\n \n Day rate: 1 USD = ' + place.rate + ' ' + place.iso_code

              //)
            >{menu.dish}</button>
          }
          )}
        </dl>
      </Content>
    </Container>
  )
};

export default Menu;