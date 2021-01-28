import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import { Modal, Button, Table, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { RiShoppingBasketLine } from 'react-icons/ri';
import api from '../../services/api';


const Basket = () => {
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState();
    const [user, setUser] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getOrders = async () => {
        let order = await JSON.parse(localStorage.getItem('orders'));
        setOrders(order);
        if (order) {
            const total = order.reduce(function (tot, arr) {
                return setTotalPrice(parseFloat(tot + arr.total).toFixed(2));
            }, 0);
        }
        const user = await JSON.parse(sessionStorage.getItem('user'));
        if(user) {
            setUser(user);
        }
        handleShow();
    }

    const getLastTakeaway = async () => {
        setOrders([]);
        setTotalPrice(null);
        const order = await api.get(`/takeaway/lastorder/${user._id}`);
        setOrders(order.data.order);
        setTotalPrice(order.data.total);
        handleShow();

    }


    const getLastDelivery = async () => {
        setOrders([]);
        setTotalPrice(null);
        const order = await api.get(`/delivery/lastorder/${user._id}`);
        setOrders(order.data.order);
        setTotalPrice(order.data.total);
        handleShow();
    }

    const HandleOrders = () => {
        return orders.map((order, key) => {
            const price = parseFloat(order.price).toFixed(2);
            let total = parseFloat(order.total).toFixed(2);
            if (isNaN(total)) {
                total = parseFloat(price * order.quantity).toFixed(2);
            }
            return (
                <tr key={key}>
                    <td>{order.item}</td>
                    <td>{order.dish}</td>
                    <td>{order.quantity}</td>
                    <td>{price}</td>
                    <td>{total}</td>
                </tr>
            )
        })
    }

    const HandleEmptyBasket = () => {
        return (
            <tbody>
                <tr>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>)
    }

    const deleteOrder = () => {
        localStorage.removeItem('orders');
        setOrders(null);
        setTotalPrice(null);
    }

    return (
        <>
            <Button variant="primary" onClick={getOrders}>
                <RiShoppingBasketLine style={{ marginBottom: '3px' }} />  Basket
        </Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Order:</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table responsive >
                        <thead>
                            <tr>
                                <th style={{ width: '80px' }}>Item</th>
                                <th style={{ width: '200px' }}>Description</th>
                                <th style={{ width: '80px' }}>Quantity</th>
                                <th style={{ width: '100px' }}>Price (€)</th>
                                <th style={{ width: '100px' }}>Total (€)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders && orders.length > 0 ? <HandleOrders /> : <HandleEmptyBasket />}
                        </tbody>
                    </Table>
                    <p></p>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', backgroundColor: '#D3D3D3' }}>Final Total:  €  {totalPrice} </p>
                </Modal.Body>
                <Modal.Footer>
                    <ButtonGroup>
                        <Button variant="danger" onClick={deleteOrder} style={{ marginRight: '50px' }}>
                            Delete Order</Button>
                        <DropdownButton variant="info" title='See Last Order' style={{ marginRight: '50px' }} disabled={user ? false : true}>
                            <Dropdown.Item> <Button variant="info" onClick={getLastTakeaway}> Takeout </Button></Dropdown.Item>
                            <Dropdown.Item> <Button variant="info" onClick={getLastDelivery}> Delivery </Button></Dropdown.Item>
                        </DropdownButton>
                        <DropdownButton variant="primary" title='Checkout' disabled={orders ? false : true}>
                            <Dropdown.Item> <Link to='/takeout'> Takeout </Link></Dropdown.Item>
                            <Dropdown.Item> <Link to='/delivery'> Delivery </Link></Dropdown.Item>
                        </DropdownButton>
                    </ButtonGroup>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Basket;
