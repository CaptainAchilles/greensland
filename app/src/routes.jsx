import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./header";
import Layout from "./layout";
import Main from "./pages/main";
import Map from "./pages/map";
import VR from "./pages/vr";
import NoMatch from "./pages/noMatch";

export default () => (
    <BrowserRouter>
        <Layout>
            <Route path="/" component={Header} />
            <Switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/map" component={Map} />
                <Route exact path="/vr" component={VR} />
                <Route component={NoMatch} />
            </Switch>
        </Layout>
    </BrowserRouter>
);
