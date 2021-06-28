import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

export default function Footer(props) {

    return (
        <footer className="rodape container">
            <h3>Hungry Points</h3>
            <p className="autoria">Made by Larissa, Lucas and Otto</p>
        </footer>
    );
}