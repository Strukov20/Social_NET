const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
        posts: [
            { id: "1", message: 'Hi, how are you?', likesCount: '23'},
            { id: "2", message: 'It`s our new program! Hey!', likesCount: '43'},
            { id: "3", message: 'Hi, good job!', likesCount: '53'},
            { id: "4", message: 'Hey, why nobody love me?', likesCount: '13'}
        ],
        newPostText: '',
        profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            const newPost = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 5, message: newPost, likesCount: 0}]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPostTextActionCreator = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText: newText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;