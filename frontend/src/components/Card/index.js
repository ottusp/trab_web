import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function Card(props) {
    const name = props.info?.name;
    const price = parseFloat(props.info?.price).toFixed(2);
    const description = props.info?.description;
    const img = props.info?.picURL;

    return (
        <div className="card">
            <img className="card-img-top" src={img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <h3 className="card-price">R$ {price}</h3>
                    <Link to="/product">
                    <button type="button" onClick={props?.addItemTest} className="align-self-end btn btn-danger">Ver<br></br>Produto</button>
                    </Link>
                </div>
        </div>
    );
}