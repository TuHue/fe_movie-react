import React from "react";

import { Route, Switch } from 'react-router-dom';
import { PHome, PCatalog, PDetail } from '../pages';

function CRoutes() {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component={PCatalog}
            />
            <Route
                path='/:category/:id'
                component={PDetail}
            />
            <Route
                path='/:category'
                component={PCatalog}
            />
            <Route
                path='/'
                exact
                component={PHome}
            />
        </Switch>
    )
}

export default CRoutes;