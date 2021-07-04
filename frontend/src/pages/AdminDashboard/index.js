import React, { useEffect, useState } from 'react'

import bootstrap from 'bootstrap'
// import 'bootstrap/js/src/modal'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import AdminItemOverview from '../../components/AdminItemOverview/index';
import AdminItemModal from '../../components/AdminItemModal/index';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/index';

import api from '../../services/api';

export default function AdminDashboard (props) {
    // const [products, setProducts] = useState([]);
    
    // useEffect(async () => {
    //     try {
    //         const response = await api.get('/products/all');
    //         console.log('response: ', response);

    //         setProducts(response.data);
    //     } catch (err) {
    //         console.log('erro no get: ', err);
    //     }
    // }, []);

    const products = [
        {
            id: 1,
            name: "Cookies - Loja X",
            description: "Dois cookies de gotas de chocolate, muito crocantes feitos em esetilo americano. Feito com farinha de trigo integral, sem glúten.",
            price: 7.50,
            inStock: 10,
        },
        {
            id: 2,
            name: "Sushi - Loja Y",
            description: "4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia.",
            price: 15.90,
            inStock: 20,
        },
        {
            id: 3,
            name: "Caldo - Loja Z",
            description: "Deliciosa e saborosa sopa de abóbora , feita com abobora em creme batida linguiça calabresa defumada e carne de sol desfiada.",
            price: 9,
            inStock: 30,
        }
    ]

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
                    products.map((item) => (
                        <div className="overview-item">
                            <AdminItemOverview id={item.id} info={item} />
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    ); 
}