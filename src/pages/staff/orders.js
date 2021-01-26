import React, { useState, createContext } from 'react';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Table, ButtonGroup, FormCheck } from 'react-bootstrap';
import { FiEye } from 'react-icons/fi';
import api from '../../services/api';
import { Link } from 'react-router-dom';


const Order = (props) => {
    const id = props.id;
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState([]);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const getOrder = async () => {
        const result = await api.get(`/delivery/${id}`);
        setOrders(result.data.deliveryList);
        localStorage.removeItem('print');
        handleShow();
    }

    const HandleOrders = () => {
        return orders.map((object, key) => {
            const order = object.orders;
            const price = object.price;
            const comment = object.comment;

            const itemList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.item}</tr>);
            });

            const dishList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.dish}</tr>);
            });

            const quantList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.quantity}</tr>);
            });

            return (
                <tbody key={key}>
                    <tr>
                        <td>{itemList}</td>
                        <td>{dishList}</td>
                        <td>{quantList}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>€ {price}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>{comment}</td>
                        <td></td>
                    </tr>
                </tbody>
            )
        })
    }

    const HandleEmptyBasket = () => {
        return (<tr>
            <td></td>
            <td></td>
        </tr>)
    }

    const printOrder = async () => {
        const print = await localStorage.setItem('print', JSON.stringify(orders));
        return print;
    }

    return (
        <>
            <FormCheck type="checkbox" onChange={() => getOrder()} style={{ marginLeft: '5px', width: '100%', height: '10%' }}>
                </FormCheck>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Order:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive >
                        <thead>
                            <tr>
                                <th style={{ width: '50px' }}>Item</th>
                                <th style={{ width: '300px' }}>Description</th>
                                <th style={{ width: '50px' }}>Quantity</th>
                            </tr>
                        </thead>

                        {orders && orders.length > 0 ? <HandleOrders /> : <HandleEmptyBasket />}

                    </Table>
                    <p></p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: '#D3D3D3' }}></p>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant="primary" style={{ marginRight: '50px' }} onClick={printOrder}><Link to='/invoice' 
                        style={{color: '#fff'}}> Invoice</Link>
                             </Button>
                        <Button variant="dark" onClick={handleClose} style={{ marginRight: '50px' }} >
                            Close </Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Order;
