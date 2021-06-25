import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';

import Header from '../../components/Header/Header';
import Carrossel from '../../components/Carrossel/Carrossel';

export default function Principal(){
    return (
        <div className="container-principal">
            <Header />
            <Carrossel />
        </div>
    );
}