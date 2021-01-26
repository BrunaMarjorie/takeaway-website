import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import 'react-day-picker/lib/style.css';


const Form = (callback) => {

    const [submit, setSubmit] = useState(false);

    let today = new Date();

    today = today.getDate()+'/'+today.getMonth()+1+'/'+today.getFullYear();

    const data = useFormik({
        initialValues: {
            date: today,
            name: '',
            phoneNumber: '',
            address: '',
            comment: '',
            user: '',
            order: '',
            lastOrder: '',
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required').min(3, 'At least 3 characters'),
            phoneNumber: Yup.number().required('Phone number is required'),
            address: Yup.string().required('Address is required'),
            user: Yup.string().required('You must be logged in'),
            order: Yup.array().required('There is no order')
        }),

        onSubmit: values => {
            addOrder();
        }

    });

    const addOrder = async () => {
        setSubmit('Creating order...')
        let err;
        try {
            const res = await api.post('/takeaway', data.values);
            setSubmit("Order created successfully.");
            localStorage.setItem('lastOrders', JSON.stringify(data.values.lastOrder));
            localStorage.removeItem('orders');
        } catch (e) {
            if (e.response) {
                err = e.response;
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

export default Form;