import {addMessageActionCreator, UpdateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from 'react-redux';
import './Dialogs.scss'


let mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        UpdateNewMessageText: (newWord) => {
            dispatch(UpdateNewMessageTextActionCreator(newWord));
            },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
            }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;