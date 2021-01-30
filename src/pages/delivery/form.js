import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import 'react-day-picker/lib/style.css';


const Form = (callback) => {

    const [submit, setSubmit] = useState(false);

    //get present date
    let today = new Date();
    today = today.getDate()+'/'+today.getMonth()+1+'/'+today.getFullYear();

    //set inicial values
    const data = useFormik({
        initialValues: {
            //set default date
            date: today,
            name: '',
            phoneNumber: '',
            address: '',
            comment: '',
            user: '',
            order: '',
            lastOrder: '',
        },

        //validate inputs
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Name is required').min(3, 'At least 3 characters'),
            phoneNumber: Yup.number().required('Phone number is required'),
            address: Yup.string().required('Address is required'),
            user: Yup.string().required('You must be logged in'),
            order: Yup.array().required('There is no order')
        }),

        onSubmit: values => {
             //create order if all information is correctly passed
            addOrder();
        }

    });

    const addOrder = async () => {
        //set loading message
        setSubmit('Creating order...')
        let err;
        try {
            //call API
            const res = await api.post('/delivery', data.values);
            //set message if successful
            console.log(res);
            setSubmit("Order created successfully.");
            //clean local storage
            localStorage.removeItem('orders');
        } catch (e) {
            if (e.response) {
                err = e.response;
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

export default Form;