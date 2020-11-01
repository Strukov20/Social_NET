import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/settings";
import {SideBar} from "./components/SideBar/sideBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/news";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";


const App = () => {
    return (
            <BrowserRouter>
                <div className='wrapper'>
                    <HeaderContainer />
                    <div className='content-wrapper'>
                        <Navbar />
                        <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
                        <Route path='/dialogs' render={ () => <DialogsContainer /> }/>
                        <Route path='/friends' render={ () => <SideBar /> } />
                        <Route path='/news' render={ () => <News /> }/>
                        <Route path='/audio' render={ () => <Music /> }/>
                        <Route path='/settings' render={ () => <Settings /> }/>
                        <Route path='/users' render={ () => <UsersContainer /> }/>
                        <Route path='/login' render={ () => <Login /> }/>
                    </div>
                </div>
            </BrowserRouter>
        )
}

export default App;