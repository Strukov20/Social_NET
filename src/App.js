import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Route, withRouter} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/settings";
import {SideBar} from "./components/SideBar/sideBar";
import News from "./components/News/news";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {Provider, connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='wrapper'>
                <HeaderContainer/>
                <div className='content-wrapper'>
                    <Navbar/>
                    <Route path='/profile/:userId?' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                                    <ProfileContainer/>
                               </React.Suspense>}}/>
                    <Route path='/dialogs' render={() => {
                        return <React.Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer/>
                               </React.Suspense>}}/>
                    <Route path='/friends' render={() => <SideBar/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/audio' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = () => {
    return <HashRouter>
                <Provider store={store}>
                    <AppContainer />
                </Provider>
            </HashRouter>
}

export default SamuraiJSApp;
