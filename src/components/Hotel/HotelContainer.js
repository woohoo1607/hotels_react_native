import React from 'react';
import {connect} from "react-redux";
import Hotel from "./Hotel";

class HotelContainer extends React.Component {
    render () {
        let idHotel = this.props.location.pathname.split("/")[2];
        let selectedHotel = this.props.hotels.hotels.filter(value => value["_id"]===idHotel)[0];
        return (
            <Hotel hotelRooms={selectedHotel.hotelRooms}
                   hotel = {selectedHotel}
                   goBack = {this.props.history.goBack}
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
export default connect(mapStateToProps, {})(HotelContainer);