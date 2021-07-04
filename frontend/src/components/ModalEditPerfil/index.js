import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


export default function ModalEditPerfil () {
    const [btnLabel, setBtnLabel] = useState("Editar");
    const [name, setName] = useState("");
    let history = useHistory();

    function handleSubmit() {
        alert('Editado!');
    }

    return (

        <div className="container perfil-item-modal-container">   
               <h1>Editar Perfil</h1>      
            <div className="pfl-modal-item-inputs">
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Nome</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Email" value={name} onChange={e => setName(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Email</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Telefone" value={name} onChange={e => setName(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Telefone</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Endereço" value={name} onChange={e => setName(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Endereço</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="password" className="form-control" id="perfil-item-modal-floating-name" placeholder="Senha" value={name} onChange={e => setName(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Senha</label>
                </div>
            </div>
            <button className="btn perfil-modal-btn" onClick={handleSubmit}>{btnLabel}</button>
        </div>
    );
}