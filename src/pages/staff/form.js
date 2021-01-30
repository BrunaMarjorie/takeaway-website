import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import {useHistory } from "react-router-dom";


const Form = (callback) => {
    
    const [submit, setSubmit] = useState(false);
    
    const data = useFormik({
        initialValues: {
            takeaway: '',
            delivery: '',
        },


        onSubmit: values => {
            waitingTime();
        }

    });

    const waitingTime = async () => {
        let err;
        try {
            const res = await api.put('/waitingTime', data.values);
            localStorage.setItem('waitingTime', JSON.stringify(data.values));
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