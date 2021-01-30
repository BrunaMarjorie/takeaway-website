import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';


const Form = (callback) => {
    const [submit, setSubmit] = useState(null);
    const [loading, setLoading] = useState(null);

    //set inicial values
    const data = useFormik({
        initialValues: {
            name: '',
            phoneNumber: '',
            email: '',
            password: '',
            confPassword: ''
        },

        //validate inputs
        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, 'Minimum 2 characters').required('Name is required'),
            phoneNumber: Yup.number().required('Phone number is required'),
            email: Yup.string().required('Email is required').email('Invalid format'),
            password: Yup.string().required('Password is required').min(6, 'Password must have at least 6 characters'),
            confPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Confirm Password is required')
        }),

        onSubmit: values => {
            //create user if all information is correctly passed
            createUser();
        }

    });


    const createUser = async () => {
        //set loading message
        setLoading("Loading...");
        let err;
        try {
            //call API
            const res = await api.post('/users/register', data.values);
            //set message if successful
            setLoading(null);
            setSubmit("Account created successfully.");
        } catch (e) {
            if (e.response) {
                err = e.response.data;
                const { error } = err;
                //set error message
                setLoading(error);
            } else {
                //set error message
                setLoading("Some error has occured. Please try again.");
            }
        }
    };

    return {
        data,
        submit,
        loading,
    }

}

export default Form;