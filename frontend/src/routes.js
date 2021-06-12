
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AdminDashboard from './pages/AdminDashboard/index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={AdminDashboard} />
            </Switch>
        </BrowserRouter>
    );
}