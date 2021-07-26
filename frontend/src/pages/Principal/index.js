import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import api from '../../services/api';
import './style.css';

import Header from '../../components/Header/Header';
import Carrossel from '../../components/Carrossel/Carrossel';
import Footer from '../../components/Footer/index';
import ShowProducts from '../../components/ShowProducts';

export default function Principal(){
    const [products, setProducts] = useState([]);
    const [carrosselProduct, setCarrosselProduct] = useState([]);
    //const ids = [products[0]._id];
    
    useEffect(async () => {
        try {
            var res = await api.get('/product/');
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
    

    useEffect(async () => {
        try {
            var res = await api.get(`/product/?id=${products}`);
            console.log('response: ', res.data);
            setCarrosselProduct (res.data);
        } catch (e) {
            console.log('erro no get: ', e);
        }
    }, []);

    return (
        <div className="container container-principal">
            <Header />
            <Carrossel 
                products = {carrosselProduct}
            />

            {   
                products.map((item) => (
                    <ShowProducts info={item} />
                ))
            }

            <Footer />
        </div>
    );
}