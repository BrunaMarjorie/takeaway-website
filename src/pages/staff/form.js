import React, { useState } from 'react';
import { useFormik } from 'formik';
import api from '../../services/api';



const Form = (callback) => {

    const [submit, setSubmit] = useState(false);

    //set inicial values
    const data = useFormik({
        initialValues: {
            takeaway: '',
            delivery: '',
        },


        onSubmit: values => {
            //update waiting time
            waitingTime();
        }

    });

    const waitingTime = async () => {
        let err;
        try {
            //call API
            const res = await api.put('/waitingTime', data.values);
            //store waiting time on local storage
            localStorage.setItem('waitingTime', JSON.stringify(data.values));
        } catch (e) {
            if (e.response) {
                err = e.response.data;
                const { error } = err;
                //set error message
                setSubmit(error);
            } else {
                //set error message
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