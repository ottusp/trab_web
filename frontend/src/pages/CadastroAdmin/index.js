import React, {useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './style.css';
import api from '../../services/api';

export default function CadastroAdmin(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const isAdmin = true;

    async function handleSubmit() {        
        try {
            var response = await api.post('/user/admin/', {
                name,
                email,
                phone,
                address,
                isAdmin,
                password
            }, {
                withCredentials: true,
            });
        } catch (e) {
            alert('Erro ao cadastrar administrador');
            console.log(e);
            return;
        }
    }
    return (
        <div className="container container-pagina" >
            <div className="row">
                <div id="esquerda" className="col-fluid-md-6">
                    <h1 className="">Hungry Points</h1>
                </div>
                <div id="direita" className="col-fluid-md-6">
                        
                    <div className="login container container-infos"> 
                        <h2 className="title">Cadastro</h2>
                        <p>[Administrador]</p>
                        <div class="form-floating mb-3">
                            <input type="nome" class="form-control" id="floatingInput" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                            <label for="floatingInput">Nome</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="telefone" class="form-control" id="floatingInput" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)}/>
                            <label for="floatingInput">Telefone</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="endereço" class="form-control" id="floatingInput" placeholder="Endereço" value={address} onChange={e => setAddress(e.target.value)}/>
                            <label for="floatingInput">Endereço</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <Link to = "/">
                            <button id="btn" type="button" className="btn btn-danger" onClick={handleSubmit}>Entrar</button>
                        </Link>
                        <a id="link" href="/login" title="Não tenho cadastro">Já tenho cadastro</a>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}