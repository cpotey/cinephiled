import React, { Component } from 'react';
import './App.scss';

import { BrowserRouter, Switch, Route, Redirect, Link } from "react-router-dom"

import { searchMovies } from '../actions/index';

import SearchForm from '../components/SearchForm'

import Movie from './Movie'
import Search from './Search'
import Discover from './Discover'

class App extends Component {

  constructor(props) {
    super(props)
    // this.state = {
    //   query: ''
    // }    
    this.searchMovies = searchMovies.bind(this);
  }


  render() {
    
    return (
      <div id="app">

        <header id="header">
          <a href={process.env.PUBLIC_URL + '/'}>
          Home</a>
          <SearchForm />
        </header>

        <div id="page">

          <aside id="sidebar">
            <p>Sidebar</p>
          </aside>

          <section id="main-content">
            <BrowserRouter>
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
            </BrowserRouter>
          </section>

        </div>

      </div>
    );
  }

}

export default App;
