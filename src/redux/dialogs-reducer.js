const ADD_MESSAGE  = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newWord
            };
        case ADD_MESSAGE:
            const newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 10, message: newMessage, isMe: true}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator = (newWord) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newWord: newWord})

export default dialogsReducer;