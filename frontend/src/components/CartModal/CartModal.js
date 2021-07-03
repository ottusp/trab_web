import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartModalListItem from '../CartModalListItem/CartModalListItem';

import './style.css';

export default function CartModal(props) {

    const orders = {
        data: [
            {
                _id: 0,
                name: "Sushi tope",
                price: "51.99",
                selectedQuantity: 4
            },
            {
                _id: 1,
                name: "Sorvete Beijo",
                price: "8.50",
                selectedQuantity: 1
            },
            {
                _id: 0,
                name: "Lanche do Podrao",
                price: "18.90",
                selectedQuantity: 2
            },
        ],
        totalPrice() {
            const sum = this.data.reduce((acc, order) => {
                const price = parseFloat(order.price); 
                const subTotal = price * order.selectedQuantity;
                return acc + subTotal;
            }, 0);

            return sum;
        }
    }

    const handleClearRow = () => {
        alert("Carrinho esvaziado");
    }

    const handleConfirmPurchase = () => {
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
                {orders.data.map(order => (
                    <CartModalListItem order={order} />
                ))}
                <div className="total-price-container">
                    <div className="total-price">
                        Total: R${orders.totalPrice()}
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