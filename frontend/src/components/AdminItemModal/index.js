import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import sushi from './sushi.jpg';

export default function AdminItemModal (props) {
    const [btnLabel, setBtnLabel] = useState("ADICIONAR");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();

    useEffect(() => {
        if (props.type === "edit") {
            setBtnLabel("EDITAR");
            setName(props.info.name);
            setPrice(parseFloat(props.info.price).toFixed(2));
            setInStock(props.info.inStock);
            setDescription(props.info.description);
        }
    }, []);

    function handleSubmit() {
        alert('Enviado!');
        history.go(0);
    }

    return (
        <div className="container admin-item-modal-container">
            <img src={sushi} className="admin-item-modal-img" alt="sushi" />
            <input type="file" className="admin-item-modal-input-img"/>
            
            <div className="adm-modal-item-inputs">
                <div className="form-floating adm-modal-item-form-input">
                    <input type="text" className="form-control" id="admin-item-modal-floating-name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <label for="admin-item-modal-floating-name">Nome</label>
                </div>

                <div className="adm-modal-item-form-input input-group" id="adm-modal-item-price">
                    <row className="admin-modal-item-price-row">
                        <div className="col-3">
                            <span class="input-group-text">$</span>
                        </div>
                        <div className="col-9">
                            <div className="form-floating">
                                <input type="number" className="form-control" id="admin-item-modal-floating-price" placeholder="Preco" value={price} onChange={e => setPrice(e.target.value)} />
                                <label for="admin-item-modal-floating-price">Preco</label>
                            </div>
                        </div>
                    </row>
                </div>

                <div className="form-floating adm-modal-item-form-input" id="adm-modal-item-in-stock">
                    <input type="number" min="0" className="form-control" id="admin-item-modal-floating-in-stock" placeholder="Em estoque" value={inStock} onChange={e => setInStock(e.target.value)} />
                    <label for="admin-item-modal-floating-in-stock">Estoque</label>
                </div>
                
                <div className="form-floating adm-modal-item-form-input">
                    <textarea type="text" rows="30" className="form-control" id="admin-item-modal-floating-description" placeholder="Descricao" value={description} onChange={e => setDescription(e.target.value)} />
                    <label for="admin-item-modal-floating-description">Descricao</label>
                </div>
            </div>

            <button className="btn admin-modal-btn" onClick={handleSubmit}>{btnLabel}</button>
        </div>
    );
}