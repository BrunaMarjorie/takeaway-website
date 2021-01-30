import React, { useEffect, useState } from 'react';
import { Table, Col, Row } from 'react-bootstrap';
import { Container, Content, ContainerSec } from './style';


const Invoice = () => {

    const [invoice, setInvoice] = useState();

    //collect present date
    let date = new Date();
    date = date.getDate() + '/' + date.getMonth() + 1 + '/' + date.getFullYear();


    //generate invoice
    useEffect(() => {
        getInvoice();

    }, []);


    const getInvoice = async () => {
        //collect invoice details
        const print = JSON.parse(localStorage.getItem('print'));
        setInvoice(print);
    }

    function PrintOrder() {
        //iterate through invoice array 
        return invoice.map((value, key) => {
            const order = value.orders;
            //iterate through order array to collect items
            const itemList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.item}</tr>);
            });
            //iterate through order array to collect dishes
            const dishList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.dish}</tr>);
            });
            //iterate through order array to collect quantities
            const quantList = order.map((value, key) => {
                return (
                    <tr key={key}>{value.quantity}</tr>);
            });
            //iterate through order array to collect prices
            const priceList = order.map((value, key) => {
                //format numbers
                const price = parseFloat(value.price).toFixed(2);
                return (
                    <tr key={key}>{price}</tr>);
            });
            //return table
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
                        <td>€{value.total}</td>
                    </tr>
                </tbody>
            )

        });
    };


    function PrintCustomer() {
        //iterate through invoice array 
        return invoice.map((value, key) => {
            const address = value.address;
            //collect and display user details
            return (
                <div>
                    <p style={{ width: '350px' }}>Name: {value.customer}</p>
                    <p style={{ width: '350px' }}>Phone Number: {value.phoneNumber}</p>
                    {address !== null &&
                        <p style={{ width: '350px' }}>Address: {address ? address : null}</p>
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
                    {/* display restaurant details  */}
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
                            {/* if there is no invoice, display null  */}
                            {invoice && invoice.length > 0 ? <PrintCustomer /> : null}

                        </Col>
                    </Row>
                </Content>
                <Table>
                    {/* return table containing info  */}
                    <thead style={{ fontSize: '14px' }}>
                        <th style={{ width: '50px', textAlign: 'left' }}>Item</th>
                        <th style={{ width: '300px', textAlign: 'left' }}>Description</th>
                        <th style={{ width: '50px', textAlign: 'left' }}>Quantity</th>
                        <th style={{ width: '50px', textAlign: 'left' }}>Price</th>
                    </thead>
                    {invoice && invoice.length > 0 ? <PrintOrder /> : null}
                </Table>
                <p>Thank you for your business</p>
            </ContainerSec>
        </Container>
    )
}

export default Invoice;