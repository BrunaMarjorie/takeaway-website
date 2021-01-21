import React, { useState } from 'react';
import { Bookings, Container, ContainerSec, Content, Takeaway } from './style';
import Form from './form';
import 'react-day-picker/lib/style.css';
import Header from '../../styles/header';
import { Row, Col, Table } from 'reactstrap';
import api from '../../services/api';




const Staff = () => {

    const { data, submit } = Form();

    const [bookings, setBookings] = useState(null);
    const [takeaways, setTakeaways] = useState(null);
    const [deliveries, setDeliveries] = useState(null);


    const bookingsList = async () => {
        const result = await api.get('/bookings');
        setBookings(result.data.bookings);
    }

    const takeawayList = async () => {
        const result = await api.get('/takeaway');
        setTakeaways(result.data.takeawayList);
    }

    const deliveryList = async () => {
        const result = await api.get('/delivery');
        console.log(result);
        setDeliveries(result.data.deliveryList);
    }

    const retrieveBooking = () => {
        setBookings(null);
    }

    const retrieveTakeaway = () => {
        setTakeaways(null);
    }

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
                                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000' }}>
                                    {submit !== null &&
                                        <p>{submit ? submit : null}</p>
                                    }
                                    {data.errors.user && data.touched.user && (
                                        <p>{data.errors.user}</p>)}
                                </div>
                                <form onSubmit={data.handleSubmit}>
                                    <h1>Time: </h1>
                                    <label> Takeaway time:
                                <select name='time'
                                            value={data.values.time}
                                            onChange={data.handleChange}
                                            onBlur={data.handleBlur}>
                                            <option value='15' label='15min' />
                                            <option value='20' label='20min' />
                                            <option value='25' label='25min' />
                                            <option value='30' label='30min' />
                                            <option value='35' label='35min' />
                                            <option value='40' label='40min' />
                                            <option value='45' label='45min' />
                                            <option value='50' label='50min' />
                                            <option value='55' label='55min' />
                                            <option value='60' label='60min' />
                                        </select>
                                    </label>
                                    <label>
                                        Delivery time:
                            <select name='time'
                                            value={data.values.time}
                                            onChange={data.handleChange}
                                            onBlur={data.handleBlur}>
                                            <option value='30' label='30min' />
                                            <option value='40' label='40min' />
                                            <option value='45' label='45min' />
                                            <option value='50' label='50min' />
                                            <option value='60' label='60min' />
                                            <option value='80' label='80min' />
                                            <option value='90' label='90min' />
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
                                        <button type='button' onClick={bookingsList}>
                                            Bookings </button>
                                        <button type='button' onClick={retrieveBooking}>
                                            Retrieve </button>

                                    </Row>

                                    <div style={{ overflow: 'auto', maxHeight: '200px' }}>
                                        <Table style={{ maxWidth: '350px', marginLeft: '10px' }}>
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '20px' }}>Name</th>
                                                    <th style={{ width: '5px' }}>Date</th>
                                                    <th style={{ width: '5px' }}>Time</th>
                                                    <th style={{ width: '5px' }}>People</th>
                                                </tr>
                                            </thead>
                                            {bookings &&
                                                bookings.map((booking, index) => {
                                                    let date = new Date(booking.date);
                                                    let time;
                                                    time = date.getHours();
                                                    date = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
                                                    return (
                                                        <tbody>
                                                            <tr key={index}>
                                                                <th >{booking.name}</th>
                                                                <th >{date}</th>
                                                                <th >{time}h</th>
                                                                <th >{booking.numPeople}</th>
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
                                <button type='button' onClick={takeawayList}>
                                    Orders </button>
                                <button type='button' onClick={retrieveTakeaway}>
                                    Retrieve </button>
                            </Row>
                            <div style={{ overflow: 'auto', maxHeight: '550px' }}>
                                <Table style={{ maxWidth: '350px' }}>
                                    <thead>
                                        <tr style={{ position: 'sticky' }}>
                                            <th style={{ width: '20px' }}>Name</th>
                                            <th style={{ width: '5px' }}>Time</th>
                                            <th style={{ width: '5px' }}>Paid</th>
                                        </tr>
                                    </thead>
                                    {takeaways &&
                                        takeaways.map((takeaway, key) => {
                                            return (
                                                <tbody>
                                                    <tr key={key}>
                                                        <th >{takeaway.costumer}</th>
                                                        <th >{takeaway.time}</th>
                                                        <th >{takeaway.paid}</th>

                                                    </tr>
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
                                <button type='button' onClick={deliveryList}>
                                    Orders </button>
                                <button type='button' onClick={retrieveDelivery}>
                                    Retrieve </button>
                            </Row>
                            <div style={{ overflow: 'auto', maxHeight: '550px' }}>
                                <Table style={{ maxWidth: '350px' }}>
                                    <thead>
                                        <tr style={{ position: 'sticky' }}>
                                            <th style={{ width: '15px' }}>Address</th>
                                            <th style={{ width: '5px' }}>Time</th>
                                            <th style={{ width: '5px' }}>Paid</th>
                                        </tr>
                                    </thead>
                                    {deliveries &&
                                        deliveries.map((delivery, item) => {
                                            return (
                                                <tbody>
                                                    <tr key={item}>
                                                        <th >{delivery.address}</th>
                                                        <th >{delivery.time}</th>
                                                        <th >{delivery.paid}</th>

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