import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import 'react-day-picker/lib/style.css';


const Calendar = (callback) => {
    const [submit, setSubmit] = useState(false);

    const data = useFormik({
        initialValues: {
            date: '',
            time: '',
            number: '',
            name: '',
            email: '',
            phoneNumber: '',
        },

        validationSchema: Yup.object().shape({
            date: Yup.string().required('Date is required'),
            time: Yup.string().required('Time is required'),
            number: Yup.number().required('Number of people is required'),
            name: Yup.string().required('Name is required').min(3, 'At least 3 characters'),
            email: Yup.string().required('Email is required').email('Invalid format'),
            phoneNumber: Yup.number().required('Phone number is required'),
        }),

        onSubmit: values => {
            addBooking();
        }

    });

    const addBooking = async () => {
        let err;
        try {
            const res = await api.post('/bookings', data.values);
        } catch (e) {
            if (e.response) {
                err = e.response.data;
                const { error } = err;
                setSubmit(error);
            } else {
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