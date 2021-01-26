import React, { useEffect } from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import { Link } from "react-router-dom";
import Header from '../../styles/header';



const Takeaway = () => {

    let user;

    let order;

    const { data, submit } = Form();

    useEffect(() => {

        user = JSON.parse(sessionStorage.getItem('user'));
        order = JSON.parse(localStorage.getItem('orders'));

        if (!order) {
            order = JSON.parse(localStorage.getItem('lastOrders'));
        }

        if (user.status === 'costumer') {
            data.setFieldValue('user', user.email);
            data.setFieldValue('name', user.name);
            data.setFieldValue('email', user.email);
            if (user.phoneNumber) {
                data.setFieldValue('phoneNumber', user.phoneNumber);
            }
        }

        data.setFieldValue('user', user._id);
        data.setFieldValue('lastOrder', order);

        reduceOrder();

    }, [order]);

    const reduceOrder = () => {
        const pair = []
        order.map((key) => {
            const dish = key.id;
            const quantity = key.quantity;
            pair.push({ dish: dish, quantity: quantity });
            return pair;
        });

        return data.setFieldValue('order', pair);
    }


    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
    }
    const FORMAT = 'dd/MM/yyyy';


    function handleDayChange(day) {
        let selectedDay = new Date(day);
        selectedDay = selectedDay.getDate() + '/' + selectedDay.getMonth() + 1 + '/' + selectedDay.getFullYear();
        data.setFieldValue('date', selectedDay);
    }

    return (
        <>
            <Header />
            <Container>
                <Content>
                    <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000', marginTop: '60px' }}>
                        {submit !== null &&
                            <p>{submit ? submit : null}</p>
                        }
                        {data.errors.user && data.touched.user && (
                            <p>{data.errors.user}</p>)}
                        {data.errors.order && data.touched.order && (
                            <p>{data.errors.order}</p>)}
                    </div>
                    <form onSubmit={data.handleSubmit}>
                        <h1>Ordering Delivery: </h1>
                        <DayPickerInput value={data.values.date} style={{ width: '100%' }}
                            formatDate={formatDate} format={FORMAT} dayPickerProps={{
                                modifiers: {
                                    disabled: [{ daysOfWeek: [2] }, { before: new Date() }]
                                }
                            }}
                            inputProps={{ readOnly: true }} onDayChange={handleDayChange} />
                        {data.errors.date && data.touched.date && (
                            <p>{data.errors.date}</p>)}
                        <input name='name' type='text' placeholder='Name' value={data.values.name} onChange={data.handleChange} />
                        {data.errors.name && data.touched.name && (
                            <p>{data.errors.name}</p>)}
                        <input name='phoneNumber' type='text' placeholder='Phone number' value={data.values.phoneNumber} onChange={data.handleChange} />
                        {data.errors.phoneNumber && data.touched.phoneNumber && (
                            <p>{data.errors.phoneNumber}</p>)}
                        <input name='address' type='text' placeholder='Address' value={data.values.address} onChange={data.handleChange} />
                        {data.errors.address && data.touched.address && (
                            <p>{data.errors.address}</p>)}
                        <input name='comment' type='text' placeholder='Comment' value={data.values.comment} onChange={data.handleChange} />
                        <button type='submit'> Order </button>
                    </form>
                    <Link to='/menu' style={{ color: '#0000FF' }}>Back to Menu</Link>
                </Content>
                <Background />
            </Container>

        </>
    )
};

export default Takeaway;