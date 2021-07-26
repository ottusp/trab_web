import React from 'react';
import { Link } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './style.css';
// import 'bootstrap/js/src/carousel'
// import 'bootstrap/js/src/util'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'

export default function Carroussel(props) {
  return (
  <div className="container container-carroussel">
    <Carousel id="carouselExampleSlidesOnly">
      
      <Carousel.Item className="carousel-item">
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={props.products[0]?.picURL} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>{props.products[0]?.name}</h2>
              <p>{props.products[0]?.description}</p>
              <h3>R$ {parseFloat(props.products[0]?.price).toFixed(2)}</h3>
              <Link to= {`/product/${props.products[0]?._id}`}>
                <button type="button" onClick={props.addItemTest} className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={props.products[1]?.picURL} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>{props.products[1]?.name}</h2>
              <p>{props.products[1]?.description}</p>
              <h3>R$ {parseFloat(props.products[1]?.price).toFixed(2)}</h3>
              <Link to= {`/product/${props.products[1]?._id}`}>
                  <button type="button" onClick={props.addItemTest} className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-item">
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={props.products[2]?.picURL} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>{props.products[2]?.name}</h2>
              <p>{props.products[2]?.description}</p>
              <h3>R$ {parseFloat(props.products[2]?.price).toFixed(2)}</h3>
              <Link to= {`/product/${props.products[2]?._id}`}>
                  <button type="button" onClick={props.addItemTest} className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
              </Link>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}