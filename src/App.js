import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {SideBar} from "./components/SideBar/sideBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/news";


const App = () => {
    return (
            <BrowserRouter>
                <div className='wrapper'>
                    <Header />
                    <div className='content-wrapper'>
                        <Navbar />
                        <Route path='/profile' render={ () => <Profile /> }/>
                        <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                        <Route  path='/friends' render={ () => <SideBar /> } />
                        <Route  path='/news' render={ () => <News /> }/>
                        <Route  path='/audio' render={ () => <Music /> }/>
                        <Route  path='/settings' render={ () => <Settings /> }/>
                    </div>
                </div>
            </BrowserRouter>
        )
}

export default App;