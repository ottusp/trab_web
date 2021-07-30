import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import './style.css';

//Login Page to start a new session for Admins
export default function LoginAdmin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    //Create a new session for admin on server
    async function handleSubmit() {        
        try {
            var res = await api.post('/session/login', {
                email,
                password
            }, {
                withCredentials: true,
            });
        } catch (e) {
            alert('Erro ao logar adminitrador');
            console.log(e);
            return;
        }

        if (res.status != 200) {
            alert('Login invalido');
            return;
        }

        console.log('retorno do login: ', res.data);
        localStorage.setItem('userId', res.data._id);
        localStorage.setItem('token', res.data.token);

        history.push('/admin/home');
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
                        <p>[Administrador]</p>
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="floatingInput" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <label for="floatingInput">Email</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                            <label for="floatingPassword">Senha</label>
                        </div>
                        <button id="btn" type="button" className="btn btn-danger" onClick={handleSubmit}>Entrar</button>
                        <a id="link" href="/cadastroAdmin" title="Não tenho cadastro">Não tenho cadastro</a>
                        <a id="link" href="/" title="voltar">Voltar</a>
                    </div>
                        
                </div>
            </div>
        </div>
    );
}