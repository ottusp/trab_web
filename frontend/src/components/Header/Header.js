import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './style.css';
import logo from './logo.jpg';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';

export default function Header() {
    return (
        <div className="cabecalho header-container">
            
            <h1 className="logo">
                <Link to="/">
                    <img src={logo} alt="Hungry Points" className="logo-img"/>
                </Link>
            </h1>
            <h1 className="nome">
                <a href="principal.html" title="name">Hungry Points</a>
            </h1>
            <h1 className="itens">
                <a href="principal.html" title="Carrinho">
                    <ShoppingCartRoundedIcon fontSize="large"/>
                    <h3>Carrinho</h3>
                </a>
                <a href="principal.html" title="Perfil">
                    <AccountCircleRoundedIcon fontSize="large"/>
                    <h3>Entrar</h3>
                </a>
            </h1>
            <div className="container-pesquisa">
                <form method="post">
                    <button><SearchIcon /></button>
                    <input type="text" placeholder="Busque seu lanche"></input>
                </form>
            </div>
                      
        </div>
    );
}