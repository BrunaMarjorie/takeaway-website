import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';


const Form = (callback) => {
    const [submit, setSubmit] = useState(false);

    const data = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confPassword: ''
        },

        validationSchema: Yup.object().shape({
            name: Yup.string().min(2, 'Minimum 2 characters').required('Name is required'),
            email: Yup.string().required('Email is required').email('Invalid format'),
            password: Yup.string().required('Password is required').min(6, 'Password must have at least 6 characters'),
            confPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required('Confirm Password is required')
        }),

        onSubmit: values => {
            createUser();
        }

    });


    const createUser = async () => {
        let err;
        try {
            const res = await api.post('/users/register', data.values);
            setSubmit("Account created successfully.");
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
        submit,
    }

}

export default Form;