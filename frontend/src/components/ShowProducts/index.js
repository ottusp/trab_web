import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../../components/Card/index';
import './style.css';
//organise the received products from server in rows of three columns
export default function ShowProducts(props){
    return (
            <div className="container container-div">
                <div className="row">
                    {
                        props.info?.map((item) => (
                            <div className="col-md-4">
                                <Card info={item} /> 
                            </div>
                        ))
                    }
                </div>
            </div>  
    );
}
