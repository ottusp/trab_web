import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import sushi from './sushi.jpg';

export default function AdminItemModal () {
    let btnLabel = "Adicionar novo produto"; 

    return (
        <div className="container admin-item-modal-container">
            <img src={sushi} className="admin-item-modal-img" alt="sushi" />
            <input type="file" className="admin-item-modal-input-img"/>
            
            <div className="adm-modal-item-inputs">
                <div className="form-floating adm-modal-item-form-input">
                    <input type="text" className="form-control" id="admin-item-modal-floating-name" placeholder="Nome" />
                    <label for="admin-item-modal-floating-name">Nome</label>
                </div>
                <div className="form-floating adm-modal-item-form-input">
                    <input type="text" className="form-control" id="admin-item-modal-floating-price" placeholder="Preco" />
                    <label for="admin-item-modal-floating-price">Preco</label>
                </div>
                <div className="form-floating adm-modal-item-form-input">
                    <input type="text" className="form-control" id="admin-item-modal-floating-in-stock" placeholder="Em estoque" />
                    <label for="admin-item-modal-floating-in-stock">Em estoque</label>
                </div>
                <div className="form-floating adm-modal-item-form-input">
                    <textarea type="text" rows="30" className="form-control" id="admin-item-modal-floating-description" placeholder="Descricao" />
                    <label for="admin-item-modal-floating-description">Descricao</label>
                </div>
            </div>

            <button className="btn">{btnLabel}</button>
        </div>
    );
}