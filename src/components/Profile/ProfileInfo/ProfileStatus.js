import React, {Component} from 'react';

class ProfileStatus extends Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode: true
        } )
    }
    deactivateEditMode = () => {
        this.setState( {
            editMode: false
        } )
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
       this.setState({
           status: e.currentTarget.value
       })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className="profile_status_wrapper">
                {!this.state.editMode &&
                    <div className="profile_status">
                        <span onDoubleClick={ this.activateEditMode }>{this.props.status || "No STATUS"}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={ this.deactivateEditMode } type="text" value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;