import React, { useState } from 'react';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Search = (callback) => {
    const [submit, setSubmit] = useState(false);
    
    
    const data = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: Yup.object().shape({
            search: Yup.string().min(3, 'Search must have at least 3 characters').required('Item is required'),
        }),

        onSubmit: values => {
            searchItem();   
        }
    });
    
    const searchItem = async () => {
        let err;
        try {
            const res = await api.post('/search/menu', data.values);
            console.log(res);
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

export default Search;