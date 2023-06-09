import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactPage from './ContactPage';
import ChartsAndMapPage from './ChartsAndMapPage';


function MainPage() {
    let header = "Contact Manager"
    if (window.location.pathname === '/') {
        header = "Contact Manager"
    } else {
        header = "Charts and Maps"
    }
    return (
        <div className='mainPage'>
            <div className='header'>
                {header}
            </div>
            <div className='mainContainer'>
                <section className='navSection'>
                    <a href="/">Contact Page</a>
                    <a href="/map">Map Page</a>
                </section>
                <section className='dataSection'>
                    <Router>
                        <Routes>
                            <Route path='/' element={<ContactPage />}></Route>
                            <Route path='/map' element={<ChartsAndMapPage />}></Route>
                        </Routes>
                    </Router>
                </section>
            </div>

        </div>
    )
}

export default MainPage