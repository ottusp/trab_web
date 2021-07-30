import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function CartModalListItem(props) {
    console.log("No CartModalListItem...");
    let order = {
        _id: props.order.product._id,
        name: props.order.product.name,
        price: props.order.product.price,
        selectedQuantity: props.order.quantity
    }
    console.log("order = ", order);

    return(
        <div className="cart-modal-list-item container">
            <div className="item-info row align-items-center justify-content-between">
                <div className="order-name col-4">
                    {order.name}
                </div>

                <div className="price-info col-5">
                    <div className="row">
                        <div className="order-price small-text col">
                            R${order.price}
                        </div>

                        <div className="order-quantity small-text col">
                            x{order.selectedQuantity}
                        </div>
                    </div>

                    <div className="subtotal-container small-text">
                        Subtotal: R${(parseFloat(order.price) * order.selectedQuantity).toFixed(2)}
                    </div>

                </div>


                <div className="remove-order small-text col-3">
                    <button className="product-button">
                        Remover
                    </button>
                </div>
            </div>
        </div>

    );
}