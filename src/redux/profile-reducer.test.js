import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import ReactDOM from "react-dom";
import App from "../App";

let state = {
    posts: [
        { id: "1", message: 'Hi, how are you?', likesCount: '23'},
        { id: "2", message: 'It`s our new program! Hey!', likesCount: '43'},
        { id: "3", message: 'Hi, good job!', likesCount: '53'},
        { id: "4", message: 'Hey, why nobody love me?', likesCount: '13'}
    ]
};

it('length of posts should be incremented', () => {
    // 1. test data
    let action = addPostActionCreator("new test completed");


    // 2. action
    let newState = profileReducer(state, action);

    // 3 expected result
    expect(newState.posts.length).toBe(5);
});

it('message of new post should be new test completed', () => {
    // 1. test data
    let action = addPostActionCreator("new test completed");

    // 2. action
    let newState = profileReducer(state, action);

    // 3 expected result
    expect(newState.posts[4].message).toBe("new test completed");
});

it('after deleting length of messages should be decrement', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3 expected result
    expect(newState.posts.length).toBe(3);
});

it('after deleting length should`t be decrement if id is incorrect', () => {
    // 1. test data
    let action = deletePost(1000);

    // 2. action
    let newState = profileReducer(state, action);

    // 3 expected result
    expect(newState.posts.length).toBe(4);
});

