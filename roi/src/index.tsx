import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'

import { Home, AuthModal, Properties, RegisterModal } from './Components'; 
import './index.css'
import {theme} from './Theme/themes'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme = {theme}>
            <Router>
                <Routes>
                    <Route path='/' element = {<Home title = {'ROI Calculator'}/>} />
                    <Route path='/auth' element = {<AuthModal/>} />
                    <Route path='/properties' element = {<Properties/>} />
                    <Route path='/register' element = {<RegisterModal/>} />
                </Routes>
            </Router>
        </ThemeProvider>
    </React.StrictMode>
)
