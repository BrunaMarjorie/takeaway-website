import React, { useEffect, useState } from 'react';
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
            setSubmit(true);
        }
        
    });

    useEffect(() => {
        if (submit === true){
            //CreateUser();
            console.log(data.values);
        }      

    }, [submit]);

    
    async function CreateUser() {
        const post = await api.post('/users/register', data);
    };

    return {
        data,
    }

}

export default Form;