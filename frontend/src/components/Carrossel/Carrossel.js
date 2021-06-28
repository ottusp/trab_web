import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './style.css';
import 'bootstrap/js/src/carousel'
import 'bootstrap/js/src/util'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carousel} from 'react-bootstrap'

import burguer from './burguer.jpg';
import batata from './batata.jpg';
import sorvete from './sorvete.jpg';
import macarrao from './macarrao.jpg';

export default function Carroussel() {
  return (
  <div className="container container-carroussel">
    <Carousel id="carouselExampleSlidesOnly">
      
      <Carousel.Item>
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={burguer} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>X-Bugger Cheddar - BK</h2>
              <p>Pão australiano, molho da casa, 2 burguer de picanha 200g, bacon, queijo prato empanado, tomate e alface.</p>
              <h3>R$ 21,80</h3>
              <button type="button" className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={batata} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>Batata Frita - McDonalds</h2>
              <p>Batata Frita crocante por fora e macia por dentro. Porção de 700g.</p>
              <h3>R$ 12,80</h3>
              <button type="button" className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
            </div>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="container container-item align-items-center justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <img className="d-block w-100" src={sorvete} alt="First slide"/>
            </div>
            <div className="col-md-6">
              <h2>Sorvete no Copo - Beijo</h2>
              <p>Uma bola de sorvete sortido de sabor tropical. Com cobertura à sua escolha.</p>
              <h3>R$ 5,60</h3>
              <button type="button" className="btn-danger btn">Adicionar<br></br>ao carrinho</button>
            </div>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  </div>
  );
}