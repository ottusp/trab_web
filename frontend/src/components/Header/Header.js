import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import './style.css';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import logo from './logo.jpg';

export default function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const history = useHistory();

    const redirect = () => {
        var input = document.querySelector("#busca");
        if(input.value != ""){
            history.push({
                pathname: '/search',
                state: { detail: input.value }
            });
        }
    }

    return (
        <div className="Header">
            <div className="leftSide">
                <button onClick={()=> setShowLinks(!showLinks)}><MenuIcon /></button>
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Hungry Points" className="logo-img"/>
                    </Link>
                    <a className="logo-name" href="/" >Hungry Points</a>
                </div>
                <div className="links" id={showLinks ? "hidden" : ""}>
                    <a href="/" ><AccountIcon className="accountIcon"/>Entrar</a>
                    <a href="/" ><ShoppingCartIcon className="shoppingCartIcon"/>Carrinho</a>
                </div>
            </div> 
            <div className="rightSide">
                <form id> 
                    <input id="busca" type="text" placeholder="Busque seu lanche" required></input>
                        <button className="search" onClick={redirect} ><SearchIcon /></button>
                </form>
            </div>
        </div>
    )
}
