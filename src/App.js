import React from 'react'
import './App.css'

import AOS from 'aos';
import 'aos/dist/aos.css';

import Home from './components/Home'
import Menu from './components/Menu'
import About from './components/About'
import Events from './components/Events'
import Team from './components/Team'
import GettingStarted from './components/GettingStarted'

const App = () => {
    AOS.init()
    return (
        <div>
            <Menu />
            <Home />
            <About />
            <GettingStarted />
            <Team />
            <Events />
        </div>
    )
}

export default App
