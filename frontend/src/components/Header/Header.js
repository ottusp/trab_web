import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {DropdownButton, Dropdown} from 'react-bootstrap'
import ModalEditPerfil from '../../components/ModalEditPerfil/index';
import CartModal from '../../components/CartModal/CartModal';
import './style.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.jpg';
import api from '../../services/api';

//Navbar 
export default function Header(props) {
    const [showLinks, setShowLinks] = useState(false);//hide some links based on page width
    const [value, setValue] = useState("");
    const history = useHistory();

    //redirect to the search page
    const redirect = () => {
        if (props?.redirectTest) {
            props.redirectTest();
        }
        
        history.push({
            pathname:`/search/${value}`,
        });
    }

    const handleLogout = async () => {
        try {
            await api.post('/session/logout');
        } catch (err) {
            console.log(err);
            return;
        }
        alert('deslogado!')
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
                        <Dropdown.Item className="item" href="/" onClick={handleLogout}>Logout</Dropdown.Item>
                        <Dropdown.Item className="item" data-bs-toggle="modal" data-bs-target={`#item-edit-modal-${props.id}`}>Editar</Dropdown.Item>
                    </DropdownButton>
                    <button className="btn item carrinho-btn" data-bs-toggle="modal" data-bs-target="#add-to-cart-modal" href="/carrinho" ><ShoppingCartIcon className="shoppingCartIcon"/>Carrinho</button>
                </div>
            </div> 

            <div className="rightSide">
                <form id> 
                    <input id="busca" type="text" placeholder="Busque seu lanche" required value={value} onChange={e => setValue(e.target.value)}></input>
                    <button className="search" onClick={redirect}><SearchIcon /></button>
                </form>
            </div>
            <div id={`item-edit-modal-${props.id}`} className="modal fade admin-edit-modal" tabindex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <ModalEditPerfil />
                    </div>
                </div>
            </div>
            <div id="add-to-cart-modal" className="modal fade user-cart-modal" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <CartModal />
                </div>
            </div>
        </div>
    )
}
