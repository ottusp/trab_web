import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from '../../components/Header/Header';
import Carrossel from '../../components/Carrossel/Carrossel';
import ShowProducts from '../../components/ShowProducts/index';
import Footer from '../../components/Footer/index';

import sushi from './sushi.jpg';
import tapioca from './tapioca.jpg';
import cupcake from './cupcake.jpg';
import macarrao from './macarrao.jpg';
import caldo from './caldo.png';
import pizza from './pizza.jpg';
import cookie from './cookie.jpg';
import salada from './salada.jpg';
import espetinho from './espetinho.jpg';

export default function Principal(){
    return (
        <div className="container-principal">
            <Header />
            <Carrossel />
            <ShowProducts 
                img1={cookie}
                title1="Cookies - Loja X"
                description1="Dois cookies de gotas de chocolate, muito crocantes feitos em esetilo americano. Feito com farinha de trigo integral, sem glúten."
                price1="7,50"

                img2={sushi}
                title2="Sushi - Loja Y"
                description2="4 skin maki + 4 kani maki + 4 tortinha cheese + 4 shake garlic + 4 niguiri salmão + 4 niguiri kani + 6 hot filadélfia."
                price2="15,90"

                img3={caldo}
                title3="Caldo - Loja Z"
                description3="Deliciosa e saborosa sopa de abóbora , feita com abobora em creme batida linguiça calabresa defumada e carne de sol desfiada."
                price3="9,00"

                img4={pizza}
                title4="Pizza - Loja X"
                description4="Promoção imperdível: escolha o sabor de uma pizza grande e ganhe de brinde uma para sobremesa."
                price4="38,50"

                img5={cupcake}
                title5="Cupcake - Loja Y"
                description5="Massa de Chocolate, recheada com ganache de morango e um bombom sensação com cobertura de chocolate."
                price5="8,00"

                img6={macarrao}
                title6="Macarrão na Chapa - Loja Z"
                description6="Espaguete, molho vermelho, frango, requeijão cremoso, mussarela, bacon, queijo ralado, finalização na chapa."
                price6="13,70"

                img7={tapioca}
                title7="Tapioca - Loja X"
                description7="Presunto com mozarela com tempero da casa."
                price7="14,50"

                img8={espetinho}
                title8="Espetinho - Loja Y"
                description8="Acompanha 6 Espetos Tradicionais + 4 Espetos Premium."
                price8="12,90"

                img9={salada}
                title9="Salada - Loja Z"
                description9="Alface e tomate cobertos com mussarela e croutons, acompanhada de molho manjericão à parte."
                price9="17,50"
            />
            <Footer />
        </div>
    );
}