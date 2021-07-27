import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

//card with infos about products
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
                    <div className="div-text">
                    <p className="card-text">{description}</p>
                    </div>
                    <h3 className="card-price">R$ {price}</h3>
                    <Link to= {`/product/${props.info?._id}`}>
                    <button type="button" onClick={props?.addItemTest} className="align-self-end btn btn-danger">Ver<br></br>Produto</button>
                    </Link>
                </div>
        </div>
    );
}