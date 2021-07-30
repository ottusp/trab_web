
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminDashboard from './pages/AdminDashboard/index';
import Principal from './pages/Principal/index';
import Product from './pages/Product/index';
import Search from './pages/Search/index';
import Login from './pages/Login/index';
import LoginAdmin from './pages/LoginAdmin/index';
import Cadastro from './pages/Cadastro/index';
import CadastroAdmin from './pages/CadastroAdmin/index';


// Page routes
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/admin/home" exact component={AdminDashboard} />
                <Route path="/product/:id" exact component={Product} />
                <Route path="/search/:name" exact component={Search} />
                <Route path="/login" exact component={Login} />
                <Route path="/cadastro" exact component={Cadastro} />
                <Route path="/cadastroAdmin" exact component={CadastroAdmin} />
                <Route path="/loginAdmin" exact component={LoginAdmin} />
            </Switch>
        </BrowserRouter>
    );
}