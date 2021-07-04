import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import ModalEditPerfil from '../../components/ModalEditPerfil/index';

import './style.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.jpg';

export default function Header(props) {
    const [showLinks, setShowLinks] = useState(false);
    const history = useHistory();

    const redirect = () => {
        if (props?.redirectTest) {
            props.redirectTest();
        }
        
        var input = document.querySelector("#busca");
        if(input.value !== ""){
            history.push({
                pathname: '/search',
                state: {
                    detail: input.value
                }
            });
        }
    }

    return (
        <div className="Header">
            <div className="leftSide">

                <button className="menu" data-testid="show-links-button" onClick={()=> setShowLinks(!showLinks)}><MenuIcon /></button>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Hungry Points" className="logo-img"/>
                    </Link>
                    <a className="logo-name" href="/" >Hungry Points</a>
                </div>
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <DropdownButton id="dropdown-basic-button" title="Entrar">
                        <Dropdown.Item className="item" href="/login">Usuário</Dropdown.Item>
                        <Dropdown.Item className="item" href="/loginAdmin">Administrador</Dropdown.Item>
                        <Dropdown.Item className="item" data-bs-toggle="modal" data-bs-target={`#item-edit-modal-${props.id}`}>Editar</Dropdown.Item>
                    </DropdownButton>
                    <button className="btn item carrinho-btn" href="/carrinho" ><ShoppingCartIcon className="shoppingCartIcon"/>Carrinho</button>
                </div>
            </div> 

            <div className="rightSide">
                <form id> 
                    <input id="busca" type="text" placeholder="Busque seu lanche" required></input>
                    <button className="search" onClick={redirect} ><SearchIcon /></button>
                </form>
            </div>
            <div id={`item-edit-modal-${props.id}`} className="modal fade admin-edit-modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalEditPerfil />
                    </div>
                </div>
            </div>
        </div>
    )
}
