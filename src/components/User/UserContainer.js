import React from 'react';
import {connect} from "react-redux";
import User from "./User";
import {logout} from "../../reducers/userReducer";

class UserContainer extends React.Component {

    render () {
        return (
            <User user={this.props.user}
                  goBack = {this.props.history.goBack}
                  logout = {this.props.logout}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, {logout})(UserContainer);