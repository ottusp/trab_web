import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './style.css';

export default function Login(){

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
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <Link to = "/">
                            <button id="btn" type="button" className="btn btn-danger">Entrar</button>
                        </Link>
                        <a id="link" href="/cadastro" title="Não tenho cadastro">Não tenho cadastro</a>
                        <a id="link" href="/" title="voltar">Voltar</a>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}