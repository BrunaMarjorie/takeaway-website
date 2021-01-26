import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import { Modal, Button, Table, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import { RiShoppingBasketLine } from 'react-icons/ri';


const Basket = () => {
    const [show, setShow] = useState(false);
    const [orders, setOrders] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

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
        handleShow();
    }

    const getLastOrder = async () => {
        let order = await JSON.parse(localStorage.getItem('lastOrders'));
        setOrders(order);
        if (order) {
            const total = order.reduce(function (tot, arr) {
                return setTotalPrice(parseFloat(tot + arr.total).toFixed(2));
            }, 0);
        }
        handleShow();
    }

    const HandleOrders = () => {
         return orders.map((order, key) => {
                const price = parseFloat(order.price).toFixed(2);
                const total = parseFloat(order.total).toFixed(2);
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
        return (<tr>
            <td></td>
            <td></td>
        </tr>)
    }

    const deleteOrder = () => {
        localStorage.removeItem('orders');
        setOrders(null);
        setTotalPrice(null);
    }

    return (
        <>
            <Button variant="primary" onClick={getOrders}>
                <RiShoppingBasketLine style={{ marginBottom: '5px' }} />  See Basket
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
                    <Button variant="danger" onClick={deleteOrder} style={{marginRight: '50px'}}>
                        Delete Order</Button>
                    <Button variant="dark" onClick={getLastOrder} style={{marginRight: '50px'}} >
                        See Last Order </Button>
                    <DropdownButton variant="primary" title='Checkout' disabled={ orders ? false : true}>
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
