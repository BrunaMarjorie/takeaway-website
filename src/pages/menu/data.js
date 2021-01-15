import React, { useState } from 'react';
import api from '../../services/api';


const MenuList = () => {

    const [menu, setMenu] = useState([]);

    async function getMenu() {
        let err;
        try {
            const res = await api.get('/menu');
            setMenu(res.data.Menu);
        } catch (e) {
            if (e.response) {
                err = e.response.data;
                const { error } = err;
                setMenu(error);
            } else {
                setMenu("Some error has occured. Please try again.");
            }
        }
    }

    getMenu();
    
    return menu;
};

export default MenuList;
