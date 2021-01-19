import React from 'react';
import { Background, Container, Content } from './style';
import Form from './form';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import dateFnsFormat from 'date-fns/format';
import { Redirect } from "react-router-dom";


const Bookings = () => {

   
    const { data, submit } = Form();

    function formatDate(date, format, locale) {
        return dateFnsFormat(date, format, { locale });
    }
    const FORMAT = 'dd/MM/yyyy';


    function handleDayChange(day) {
        let selectedDay = new Date (day);
        selectedDay = selectedDay.getUTCFullYear()+'/'+selectedDay.getMonth()+1+'/'+selectedDay.getDate();
        data.setFieldValue('date', selectedDay);
    }

    return (
        <Container>
            <Background/>
            <Content>
                <form onSubmit={data.handleSubmit}>
                    <h1>Booking table: </h1>
                    <DayPickerInput placeholder='Date' style={{ width: '100%' }}
                        formatDate={formatDate} format={FORMAT} dayPickerProps={{
                            modifiers: {
                                disabled: [{ daysOfWeek: [2] }, { before: new Date() }]
                            }
                        }}
                        inputProps={{ readOnly: true }} onDayChange={handleDayChange} />
                    {data.errors.date && data.touched.date && (
                        <p>{data.errors.date}</p>)}
                    <select name='time'
                        value={data.values.time}
                        onChange={data.handleChange}
                        onBlur={data.handleBlur}>
                        <option value='' label='Time' />
                        <option value='16' label='16h' />
                        <option value='18' label='18h' />
                        <option value='20' label='20h' />
                    </select>
                    {data.errors.time && data.touched.time && (
                        <p>{data.errors.time}</p>)}
                    <input name='number' type='number' min='1' max='16'
                        placeholder='Number of people' value={data.values.number}
                        onChange={data.handleChange} />
                    {data.errors.number && data.touched.number && (
                        <p>{data.errors.number}</p>)}
                    <input name='name' type='text' placeholder='Name' value={data.values.name} onChange={data.handleChange} />
                    {data.errors.name && data.touched.name && (
                        <p>{data.errors.name}</p>)}
                    <input name='email' type='text' placeholder='Email' value={data.values.email} onChange={data.handleChange} />
                    {data.errors.email && data.touched.email && (
                        <p>{data.errors.email}</p>)}
                    <input name='phoneNumber' type='text' placeholder='Phone number' value={data.values.phoneNumber} onChange={data.handleChange} />
                    {data.errors.phoneNumber && data.touched.phoneNumber && (
                        <p>{data.errors.phoneNumber}</p>)}
                    <button type='submit'> Book </button>
                </form>
            </Content>
        </Container>
    )
};

export default Bookings;