import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './style.css';
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import burguer from './burguer.jpg';
import batata from './batata.jpg';
import sorvete from './sorvete.jpg';


export default function Carroussel() {
  return (
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={burguer} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={batata} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={sorvete} class="d-block w-100" alt="..." />
    </div>
  </div>
</div>
  );
}