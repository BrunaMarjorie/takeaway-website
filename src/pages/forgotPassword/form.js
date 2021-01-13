import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';



const Form = (callback) => {
    const [submit, setSubmit] = useState(false);

    const data = useFormik({
        initialValues: {
            email: '',
        },

        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Invalid format'),
        }),

        onSubmit: values => {
            forgot();
        }
    });

    const forgot = async () => {
        let err;
        try {
            const res = await api.post('/forgot/password', data.values);
            setSubmit("Please check your mailbox.");

        } catch (e) {
            setSubmit("Some error has occured. Please try again.");
        }
    };



    return {
        data,
        submit,
    }

}

export default Form;