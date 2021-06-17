
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminDashboard from './pages/AdminDashboard/index';
import Principal from './pages/Principal/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/admin/home" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    );
}