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
    console.log(props)
    return (
            <BrowserRouter>
                <div className='wrapper'>
                    <Header />

                    <div className='content-wrapper'>
                        <Navbar />
                        <Route path='/dialogs' render={ () => <Dialogs state={props.state.dialogsPage} /> }/>
                        <Route path='/profile'
                               render={ () => <Profile
                                   profilePage={props.state.profilePage}
                                   addPost={props.addPost}
                                   updateNewPostText={props.updateNewPostText}
                               /> }/>
                        <Route  path='/friends' render={ () => <SideBar state={props.state}/> } />
                        <Route  path='/news' render={ () => <News/> }/>
                        <Route  path='/audio' render={ () => <Music/> }/>
                        <Route  path='/settings' render={ () => <Settings/> }/>
                    </div>
                </div>
            </BrowserRouter>
        )
}

export default App;