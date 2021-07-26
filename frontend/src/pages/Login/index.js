import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import './style.css';

export default function Login(){
    const [btnLabel, setBtnLabel] = useState("ENTRAR");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();

    async function handleSubmit() {        
        try {
            var response = await api.post('/user/', {
                email,
                password
            }, {
                withCredentials: true,
            });
        } catch (e) {
            alert('Erro ao logar usuário');
            console.log(e);
            return;
        }

        history.go(0);
    }

    return (
        <div className="container container-pagina" >
            <div className="row">
                <div id="esquerda" className="col-fluid-md-6">
                    <h1 className="">Hungry Points</h1>
                </div>
                <div id="direita" className="col-fluid-md-6">
                        
                    <div className="login container container-infos"> 
                        <h2 className="title">Login</h2>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <Link to = "/">
                            <button id="btn" type="button" className="btn btn-danger" onClick={handleSubmit}>{btnLabel}</button>
                        </Link>
                        <a id="link" href="/cadastro" title="Não tenho cadastro">Não tenho cadastro</a>
                        <a id="link" href="/" title="voltar">Voltar</a>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}