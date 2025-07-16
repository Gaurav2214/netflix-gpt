import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Browse from './Browse';
import Login from './Login';


const Layout = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/browse' element={<Browse />} />
                <Route exact path='/login' element={<Login />} />
            </Routes>
        </React.Fragment>
    )
}

export default Layout
