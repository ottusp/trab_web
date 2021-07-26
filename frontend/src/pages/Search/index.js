import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from "query-string"
import './style.css';

import Header from '../../components/Header/Header';
import ShowProducts from '../../components/ShowProducts/index';
import Footer from '../../components/Footer/index';
import api from '../../services/api';

export default function Search(props){
    const [products, setProducts] = useState([]);
    const [searched, setSearched] = useState("");

    useEffect(async () => {
        try {
            setSearched(props.match.params.name);
            var res = await api.get(`/product/?name=${props.match.params.name}`);
            console.log('response: ', res.data);
        } catch (e) {
            console.log('erro no get: ', e);
        }
        var tempArray = [];
        while(res.data.length!=0){
            tempArray.push(res.data.splice(0,3));
        }
        setProducts (tempArray);
    }, []);


    return (
        <div className="container-principal">
            <Header />
            <div className="container container-title">Resultados para a pesquisa de <b>{searched}</b>:</div>
            {   
                products.map((item) => (
                    <ShowProducts info={item} />
                ))
            }
            <Footer />
        </div>
    );
}