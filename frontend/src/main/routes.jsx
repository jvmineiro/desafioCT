import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Desafio from '../desafio/desafio'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/desafio' component={Desafio} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/desafio' />
    </Router>
)