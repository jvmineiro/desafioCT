import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from '../template/menu'
import Menu from '../template/menu' 

export default props => (
    <div className='container'>
        <Menu />
        <Routes />
    </div>
) 