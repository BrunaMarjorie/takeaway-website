import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import {useHistory } from "react-router-dom";


const Form = (callback) => {
    
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    const data = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Invalid format'),
            password: Yup.string().required('Password is required'),
        }),

        onSubmit: values => {
            login();
        }

    });

    const login = async () => {
        let err;
        try {
            const res = await api.post('/users/login', data.values);
            sessionStorage.setItem('user', JSON.stringify(res.data));
            setSubmit('You are logged in!');
            history.go(0);
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

export default Form;