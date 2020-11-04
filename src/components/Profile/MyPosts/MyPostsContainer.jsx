import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return{
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newText) => {
            dispatch(addPostActionCreator(newText));
        }
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps)(MyPosts));

