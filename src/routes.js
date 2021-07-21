import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from "react-router-dom";

// Components
import SideBar from './components/SideBar'

// Pages
import ClientScreen from './pages/ClientScreen'
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen'

export default function Routes() {
    return (
        <BrowserRouter>
            <div className="browser-container">
                <SideBar />
                <Switch>
                    <Route exact path="/">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/clients">
                        <ClientScreen />
                    </Route>
                    <Route exact path="/products">
                        <ProductScreen />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    )
}
