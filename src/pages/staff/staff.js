import React, { useState } from 'react';
import { Bookings, Container, ContainerSec, Content, Takeaway } from './style';
import Form from './form';
import 'react-day-picker/lib/style.css';
import Header from '../../styles/menuHeader';
import api from '../../services/api';
import Order from './orders';
import { Redirect } from 'react-router-dom';
import { Row, Col, Table } from 'react-bootstrap';


const Staff = () => {

    //formik form
    const { data } = Form();

    const [bookings, setBookings] = useState(null);
    const [takeaways, setTakeaways] = useState(null);
    const [deliveries, setDeliveries] = useState(null);

    //collect user information
    const user = JSON.parse(sessionStorage.getItem('user'));

    //collect waiting time information
    const waitingTime = async () => {
        const res = await api.get('/waitingTime');
        data.setFieldValue('takeaway', res.data.takeawayTime);
        data.setFieldValue('delivery', res.data.deliveryTime);
    }

    //redirect if user is a customer 
    if (user.status === 'customer') {
        return <Redirect to='/' />
    }

    //call API to get all the bookings
    const bookingsList = async () => {
        const result = await api.get('/bookings');
        setBookings(result.data.bookings);
    }

    //call API to get all the takeout orders
    const takeawayList = async () => {
        const result = await api.get('/takeaway');
        setTakeaways(result.data.takeawayList);
    }

    //call API to get all the delivery orders
    const deliveryList = async () => {
        const result = await api.get('/delivery');
        setDeliveries(result.data.deliveryList);
    }

    //close bookings view
    const retrieveBooking = () => {
        setBookings(null);
    }

    //close takeaway view
    const retrieveTakeaway = () => {
        setTakeaways(null);
    }

    //close delivery view
    const retrieveDelivery = () => {
        setDeliveries(null);
    }

    return (
        <>
            <Header />
            <Container>
                <Col>
                    <ContainerSec>
                        <Row>
                            <Content>
                                <form onSubmit={data.handleSubmit}>
                                    <h1>Time: </h1>
                                    <label> Takeaway time:
                                        {/* select waiting time for takeaway  */}
                                        <select name='takeaway'
                                            value={data.values.takeaway}
                                            onChange={data.handleChange}
                                            onBlur={data.handleBlur}>
                                            <option value='15min' label='15min' />
                                            <option value='20min' label='20min' />
                                            <option value='25min' label='25min' />
                                            <option value='30min' label='30min' />
                                            <option value='35min' label='35min' />
                                            <option value='40min' label='40min' />
                                            <option value='45min' label='45min' />
                                            <option value='50min' label='50min' />
                                            <option value='55min' label='55min' />
                                            <option value='60min' label='60min' />
                                        </select>
                                    </label>
                                    <label>
                                        Delivery time:
                                        {/* select waiting time for delivery  */}
                                        <select name='delivery'
                                            value={data.values.delivery}
                                            onChange={data.handleChange}
                                            onBlur={data.handleBlur}>
                                            <option value='30min' label='30min' />
                                            <option value='40min' label='40min' />
                                            <option value='45min' label='45min' />
                                            <option value='50min' label='50min' />
                                            <option value='60min' label='60min' />
                                            <option value='80min' label='80min' />
                                            <option value='90min' label='90min' />
                                        </select>
                                    </label>
                                    <button type='submit'> Update </button>
                                </form>
                            </Content>
                        </Row>
                        <Row>
                            <Bookings>
                                <form>
                                    <h1>Bookings </h1>
                                    <Row>
                                        {/* get bookings  */}
                                        <button type='button' onClick={bookingsList}>
                                            Bookings </button>
                                        {/* retrieve bookings  */}
                                        <button type='button' onClick={retrieveBooking}>
                                            Retrieve </button>

                                    </Row>
                                    {/* display bookings  */}
                                    <div style={{ overflow: 'auto', maxHeight: '200px' }}>
                                        <Table style={{ maxWidth: '350px', marginLeft: '10px', fontSize: '14px' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '20px' }}>Name</th>
                                                    <th style={{ width: '5px' }}>Date</th>
                                                    <th style={{ width: '5px' }}>Time</th>
                                                    <th style={{ width: '5px' }}>People</th>
                                                </tr>
                                            </thead>
                                            {/* iterate through bookings array  */}
                                            {bookings &&
                                                bookings.map((booking, index) => {
                                                    let date = new Date(booking.date);
                                                    let time;
                                                    time = date.getHours();
                                                    date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                                                    return (
                                                        <tbody>
                                                            <tr key={index}>
                                                                <th style={{ fontWeight: '300' }}>{booking.name}</th>
                                                                <th style={{ fontWeight: '300' }}>{date}</th>
                                                                <th style={{ fontWeight: '300' }}>{time}h</th>
                                                                <th style={{ fontWeight: '300' }}>{booking.numPeople}</th>
                                                            </tr>
                                                        </tbody>
                                                    );
                                                })}
                                        </Table>
                                    </div>
                                </form>
                            </Bookings>
                        </Row>
                    </ContainerSec>
                </Col>
                <Col>
                    <Takeaway>
                        <form>
                            <h1>Takeaway</h1>
                            <Row>
                                {/* get takeout orders  */}
                                <button type='button' onClick={takeawayList}>
                                    Orders </button>
                                {/* retrieve takeout orders  */}
                                <button type='button' onClick={retrieveTakeaway}>
                                    Retrieve </button>
                            </Row>
                            {/* display orders  */}
                            <div style={{ overflow: 'auto', maxHeight: '350px' }}>
                                <Table style={{ width: '100%', maxWidth: '500px', fontSize: '14px' }}>
                                    <thead>
                                        <tr style={{ position: 'sticky' }}>
                                            <th style={{ width: '50px' }}></th>
                                            <th style={{ width: '150px' }}>Name</th>
                                            <th style={{ width: '150px' }}>Time</th>
                                            <th style={{ width: '150px' }}>Paid</th>
                                        </tr>
                                    </thead>
                                    {/* iterate through takeaway array  */}
                                    {takeaways &&
                                        takeaways.map((takeaway, key) => {
                                            return (
                                                <tbody>
                                                    <tr key={key}>
                                                        <th><Order id={takeaway._id} type={'takeaway'} /></th>
                                                        <th style={{ fontWeight: '300' }}>{takeaway.customer}</th>
                                                        <th style={{ fontWeight: '300' }}>{takeaway.time}</th>
                                                        <th style={{ fontWeight: '300' }}>{takeaway.paid}</th>
                                                    </tr>
                                                    <tr></tr>
                                                </tbody>
                                            );
                                        })}
                                </Table>
                            </div>
                        </form>
                    </Takeaway>
                </Col>
                <Col>
                    <Takeaway>
                        <form>
                            <h1>Delivery</h1>
                            <Row>
                                {/* get delivery orders  */}
                                <button type='button' onClick={deliveryList}>
                                    Orders </button>
                                {/* retrieve delivery orders  */}
                                <button type='button' onClick={retrieveDelivery}>
                                    Retrieve </button>
                            </Row>
                            {/* display delivery orders  */}
                            <div style={{ overflow: 'auto', maxHeight: '350px' }}>
                                <Table style={{ width: '100%', maxWidth: '500px', fontSize: '14px' }}>
                                    <thead>
                                        <tr style={{ position: 'sticky' }}>
                                            <th style={{ width: '50px' }}></th>
                                            <th style={{ width: '150px' }}>Address</th>
                                            <th style={{ width: '150px' }}>Time</th>
                                            <th style={{ width: '150px' }}>Paid</th>
                                        </tr>
                                    </thead>
                                    {/* iterate through delivery array  */}
                                    {deliveries &&
                                        deliveries.map((delivery, item) => {
                                            return (
                                                <tbody>
                                                    <tr key={item}>
                                                        <th><Order id={delivery._id} type={'delivery'} /></th>
                                                        <th style={{ fontWeight: '300' }}>{delivery.address}</th>
                                                        <th style={{ fontWeight: '300' }}>{delivery.time}</th>
                                                        <th style={{ fontWeight: '300' }}>{delivery.paid}</th>

                                                    </tr>
                                                </tbody>
                                            );
                                        })}
                                </Table>
                            </div>
                        </form>
                    </Takeaway>
                </Col>
            </Container>
        </>
    )
};

export default Staff;