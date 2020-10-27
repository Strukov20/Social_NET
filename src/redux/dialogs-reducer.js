const ADD_MESSAGE  = 'ADD-MESSAGE';

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
        case ADD_MESSAGE:
            const newMessage = action.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: newMessage, isMe: true}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})


export default dialogsReducer;