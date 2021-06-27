import React from 'react'

import 'bootstrap/js/src/modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

import AdminItemOverview from '../../components/AdminItemOverview/index';
import AdminItemModal from '../../components/AdminItemModal/index';

export default function AdminDashboard () {
    let products = [{
                        id: 1,
                        name: "Sushi",
                        price: 30.00,
                        inStock: 20,
                        description: "comida top uhuu"
                    },
                    {
                        id: 2,
                        name: "Hamburguer",
                        price: 15.50,
                        inStock: 10,
                        description: "comida daora uhuu"
                    }]

    return (
        <div className="admin-page">
            <div className="admin-func">
                <button className="btn admin-page-new-product-btn" data-bs-toggle="modal" data-bs-target="#item-add-modal">ADICIONAR NOVO PRODUTO</button>

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
        </div>
    ); 
}