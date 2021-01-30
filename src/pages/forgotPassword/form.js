import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';



const Form = (callback) => {
    const [submit, setSubmit] = useState(false);

    //set inicial values
    const data = useFormik({
        initialValues: {
            email: '',
        },

        //validate inputs
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Invalid format'),
        }),

        onSubmit: values => {
            //send email if information is correctly passed
            forgot();
        }
    });

    const forgot = async () => {
        //set loading message
        setSubmit('Loading...');
        try {
            //call API
            const res = await api.post('/forgot/password', data.values);
            if (res.data.error) {
                //set message if error
                setSubmit(res.data.error); 
             } else {
                 //set message if successful
                 setSubmit("Please check your mailbox.");
             }
        } catch (e) {
            //set message if error
            setSubmit("Some error has occured. Please try again.");
        }
    };



    return {
        data,
        submit,
    }

}

export default Form;