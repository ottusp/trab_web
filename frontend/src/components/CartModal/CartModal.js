import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';
import CartModalListItem from '../CartModalListItem/CartModalListItem';

import './style.css';

export default function CartModal(props) {

    const [orders, setOrders] = useState([]);

    useEffect(async () => {
        try {
            const userId = localStorage.getItem('userId');
            const response = await api.get(`/cart/${userId}`);
            setOrders(response.data.products);
        } catch (err) {
            console.log('Erro ao dar get para o carrinho: ', err);
        }
    }, []);

    const totalPrice = () => {
        const sum = orders.reduce((acc, order) => {
            const price = parseFloat(order.product.price);
            const subTotal = price * order.quantity;
            return acc + subTotal;
        }, 0);

        return sum.toFixed(2);
    }

    const handleClearRow = () => {
        if(props.handleSubmitMock) props.handleSubmitMock();
        alert("Carrinho esvaziado");
    }

    const handleConfirmPurchase = () => {
        if (props.handleSubmitMock) props.handleSubmitMock();
        alert("Sua compra foi confirmada");
    }

    return (
        <div className="modal-content cart-modal">
            <div className="modal-header">
                <h5 className="modal-title col">
                    Carrinho
                </h5>
                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div className="modal-body">
                {orders.map(order => (
                    <CartModalListItem key={order.product.name} order={order.product} />
                ))}
                <div className="total-price-container">
                    <div className="total-price">
                        Total: R${totalPrice()}
                    </div>
                </div>
            </div>

            <div className="button-row">
                <div className="clear-cart-button-container">
                    <button type="button" data-bs-dismiss="modal" className="btn clear-cart-button"
                        onClick={handleClearRow}>
                        Esvaziar carrinho
                    </button>
                </div>

                <div className="end-purchase-button-container">
                    <button type="button" data-bs-dismiss="modal" className="btn end-purchase-button"
                        onClick={handleConfirmPurchase}>
                        Fazer pedido
                    </button>
                </div>
            </div>
        </div>
    );
}