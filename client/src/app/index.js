import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/common/Header';
import Nav from '../components/common/Nav';
import {BoardGameList, BoardGameSearch, BoardGameDetail, Home} from '../pages/index.js';
import {UserSignIn, UserSignUp} from '../pages/index.js';

import 'bootstrap/dist/css/bootstrap.min.css'
import '../style/index.css'

function App() {
    return (
        <Router>
            <Header />
            <Nav />
            <Routes>
                {/* Home */}
                <Route path="/" exact element={< Home />} />

                {/* BoardGames */}
                <Route path="/boardgame" >
                    <Route index exact element={< BoardGameDetail />} />
                    <Route path="list" exact element={< BoardGameList />} />
                    <Route path="search" exact element={< BoardGameSearch />} />
                </Route>

                {/* User */}
                <Route path="/user" >
                    <Route index exact element={< UserSignIn />} />
                    <Route path="login" exact element={< UserSignIn />} />
                    <Route path="signup" exact element={< UserSignUp />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App