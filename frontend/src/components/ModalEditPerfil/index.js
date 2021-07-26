import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import api from '../../services/api';

export default function ModalEditPerfil () {
    const [btnLabel, setBtnLabel] = useState("Editar");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    async function handleSubmit() {
        try {
            var response = await api.put(`/user/`, {
                name,
                email,
                phone,
                address,
                password,
            }, {
                withCredentials: true,
            });
        } catch (err) {
            alert('Erro ao editar perfil');
            console.log(err);
            return;
        }

        if (response.status != 200) {
            alert('Erro ao editar perfil');
            return;
        }

        alert('Editado!');
        
        history.go(0);
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
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Email</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Telefone</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="text" className="form-control" id="perfil-item-modal-floating-name" placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Endereço</label>
                </div>
                <div className="form-floating pfl-modal-item-form-input">
                    <input type="password" className="form-control" id="perfil-item-modal-floating-name" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <label for="perfil-item-modal-floating-name">Senha</label>
                </div>
            </div>
            <button className="btn perfil-modal-btn" onClick={handleSubmit}>{btnLabel}</button>
        </div>
    );
}