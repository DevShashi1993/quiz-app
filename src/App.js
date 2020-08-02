import React from "react";
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import Quiz from "./components/Quiz/Quiz";
import Result from "./components/Result/Result"
import './custom.css'


export default () => (
    <Layout>
        <Route exact path='/' component={Quiz} />
        <Route path='/counter' component={Counter} />
        <Route path='/result' component={Result} />
    </Layout>
);
