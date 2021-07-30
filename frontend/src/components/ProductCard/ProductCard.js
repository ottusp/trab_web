import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function ProductCard(props) {

    return (
        <div className="product-card card">
            <div className="product-card content">
                <div className="product-card image-container">
                    <img src={props.img} alt="sushi"></img>
                </div>

                <div className="product-card text-container">
                    <p className="product-card description">
                        {props.description}
                    </p>
                </div>
            </div>
        </div>
    );
}