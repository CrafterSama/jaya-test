import React from 'react';
import NavBar from 'components/NavBar';
import GraphGenerator from './components/GraphGenerator';
import Posts from './components/Posts';

const App = () => (
    <div className="App">
        <div className="container">
            <NavBar />
            <GraphGenerator />
            <Posts />
        </div>
    </div>
);
export default App;
