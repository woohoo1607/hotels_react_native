import React from 'react';
import {connect} from "react-redux";
import Home from "./Home";
import {getMe} from "../../reducers/userReducer"
import {getHotels} from "../../reducers/hotelsReducer";
import * as Font from "expo-font";
import { Ionicons } from '@expo/vector-icons';

class HomeContainer extends React.Component {

    async componentDidMount() {
        await Font.loadAsync({
            FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
            'Roboto_medium': require("native-base/Fonts/Roboto_medium.ttf"),
            ...Ionicons.font
        });
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