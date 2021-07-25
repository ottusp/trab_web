import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/index';
import ShowProducts from '../../components/ShowProducts/index';
import Footer from '../../components/Footer/index';
import api from '../../services/api';

export default function Search(){
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const prod = location?.state?.detail;

    useEffect(async () => {
        try {
            const res = await api.get(`/product/${prod}`);
            console.log('response: ', res.data);

            setProducts(res.data);
        } catch (e) {
            console.log('erro no get: ', e);
        }
    }, []);


    return (
        <div className="container-principal">
            <Header />
            <div className="container container-title">Resultados para a pesquisa de <b>{prod}</b>:</div>
            {
                products.map((item) => (
                    <Card id={item._id} info={item} />
                ))
            }
            {/* <ShowProducts 
                img1={sushi}
                title1="Sushi"
                description1="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price1="15,90"

                img2={sushi}
                title2="Sushi"
                description2="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price2="15,90"

                img3={sushi}
                title3="Sushi"
                description3="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price3="15,90"

                img4={sushi}
                title4="Sushi"
                description4="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price4="15,90"

                img5={sushi}
                title5="Sushi"
                description5="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price5="15,90"

                img6={sushi}
                title6="Sushi"
                description6="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price6="15,90"

                img7={sushi}
                title7="Sushi"
                description7="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price7="15,90"

                img8={sushi}
                title8="Sushi"
                description8="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price8="15,90"

                img9={sushi}
                title9="Sushi"
                description9="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price9="15,90"
            /> */}
            <Footer />
        </div>
    );
}