import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import { Modal, Button, Table, ButtonGroup, FormCheck } from 'react-bootstrap';
import api from '../../services/api';
import { Link } from 'react-router-dom';


const Order = (props) => {
    //collect order ID and type 
    const id = props.id;
    const type = props.type;

    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState([]);

    //set modal function
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const getOrder = async () => {
        let result;
        //filter order type
        if (type === 'delivery') {
            //call API sending order ID
            result = await api.get(`/delivery/${id}`);
            console.log(result);
            //set orders
            setOrders(result.data.deliveryList);
        }
        if (type === 'takeaway') {
            //call API sending order ID
            result = await api.get(`/takeaway/${id}`);
            //set orders
            setOrders(result.data.takeawayList);
        }

        //clean last invoice
        localStorage.removeItem('print');
        //open modal at the end
        handleShow();
    }

    const HandleOrders = () => {
        //iterate through orders array 
        return orders.map((object, key) => {
            const order = object.orders;
            const total = object.total;
            const comment = object.comment;

            //iterate through order array to collect items 
            const itemList = order.map((value, items) => {
                return (
                    <p key={items}>{value.item}</p>);
            });
            //iterate through order array to collect dishes 
            const dishList = order.map((value, dishes) => {
                return (
                    <p key={dishes}>{value.dish}</p>);
            });
            //iterate through order array to collect quantity 
            const quantList = order.map((value, quant) => {
                return (
                    <p key={quant}>{value.quantity}</p>);
            });
            //iterate through order array to collect prices 
            const priceList = order.map((value, prices) => {
                //format numbers
                const price = parseFloat(value.price).toFixed(2);
                return (
                    <p key={prices}>{price}</p>);
            });
            //return table
            return (
                <tbody key={key}>
                    <tr>
                        <td>{itemList}</td>
                        <td>{dishList}</td>
                        <td>{quantList}</td>
                        <td>{priceList}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total €</td>
                        <td>{total}</td>
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
        //return empty table when there is no order
        return (
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>)
    }

    const printOrder = async () => {
        //create invoice to be printed
        const print = await localStorage.setItem('print', JSON.stringify(orders));
        return print;
    }

    return (
        <>
            {/* checkbox to call modal  */}
            <FormCheck type="checkbox" onChange={() => getOrder()} style={{ marginLeft: '5px', width: '100%', height: '10%' }}>
            </FormCheck>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Order:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* display table  */}
                    <Table responsive >
                        <thead>
                            <tr>
                                <th style={{ width: '50px' }}>Item</th>
                                <th style={{ width: '300px' }}>Description</th>
                                <th style={{ width: '50px' }}>Quantity</th>
                                <th style={{ width: '50px' }}>Price (€)</th>
                            </tr>
                        </thead>
                        {/* display table only when order exists  */}
                        {orders && orders.length > 0 ? <HandleOrders /> : <HandleEmptyBasket />}
                    </Table>
                    <p></p>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        {/* delete invoice button  */}
                        <Button variant="primary" style={{ marginRight: '50px' }} onClick={printOrder}><Link to='/invoice'
                            style={{ color: '#fff' }}> Invoice</Link>
                        </Button>
                        {/* delete close button  */}
                        <Button variant="dark" onClick={handleClose} style={{ marginRight: '50px' }} >
                            Close </Button>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Order;
