import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Navbar from "./components/Navbar";
import Alert from "./components/common/Alert";
import AlertState from "./context/alert/AlertState";
import FirebaseState from "./context/firebase/FirebaseState";

const App = () =>
        <FirebaseState>
        <AlertState>
            <BrowserRouter>
                <Navbar/>
                <Alert />
                <div className="container">
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        </AlertState>
        </FirebaseState>

export default App;
