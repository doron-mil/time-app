import React from 'react';

import {BrowserRouter as Router} from "react-router-dom";
import './App.scss';
import Main from './main/main';
import Nav from './nav/nav';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Nav height={10}></Nav>
                <Main height={90}> </Main>
            </Router>
        </div>
    );
};

export default App;
