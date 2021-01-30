import React, { useEffect, useState } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Container, Content, ContainerSec } from './style';


const Invoice = () => {

    const [invoice, setInvoice] = useState();

    let date = new Date();
    date = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();

    useEffect(() => {
        getInvoice();

    }, []);


    const getInvoice = async () => {
        const print = JSON.parse(localStorage.getItem('print'));
        setInvoice(print);
    }

    function PrintOrder() {
        return invoice.map((value, key) => {
            const order = value.orders;
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

            const priceList = order.map((value, key) => {
                const price = parseFloat(value.price).toFixed(2);
                return (
                    <tr key={key}>{price}</tr>);
            });

            return (
                <tbody key={key} style={{ fontSize: '12px' }}>
                    <tr>
                        <td style={{ width: '50px', textAlign: 'left' }}>{itemList}</td>
                        <td style={{ width: '300px', textAlign: 'left' }}>{dishList}</td>
                        <td style={{ width: '50px', textAlign: 'left' }}>{quantList}</td>
                        <td style={{ width: '50px', textAlign: 'left' }}>{priceList}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>Total:</td>
                        <td>€{value.price}</td>
                    </tr>
                </tbody>
            )

        });
    };


    function PrintCustomer() {
        return invoice.map((value, key) => {
            const address = value.address;
            return (
                <div>
                    <p style={{width: '350px'}}>Name: {value.customer}</p>
                    <p style={{width: '350px'}}>Phone Number: {value.phoneNumber}</p>
                    {address !== null &&
                        <p style={{width: '350px'}}>Address: {address ? address : null}</p>
                    }
                </div>
            )

        });
    }





    return (
        <Container>
            <ContainerSec>
                <Row>
                    <h2> INVOICE</h2>
                </Row>
                <Row>
                    <h3>Santana's Restaurant</h3>
                </Row>
                <Row style={{ marginTop: '30px', fontSize: '12px', width: '700px' }}>
                    <Col style={{ marginRight: '200px' }}>
                        <p>Address: Somewhere</p>
                        <p>Phone number: (999) 9999-9999</p>
                    </Col>
                    <Col>
                        <p>Invoice #: </p>
                        <p>Date: {date}</p>
                    </Col>
                </Row>
                <Content>
                    <Row>
                        <Col>
                            <h3>Bill to:</h3>
                            {invoice && invoice.length > 0 ? <PrintCustomer /> : null }
                            
                        </Col>
                    </Row>
                </Content>
                <Table>
                    <thead style={{ fontSize: '14px' }}>
                        <th style={{ width: '50px', textAlign: 'left' }}>Item</th>
                        <th style={{ width: '300px', textAlign: 'left' }}>Description</th>
                        <th style={{ width: '50px', textAlign: 'left' }}>Quantity</th>
                        <th style={{ width: '50px', textAlign: 'left' }}>Price</th>
                    </thead>
                    {invoice && invoice.length > 0 ? <PrintOrder /> : null }
                </Table>
                <p>Thank you for your business</p>
            </ContainerSec>
        </Container>
    )
}

export default Invoice;