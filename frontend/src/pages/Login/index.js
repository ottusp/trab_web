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
                            <div className="container form-floating">
                                <input type="email" className="input-text" />
                                <label className="label" for="floatingInput">Email</label>
                            </div>
                            <div className="container form-floating">
                                <input type="password"  className="input-text" />
                                <label className="label" for="floatingPassword">Senha</label>
                            </div>
                            <Link to = "/">
                            <button id="btn" type="button" className="btn btn-danger">Entrar</button>
                            </Link>
                            <a id="link" href="/cadastro" title="Não tenho cadastro">Não tenho cadastro</a>
                        </div>
                        
                </div>
            </div>
        </div>
    );
}