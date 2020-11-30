import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const GET_USER_PROFILE = 'GET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
        posts: [
            { id: "1", message: 'Hi, how are you?', likesCount: '23'},
            { id: "2", message: 'It`s our new program! Hey!', likesCount: '43'},
            { id: "3", message: 'Hi, good job!', likesCount: '53'},
            { id: "4", message: 'Hey, why nobody love me?', likesCount: '13'}
        ],
        profile: null,
        status: ""
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                posts: [...state.posts, {id: 5, message: action.newPostText, likesCount: 0}]
            };
        }
        case GET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const getUserProfile = (profile) => ({type: GET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId)
        dispatch(getUserProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}
export default profileReducer;
