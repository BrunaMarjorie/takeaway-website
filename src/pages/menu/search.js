import React, { useState } from 'react';
import api from '../../services/api';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Search = () => {

    const data = useFormik({
        initialValues: {
            search: '',
        },

        validationSchema: Yup.object().shape({
            search: Yup.string().min(3, 'Search must have at least 3 characters').required('Item is required'),
        }),

        onSubmit: values => {
            searchItem(data.values.search);

        }
    });

    const searchItem = async (search) => {
        const filter = search;
        const table = document.getElementById('myTable');
        console.log(table);
        const tr = table.getElementsByTagName("tr");
        for (var i = 0; i < tr.length; i++) {
            const td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                const txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    };

    return {
        data,
    }

}

export default Search;