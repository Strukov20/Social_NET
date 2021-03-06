import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import newsReducer from "./news-reducer";

    let store = {
        _state : {
            profilePage: {
                posts: [
                    { id: "1", message: 'Hi, how are you?', likesCount: '23'},
                    { id: "2", message: 'It`s our new program! Hey!', likesCount: '43'},
                    { id: "3", message: 'Hi, good job!', likesCount: '53'},
                    { id: "4", message: 'Hey, why nobody love me?', likesCount: '13'}
                ],
                newPostText: ''
            },
            dialogsPage: {
                messages: [
                    { id: "1", message: 'Hi, how are you?', isMe: true },
                    { id: "2", message: 'Hi, what are you doing?' },
                    { id: "3", message: 'Hi, how are you?', isMe: true },
                    { id: "4", message: 'Hi, what are you doing?' },
                    { id: "5", message: 'Hi, how are you?', isMe: true },
                    { id: "6", message: 'Hi, what are you doing?' },
                    { id: "7", message: 'Hi, how are you?', isMe: true }
                ],
                newMessageText: '',
                dialogs: [
                    { id: "1", name: 'Buriy Alex' },
                    { id: "2", name: 'Strukov Bohdan' },
                    { id: "3", name: 'Halas Vlad' },
                    { id: "4", name: 'Chykut Vasyl'},
                    { id: "5", name: 'Varga Olena' },
                    { id: "6", name: 'Reddy Oksi' },
                    { id: "7", name: 'Badrub Sanya' },
                    { id: "8", name: 'Kolos Andy' }
                ]
            },
            sidebarPage: {
                sideBar: [
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "1", name: 'Alex', surname: 'Buriy', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "2", name: 'Bohdan', surname: 'Strukov' },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "3", name: 'Vlad', surname: 'Halas', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "4", name: 'Alex', surname: 'Buriy' },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "5", name: 'Bohdan', surname: 'Strukov', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "6", name: 'Vlad', surname: 'Halas', online: true  },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "7", name: 'Alex', surname: 'Buriy', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "8", name: 'Bohdan', surname: 'Strukov' },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "9", name: 'Vlad', surname: 'Halas', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "10", name: 'Alex', surname: 'Buriy' },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "11", name: 'Bohdan', surname: 'Strukov', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "12", name: 'Vlad', surname: 'Halas' },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "13", name: 'Alex', surname: 'Buriy', online: true },
                    { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "14", name: 'Bohdan', surname: 'Strukov', online: true  }
                ]
            },
            newsPage: {
                news: [
                    {   id: "1",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
                        img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" },
                    {   id: "2",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
                        img: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/1-cloudscape-canvas-pixabay.jpg" },
                    {   id: "3",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
                        img: "https://afishanovgorod.ru/wp-content/uploads/2019/09/maxresdefault.jpg" },
                    {   id: "4",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
                        img: "https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Barn-DPSexample.jpg?resize=717%2C478&ssl=1" },
                    {   id: "5",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A cum error fuga praesentium quisquam.Dolore illum incidunt minima modi perferendis.',
                        img: "https://cdn.pixabay.com/photo/2019/09/03/13/17/landscape-4449414_960_720.jpg" },
                ]
            }
        },
        _callSubscriber(){
            console.log('State changed')
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },

        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
            this._state.sideBar = sidebarReducer(this._state.sideBar, action);
            this._state.news = newsReducer(this._state.news, action);

            this._callSubscriber(this._state);
        }
    }

    export default store;
    window.store = store;
