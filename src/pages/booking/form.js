import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import 'react-day-picker/lib/style.css';


const Calendar = (callback) => {
    const [submit, setSubmit] = useState(false);

    //set inicial values
    const data = useFormik({
        initialValues: {
            date: '',
            time: '',
            number: '',
            name: '',
            email: '',
            phoneNumber: '',
            user: '',
        },

        //validate inputs
        validationSchema: Yup.object().shape({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            number: Yup.number().required('Number of people is required'),
            name: Yup.string().required('Name is required').min(3, 'At least 3 characters'),
            email: Yup.string().required('Email is required').email('Invalid format'),
            phoneNumber: Yup.number().required('Phone number is required'),

        }),

        onSubmit: values => {
            //create booking if all information is correctly passed
            console.log('here');
            addBooking();
        }

    });

    const addBooking = async () => {
        //set loading message
        setSubmit('Loading...');
        let err;
        try {
            //call API
            const res = await api.post(`/bookings`, data.values);
            //set message if successful
            setSubmit("Table successfully booked.");
        } catch (e) {
            if (e.response) {
                err = e.response.data;
                const { error } = err;
                //set error message
                setSubmit(error);
            } else {
                //set error message
                setSubmit("Some error has occured. Please try again.");
            }
        }
    };


    return {
        data,
        submit
    }

}

export default Calendar;