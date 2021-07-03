import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function Card(props) {

    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <h3 className="card-price">R$ {props.price}</h3>
                    <Link to="/product">
                    <button type="button" onClick={props?.addItemTest} className="align-self-end btn btn-danger">Ver<br></br>Produto</button>
                    </Link>
                </div>
        </div>
    );
}