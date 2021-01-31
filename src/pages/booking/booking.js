import React, { useEffect } from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import Header from '../../styles/header';
import { Row } from 'react-bootstrap';



const Bookings = () => {

    //collect user information to display 
    const user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user);

    //formik form
    const { data, submit } = Form();

    useEffect(() => {

        //if user is a customer, set information to be displayed
        if (user.status === 'customer') {
            data.setFieldValue('name', user.name);
            data.setFieldValue('email', user.email);
            data.setFieldValue('phoneNumber', user.phoneNumber);
        }

        //set userID for any type of customer
        data.setFieldValue('user', user._id);
    }, []);


    //set date format
    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
    }
    const FORMAT = 'dd/MM/yyyy';


    function handleDayChange(day) {
        //collect day selected, set format and pass on to formik form
        let selectedDay = new Date(day);
        selectedDay = selectedDay.getFullYear() + '/' + selectedDay.getMonth() + 1 + '/' + selectedDay.getDate();
        data.setFieldValue('date', selectedDay);
    }

    console.log(data);

    return (
        <Container>
            <Row >
                <Header />
            </Row>
            <Background />
            <Content>
                {/* display loading message and errors  */}
                <div style={{ textAlign: 'center', fontSize: '16px', fontWeight: 'bold', color: '#8B0000' }}>
                    {submit !== null &&
                        <p>{submit ? submit : null}</p>
                    }
                    {/* display error message if no user is logged in  */}
                    {data.errors.user && data.touched.user && (
                        <p>{data.errors.user}</p>)}
                </div>
                <form onSubmit={data.handleSubmit}>
                    <h1>Booking table: </h1>
                    {/* react-day-picker library  */}
                    <DayPickerInput placeholder='Date' style={{ width: '100%' }}
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
                    {/* select options for time  */}
                    <select name='time'
                        value={data.values.time}
                        onChange={data.handleChange}
                        onBlur={data.handleBlur}>
                        <option value='' label='Time' />
                        <option value='16' label='16h' />
                        <option value='18' label='18h' />
                        <option value='20' label='20h' />
                    </select>
                    {/* display errors messages  */}
                    {data.errors.time && data.touched.time && (
                        <p>{data.errors.time}</p>)}
                    {/* collect number of people. Minimum and maximum filters  */}
                    <input name='number' type='number' min='1' max='16'
                        placeholder='Number of people' value={data.values.number}
                        onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.number && data.touched.number && (
                        <p>{data.errors.number}</p>)}
                    {/* collect customer name  */}
                    <input name='name' type='text' placeholder='Name' value={data.values.name} onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.name && data.touched.name && (
                        <p>{data.errors.name}</p>)}
                    {/* collect customer email  */}
                    <input name='email' type='text' placeholder='Email' value={data.values.email} onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}
                    {/* collect customer phone number  */}
                    <input name='phoneNumber' type='text' placeholder='Phone number' value={data.values.phoneNumber} onChange={data.handleChange} />
                    {/* display errors messages  */}
                    {data.errors.phoneNumber && data.touched.phoneNumber && (
                        <p>{data.errors.phoneNumber}</p>)}
                    <button type='submit'> Book </button>
                </form>
            </Content>
        </Container>
    )
};

export default Bookings;