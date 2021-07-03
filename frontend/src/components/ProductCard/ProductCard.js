import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';
import sushi from './sushi.jpg';

export default function ProductCard() {

    let description = `Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! In elementis mé pra quem é amistosis quis leo. Aenean aliquam molestie leo, vitae iaculis nisl.`;

    return (
        <div className="product-card card">
            <div className="product-card content">
                <div className="product-card image-container">
                    <img src={sushi} alt="sushi"></img>
                </div>

                <div className="product-card text-container">
                    <p className="product-card description">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}