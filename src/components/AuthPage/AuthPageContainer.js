import React from 'react';
import {connect} from "react-redux";
import AuthPage from "./AuthPage";
import {login} from "../../reducers/userReducer";


class AuthPageContainer extends React.Component {
    render () {


        return (
            <AuthPage user = {this.props.user}
                      goBack = {this.props.history.goBack}
                      login = {this.props.login}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.user
    }
};
export default connect(mapStateToProps, {login})(AuthPageContainer);