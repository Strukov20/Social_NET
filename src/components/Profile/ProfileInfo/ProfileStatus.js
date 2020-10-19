import React, {Component} from 'react';

class ProfileStatus extends Component {

    state = {
        editMode: false
    }

    activateEditMode () {
        this.setState( {
            editMode: true
        } )
    }
    deactivateEditMode () {
        this.setState( {
            editMode: false
        } )
    }

    render() {
        return (
            <div className="profile_status_wrapper">
                {!this.state.editMode &&
                    <div className="profile_status">
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={ this.deactivateEditMode.bind(this) } type="text" value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;