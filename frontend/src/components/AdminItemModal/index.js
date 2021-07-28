import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import sushi from './sushi.jpg';

import api from '../../services/api';

// Item modal to create or edit an item depending on props.type, that is set when this component is called 
export default function AdminItemModal (props) {
    const [btnLabel, setBtnLabel] = useState("ADICIONAR");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [inStock, setInStock] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");

    let history = useHistory();

    // if this component is being used as an edit modal, fills the item info fields with info from database
    useEffect(() => {
        if (props.type === "edit") {
            setBtnLabel("EDITAR");

            if (props.info) {
                setName(props.info.name);
                setPrice(parseFloat(props.info.price).toFixed(2));
                setInStock(props.info.inStock);
                setDescription(props.info.description);
                setImg(props.info.img);
            }
        }
    }, []);

    // form submission handler
    async function handleSubmit() {
        if(props.handleSubmitMock) props.handleSubmitMock();
        
        // if the component is being used for creation, it creates a product according to the info filled in forms
        if (props.type === "create") {
            try {
                // first it creates a product
                var response = await api.post('/product/', {
                    name,
                    price,
                    inStock,
                    description,
                }, {
                    withCredentials: true,
                });
            } catch (err) {
                alert('Erro ao criar produto');
                console.log(err);
                return;
            }

            if (response.status != 201) {
                alert('Erro ao criar produto');
                return;
            }
            
            // latter it sets its image
            let formData = new FormData()
            formData.append('img', img);

            try {
                response = await fetch(`http://localhost:${process.env.PORT || 3333}/api/product/setImg/${response.data._id}`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json' 
                    },
                    body: formData
                })
            } catch (err) {
                console.log(err);
                return;
            }
        } else if (props.type == "edit") {  // if the component is being used as an edit modal, it updates the product info and latter updates its image
            try { // updates the product info
                var response = await api.put(`/product/${props.info._id}`, {
                    name,
                    price,
                    inStock,
                    description,
                }, {
                    withCredentials: true,
                });
            } catch (err) {
                alert('Erro ao editar produto');
                console.log(err);
                return;
            }

            if (response.status != 200) {
                alert('Erro ao editar produto');
                return;
            }
            
            let formData = new FormData()
            formData.append('img', img);

            try {   // updates the product image
                response = await fetch(`http://localhost:${process.env.PORT || 3333}/api/product/setImg/${props.info._id}`, {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json' 
                    },
                    body: formData
                })
            } catch (err) {
                console.log(err);
                return;
            }
        }

        history.go(0);
    }

    return (
        <div className="container admin-item-modal-container">
            <input type="file" className="admin-item-modal-input-img" onChange={ (e) => setImg(e.target.files[0]) }/>
            
            <div className="adm-modal-item-inputs">
                <div className="form-floating adm-modal-item-form-input">
                    <input type="text" className="form-control" id="admin-item-modal-floating-name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <label for="admin-item-modal-floating-name">Nome</label>
                </div>

                
                <div className="form-floating adm-modal-item-form-input" id="adm-modal-item-price">
                    <input type="number" className="form-control" id="admin-item-modal-floating-price" placeholder="Preco" value={price} onChange={e => setPrice(e.target.value)} />
                    <label for="admin-item-modal-floating-price">Preco</label>
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