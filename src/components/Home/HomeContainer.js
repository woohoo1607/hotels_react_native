import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {getMe} from "../../reducers/userReducer"
import {getHotels} from "../../reducers/hotelsReducer";

class HomeContainer extends React.Component {

    componentDidMount() {
        this.props.getMe();
        this.props.getHotels();
    }

    render () {
        return (
            <Home hotels={this.props.hotels}
                  user={this.props.user}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        hotels: state.hotels,
        user: state.user
    }
};
export default connect(mapStateToProps, {getMe, getHotels})(HomeContainer);