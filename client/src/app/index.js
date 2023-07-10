import React from 'react'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';

import { NavBar } from '../components'
import { BoardGameList, BoardGameSearch } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/boardgame/list" exact element={<BoardGameList />} />
                <Route path="/boardgame/search" exact element={BoardGameSearch} />
            </Routes>
        </Router>
    )
}

export default App