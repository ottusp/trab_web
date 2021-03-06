import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import bootstrap from 'bootstrap'
// import 'bootstrap/js/src/modal'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import AdminItemOverview from '../../components/AdminItemOverview/index';
import AdminItemModal from '../../components/AdminItemModal/index';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index';

import api from '../../services/api';

// Admin dashboard page to manage the products
export default function AdminDashboard (props) {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    
    // get all the products stored in the database through the backend
    useEffect(async () => {
        try {
            var res = await api.post('/session/isAdmin');
        } catch (err) {
            console.log(err);
            return history.push('/');
        }

        if (res.status!=200) {
            return history.push('/');
        }

        try {
            const response = await api.get('/product/');
            console.log('response: ', response.data);

            setProducts(response.data);
        } catch (err) {
            console.log('erro no get: ', err);
        }
    }, []);

    return (
        <div className="admin-page">
            <Header />
            <div className="admin-func">
                <button className="btn admin-page-new-product-btn" data-bs-toggle="modal" data-bs-target="#item-add-modal" onClick={props?.addProductMock}>ADICIONAR NOVO PRODUTO</button>

                <div id="item-add-modal" className="modal fade admin-edit-modal" tabindex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <AdminItemModal type="create"/>
                        </div>
                    </div>
                </div>

                {
                    // Creates an ItemOverview component for each product
                    products.map((item) => (
                        <div className="overview-item">
                            <AdminItemOverview id={item._id} info={item} />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    ); 
}