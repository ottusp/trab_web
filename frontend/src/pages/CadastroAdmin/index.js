import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import './style.css';

export default function CadastroAdmin(){

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
                            <input type="nome" class="form-control" id="floatingInput" placeholder="Nome" />
                            <label for="floatingInput">Nome</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="telefone" class="form-control" id="floatingInput" placeholder="Telefone" />
                            <label for="floatingInput">Telefone</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="endereço" class="form-control" id="floatingInput" placeholder="Endereço" />
                            <label for="floatingInput">Endereço</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" />
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <Link to = "/">
                            <button id="btn" type="button" className="btn btn-danger">Entrar</button>
                        </Link>
                        <a id="link" href="/login" title="Não tenho cadastro">Já tenho cadastro</a>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}