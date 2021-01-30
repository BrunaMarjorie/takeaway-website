import React, { useEffect } from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import { Link, Redirect  } from "react-router-dom";
import Header from '../../styles/menuHeader';




const Takeaway = () => {

    //collect user information to display 
    const user = JSON.parse(sessionStorage.getItem('user'));
    //collect order details 
    const order = JSON.parse(localStorage.getItem('orders'));
    //formik form
    const { data, submit } = Form();

    useEffect(() => {
        //if user is a customer, set information to be displayed
        if (user.status === 'customer') {
            data.setFieldValue('name', user.name);
            data.setFieldValue('email', user.email);
            data.setFieldValue('phoneNumber', user.phoneNumber);
        }

        data.setFieldValue('user', user._id);

        if (order) {
            reduceOrder();
        } else {
            return <Redirect to='/'/>
        }        

    }, []);

    //get items in the order to be sent to the API
    const reduceOrder = () => {
        const pair = [];
        //only dish and quantity goes to the API
        order.map((key) => {
            const dish = key.id;
            const quantity = key.quantity;
            pair.push({ dish: dish, quantity: quantity });
            return pair;
        });

        return data.setFieldValue('order', pair);
    }

    //set date format
    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
    }
    const FORMAT = 'dd/MM/yyyy';


    function handleDayChange(day) {
        //collect day selected, set format and pass on to formik form
        let selectedDay = new Date(day);
        selectedDay = selectedDay.getDate() + '/' + selectedDay.getMonth() + 1 + '/' + selectedDay.getFullYear();
        data.setFieldValue('date', selectedDay);
    }

    return (
        <Container>
            <Header />
            <Background />
            <Content>
                {/* display loading message and errors  */}
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000', marginTop: '60px' }}>
                    {submit !== null &&
                        <p>{submit ? submit : null}</p>
                    }
                    {/* display error message if no user is logged in  */}
                    {data.errors.user && data.touched.user && (
                        <p>{data.errors.user}</p>)}
                </div>
                <form onSubmit={data.handleSubmit}>
                    <h1>Ordering Takeaway: </h1>
                    {/* react-day-picker library  */}
                    <DayPickerInput value={data.values.date} style={{ width: '100%' }}
                        formatDate={formatDate} format={FORMAT} dayPickerProps={{
                            modifiers: {
                                //disable Tuesdays and days before present day
                                disabled: [{ daysOfWeek: [2] }, { before: new Date() }]
                            }
                        }}
                        inputProps={{ readOnly: true }} onDayChange={handleDayChange} />
                    {/* display error messages  */}
                    {data.errors.date && data.touched.date && (
                        <p>{data.errors.date}</p>)}
                    {/* collect customer name  */}
                    <input name='name' type='text' placeholder='Name' value={data.values.name} onChange={data.handleChange} />
                    {/* display error messages  */}
                    {data.errors.name && data.touched.name && (
                        <p>{data.errors.name}</p>)}
                    {/* collect customer phone number  */}
                    <input name='phoneNumber' type='text' placeholder='Phone number' value={data.values.phoneNumber} onChange={data.handleChange} />
                    {/* display error messages  */}
                    {data.errors.phoneNumber && data.touched.phoneNumber && (
                        <p>{data.errors.phoneNumber}</p>)}
                    {/* collect comment in the order  */}
                    <input name='comment' type='text' placeholder='Comment' value={data.values.comment} onChange={data.handleChange} />
                    <button type='submit'> Order </button>
                </form>
                <Link to='/menu' style={{ color: '#0000FF' }}>Back to Menu</Link>
            </Content>
        </Container>
    )
};

export default Takeaway;