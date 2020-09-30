import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/news";
import {Music} from "./components/Music/music";
import {Settings} from "./components/Settings/settings";
import {SideBar} from "./components/SideBar/sideBar";


const App = (props) => {
    return (
            <BrowserRouter>
                <div className='wrapper'>
                    <Header />

                    <div className='content-wrapper'>
                        <Navbar />
                        <Route path='/dialogs'
                               render={ () => <Dialogs
                                   store={props.store}
                               /> }/>
                        <Route path='/profile'
                               render={ () => <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}
                               /> }/>
                        <Route  path='/friends' render={ () => <SideBar state={props.state} online={props.online}/> } />
                        <Route  path='/news' render={ () => <News state={props.state}/> }/>
                        <Route  path='/audio' render={ () => <Music/> }/>
                        <Route  path='/settings' render={ () => <Settings/> }/>
                    </div>
                </div>
            </BrowserRouter>
        )
}

export default App;