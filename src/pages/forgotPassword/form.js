import React, { useEffect, useState } from 'react';
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
            setSubmit(true);
        }

    });

    useEffect(() => {
        if (submit === true) {
            //CreateUser();
            console.log(data.values);
        }

    }, [submit]);


    async function Login() {
        const post = await api.post('/users/login', data);
    };

    return {
        data,
    }

}

export default Form;