import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import CommentCard from "../../components/CommentCard/CommentCard"
import Footer from '../../components/Footer';

export default function Product() {

    let productName = "Sushi tope";
    let price = "50,99";
    let quantity = "83"

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
                                    {productName}
                                </h1>
                            </div>

                            <div className="price-quantity-container row align-items-stretch">
                                <div className="price-container col">
                                    R${price}
                                </div>

                                <div className="quantity-container col">
                                    Em estoque: {quantity}
                                </div>
                            </div>
                        </div>

                        <div className="comments-container">
                            <CommentCard />
                            <CommentCard />
                        </div>

                        <div className="buttons-container d-flex justify-content-md-evenly">

                            <button>
                                Adicionar ao carrinho
                            </button>

                            <button>
                                Adicionar novo comentario
                            </button>
                        </div> 
                    </div>

                </div>
                
                <Footer />
            </div>
        </div>
    )
}