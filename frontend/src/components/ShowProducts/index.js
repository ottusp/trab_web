import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from '../../components/Card/index';

import './style.css';

export default function ShowProducts(props){
    return (
            <div className="container container-div">
                <div className="row">
                    <div className="col-md-4">
                        <Card   
                        img={props.img1}
                        title={props.title1}
                        description={props.description1}
                        price={props.price1}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img2}
                        title={props.title2}
                        description={props.description2}
                        price={props.price2}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img3}
                        title={props.title3}
                        description={props.description3}
                        price={props.price3}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card   
                        img={props.img4}
                        title={props.title4}
                        description={props.description4}
                        price={props.price4}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img5}
                        title={props.title5}
                        description={props.description5}
                        price={props.price5}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img6}
                        title={props.title6}
                        description={props.description6}
                        price={props.price6}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <Card   
                        img={props.img7}
                        title={props.title7}
                        description={props.description7}
                        price={props.price7}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img8}
                        title={props.title8}
                        description={props.description8}
                        price={props.price8}
                        />
                    </div>
                    <div className="col-md-4">
                        <Card   
                        img={props.img9}
                        title={props.title9}
                        description={props.description9}
                        price={props.price9}
                        />
                    </div>
                </div>
            </div>  
    );
}
