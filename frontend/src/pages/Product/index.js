import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap';
import ModalComment from '../../components/ModalComment/index';

import './style.css';

import Header from "../../components/Header/Header";
import ProductCard from "../../components/ProductCard/ProductCard";
import CommentCard from "../../components/CommentCard/CommentCard"
import Footer from '../../components/Footer';
import CartModal from '../../components/CartModal/CartModal';

import api from '../../services/api';

export default function Product(props) {
    const [product, setProduct] = useState({});
    const [comments, setComments] = useState([]);
    const [orders, setOrders] = useState([]);
    console.log("Orders = ", orders);

    const [addToCartButtonClicked, setAddToCartButtonClicked] = useState(0);

    useEffect(async () => {
        const userId = props.match.params.id;
        try {
            var response = await api.get('/product/', {params: {id:userId}});
            setProduct(response.data);
        } catch(err) {
            console.log('erro no get do produto: ', err);
        }
    }, []);
    
    useEffect(async () => {
        try {
            var response = await api.get('/comment/', {params: {id:product._id}});
            console.log('response: ', response.data);

            setComments(response.data);
        } catch (err) {
            console.log('erro no get: ', err);
        }
    }, []);


    const addToCart = () => {
        setAddToCartButtonClicked(addToCartButtonClicked + 1);
        console.log(addToCartButtonClicked);
    }

    useEffect(async () => {
        console.log("Adicionando item ao carrinho");
        const userId = localStorage.getItem("userId");
        const productId = product._id;

        if (!userId) {
            alert("Você não está logado!");
            return;
        }
        try {
            var response = await api.post(`/cart/${userId}`, {
                productId: productId,
                productQuantity: 1
            });
            setOrders(response.data.products);
        } catch (err) {
            console.log("Erro ao adicionar item ao carrinho: ", err);
        }
    }, [addToCartButtonClicked]);
    

    return (
        <div className="product">
            <div className="container">
                <Header/>

                <div className="product-container row align-items-start justify-content-center">
                    <div className="product-card-container col">
                        <ProductCard description={product.description} img={product.picURL}/>
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
                            {
                                comments.map((item) => (
                                    <div className="comment-item">
                                        <CommentCard userName={item.user.name} rating={item.rating} content={item.content} />
                                    </div>
                                ))
                            }

                        </div>

                        <div className="buttons-container d-flex justify-content-md-evenly">

                            <button id="cart-button" className="product-button" data-bs-toggle="modal" data-bs-target="#add-to-cart-modal" onClick={addToCart}>
                                Adicionar ao carrinho
                            </button>

                            <button className="product-button" data-bs-toggle="modal" data-bs-target="#comment-modal">
                                Adicionar novo comentario
                            </button>

                            <div id="add-to-cart-modal" className="modal fade user-cart-modal" tabindex="-1">
                                <div className="modal-dialog modal-dialog-centered">
                                    <CartModal key={orders} orders={orders}/>
                                </div>
                            </div>

                        </div> 
                    </div>

                </div>
                
                <div id="comment-modal" className="modal fade admin-edit-modal" tabindex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <ModalComment product_id={product._id}/>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}