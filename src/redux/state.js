import {rerenderEntireTree} from "../render";

let state = {
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
    sideBar: [
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "1", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "2", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "3", name: 'Vlad', surname: 'Halas' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "4", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "5", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "6", name: 'Vlad', surname: 'Halas' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "7", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "8", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "9", name: 'Vlad', surname: 'Halas' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "10", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "11", name: 'Bohdan', surname: 'Strukov' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "12", name: 'Vlad', surname: 'Halas' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "13", name: 'Alex', surname: 'Buriy' },
        { img: "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg", id: "14", name: 'Bohdan', surname: 'Strukov' }
    ]
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export default state;