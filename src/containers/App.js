import React from 'react';
import './App.scss';
import history from '../actions/history';

import { Router, Switch, Route, Redirect } from "react-router-dom"

import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'

import Movie from './Movie'
import Search from './Search'
import Discover from './Discover'


const App = () => {

    return (

      <Router history={history}>
      <div id="app">

        <SiteHeader />

        <div id="page">

          <section id="main-content">
            
                <Switch>
                    <Route
                      path={process.env.PUBLIC_URL + '/'}
                      exact
                      render={() => (
                        <Redirect
                          from={process.env.PUBLIC_URL + '/'}
                          to={process.env.PUBLIC_URL + '/discover/'}
                        />
                      )}
                    />
                    <Route path={process.env.PUBLIC_URL + '/search/:query'} exact component={Search} />
                    <Route path={process.env.PUBLIC_URL + '/movie/:id'} exact component={Movie} />
                    <Route path={process.env.PUBLIC_URL + '/discover/'} component={Discover} />
                </Switch>
            
          </section>

        </div>

        <Footer />

      </div>
      </Router>

    );
  

}

export default App;
