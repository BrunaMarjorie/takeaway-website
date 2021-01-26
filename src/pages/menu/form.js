import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';



const Form = (callback) => {

    const data = useFormik({
        initialValues: {
            quantity: '',
            user: '',
        },

        validationSchema: Yup.object().shape({
            quantity: Yup.number().required('Quantity is required'),
            user: Yup.string().required('You must be logged in')
        }),

        onSubmit: values => {
            console.log(data.values);
        }
    });

    return {
        data,
    }

}

export default Form;