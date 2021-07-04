import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';

import './style.css';

import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import CommentCard from "../../components/CommentCard/CommentCard"
import Footer from '../../components/Footer';
import CartModal from '../../components/CartModal/CartModal';

export default function Product() {

    const product = {
        _id: 0,
        img: "img",
        name: "Sushi tope",
        description: "aaa",
        price: "51,99",
        inStock: "83"
    }

    return (
        <div className="product">
            <div className="container">
                <Header/>

                <div className="product-container row align-items-start justify-content-center">
                    <div className="product-card-container col">
                        <ProductCard />
                    </div>

                    <div className="info-container col">

                        <div className="main-info">
                            <div className="title-container align-self-center container">
                                <h1 className="product-name text-center">
                                    {product.name}
                                </h1>
                            </div>

                            <div className="price-quantity-container row align-items-stretch">
                                <div className="price-container col">
                                    R${product.price}
                                </div>

                                <div className="quantity-container col">
                                    Em estoque: {product.inStock}
                                </div>
                            </div>
                        </div>

                        <div className="comments-container">
                            <CommentCard 
                                userName="Lucas Romero"
                                rating = "0.3"
                                content = "Eu amo esse sushi, acho ele muito tope. Uma vez, eu pedi ele 10 vezes na minha casa no mesmo mês, e não me arrependo. Nota 10!"
                            />

                            <CommentCard 
                                userName="Larissa Freire"
                                rating="4.9"
                                content="Sinceramente, fiquei fascinada com esse sushi. Provavelmente a melhor comida oriental que já comi."
                            />
                        </div>

                        <div className="buttons-container d-flex justify-content-md-evenly">

                            <button id="cart-button" className="product-button" data-bs-toggle="modal" data-bs-target="#add-to-cart-modal">
                                Adicionar ao carrinho
                            </button>

                            <button className="product-button">
                                Adicionar novo comentario
                            </button>

                            <div id="add-to-cart-modal" className="modal fade user-cart-modal" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <CartModal />
                                </div>
                            </div>

                        </div> 
                    </div>

                </div>
                
                <Footer />
            </div>
        </div>
    )
}