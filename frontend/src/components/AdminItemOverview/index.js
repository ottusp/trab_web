import React from 'react';
import { useHistory } from 'react-router-dom';

import bootstrap from 'bootstrap'
// import 'bootstrap/js/src/collapse';
// import 'bootstrap/js/src/modal';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import AdminItemModal from '../../components/AdminItemModal/index';

import api from '../../services/api';


// ItemOverview component to let the admin manage each item
export default function AdminItemOverview (props) {
    // fills the fields with the item information
    const name = props.info?.name;
    const price = parseFloat(props.info?.price).toFixed(2);
    const inStock = props.info?.inStock;
    const img = props.info?.picURL;
    const history = useHistory();

    // deletes an item in database
    async function handleDelete() {
        // alert('Deletado!');
        if (props.handleDeleteMock) props.handleDeleteMock();
        console.log(props)
        
        try {
            var response = await api.delete(`/product/${props.id}`);
        } catch (err) {
            console.log(err);
            return;
        }

        history.go(0);
    }

    return (
        <div className="container admin-item-overview-container">
            <row>
                <div className="col-2 admin-item-overview-col admin-item-overview-col-with-img">
                    <img src={img} className="admin-item-overview-img" alt="sushi"></img>
                </div>
                <div className="col-3 admin-item-overview-col">
                    <div className="admin-item-overview-info">
                        <label>Nome</label>
                        <div id="admin-item-overview-name">{name}</div>
                    </div>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <div className="admin-item-overview-info">
                        <label>Preço</label>
                        <div id="admin-item-overview-price">R$ {price}</div>
                    </div>
                </div>
                <div className="col-1 admin-item-overview-col">
                    <div className="admin-item-overview-info">
                        <label>Estoque</label>
                        <div id="admin-item-overview-in-stock">{inStock}</div>
                    </div>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <button className="btn" data-bs-toggle="modal" data-bs-target={`#item-edit-modal-${props.id}`}>EDITAR</button>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <button id="admin-item-overview-delete-btn" className="btn" onClick={() => handleDelete()}>DELETAR</button>
                </div>
            </row>
            
            <div id={`item-edit-modal-${props.id}`} className="modal fade admin-edit-modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <AdminItemModal type="edit" info={props.info} /> {/* each ItemOverview has its own modal to let the admin edit the item information */}
                    </div>
                </div>
            </div>
        </div>
    );
}