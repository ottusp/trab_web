import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import './style.css';
import logo from './logo.jpg';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
    const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    
    function handleSearch () {
        
        form.classList.add("active");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    }

    function handleCancel () {
        
        items.classList.remove("active");
        menuBtn.classList.remove("hide");
        searchBtn.classList.remove("hide");
        cancelBtn.classList.remove("show");
        form.classList.remove("active");
        cancelBtn.style.color = "#ff3d00";
    }

    function handleMenu () {
        
        items.classList.add("active");
        menuBtn.classList.add("hide");
        searchBtn.classList.add("hide");
        cancelBtn.classList.add("show");
    }

    return (
        <nav>
            <div className="menu-icon">
                <span onClick={handleMenu} ><MenuIcon /></span>
            </div>
            <div className="logo">
                <Link to="/">
                    <img src={logo} alt="Hungry Points" className="logo-img"/>
                </Link>
                Hungry Points
            </div>
            <form action="#">
                <input type="search" className="search-data" placeholder="Busque seu lanche" required></input>
                <button type="submit" ><SearchIcon /></button>
            </form>
            <div className="nav-items">
                <AccountCircleRoundedIcon fontSize="large"/>
                <li><a href="#">Entrar</a></li>
                <ShoppingCartRoundedIcon fontSize="large" background-color="#fff"/>
                <li><a href="#">Carrinho</a></li>
            </div>
            <div className="search-icon">
                <span onClick={handleSearch}></span>
            </div>
            <div className="cancel-icon">
                <span onClick={handleCancel}></span>
            </div>
            
            
        </nav>
    );
}


