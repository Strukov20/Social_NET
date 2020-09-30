const ADD_MESSAGE  = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const newMessage = {
                id: 8,
                message: state.newMessageText,
                isMe: true
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newWord;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () =>
    ({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator = (newWord) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newWord: newWord})

export default dialogsReducer;