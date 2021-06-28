import React from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/js/src/collapse'
import 'bootstrap/js/src/modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import AdminItemModal from '../../components/AdminItemModal/index';

import sushi from '../../assets/img/sushi.jpg';


export default function AdminItemOverview (props) {
    const name = props.info.name;
    const price = parseFloat(props.info.price).toFixed(2);
    const inStock = props.info.inStock;
    const img = props.info.img;
    const history = useHistory();

    function handleDelete() {
        alert('Deletado!');
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
                        <div>{name}</div>
                    </div>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <div className="admin-item-overview-info">
                        <label>Preço</label>
                        <div>R$ {price}</div>
                    </div>
                </div>
                <div className="col-1 admin-item-overview-col">
                    <div className="admin-item-overview-info">
                        <label>Estoque</label>
                        <div>{inStock}</div>
                    </div>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <button className="btn" data-bs-toggle="modal" data-bs-target={`#item-edit-modal-${props.id}`}>EDITAR</button>
                </div>
                <div className="col-2 admin-item-overview-col">
                    <button className="btn" onClick={() => handleDelete()}>DELETAR</button>
                </div>
            </row>
            
            <div id={`item-edit-modal-${props.id}`} className="modal fade admin-edit-modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <AdminItemModal type="edit" info={props.info} />
                    </div>
                </div>
            </div>
        </div>
    );
}