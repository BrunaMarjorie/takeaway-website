import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';
import { useHistory, Link } from "react-router-dom";


const Form = (callback) => {
    const [submit, setSubmit] = useState(false);
    const history = useHistory();

    //set inicial values
    const data = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        //validate inputs
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').email('Invalid format'),
            password: Yup.string().required('Password is required'),
        }),

        onSubmit: values => {
            //call API if all information is correctly passed
            login();
        }

    });

    const login = async () => {
        //set loading message
        setSubmit('Loading...');
        let err;
        try {
            //call API
            const res = await api.post('/users/login', data.values);
            //store user on session storage
            sessionStorage.setItem('user', JSON.stringify(res.data));
            //if a customer, go back to previous page
            if (res.data.status === 'customer'){
                history.goBack();
            
            } else {
                //if a staff member or admin, update header and display access
                //to staff page 
                history.go(0);
                setSubmit(<Link to='/staffpage'>Staff page</Link> );
            }
        } catch (e) {
            if (e.response) {
                try{
                    err = e.response.data;
                    const { error } = err;
                    //set error message
                    setSubmit(error);
                } catch (e) {
                    //set error message
                    setSubmit(e);
                }
                
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