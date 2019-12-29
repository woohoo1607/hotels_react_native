import React from 'react';
import {connect} from "react-redux";
import HotelRoom from "./HotelRoom";
import {updateUser} from "../../reducers/userReducer";
import {updateHotels} from "../../reducers/hotelsReducer";

class HotelRoomContainer extends React.Component {
    render () {
        let idHotel = this.props.location.pathname.split("/")[2];
        let idHotelRoom = this.props.location.pathname.split("/")[4];
        let selectedHotel = this.props.hotels.hotels.filter(value => value["_id"]===idHotel)[0];
        let selectedHotelRoom = selectedHotel.hotelRooms.filter(value => value["_id"]===idHotelRoom)[0];

        return (
            <HotelRoom hotelRoom = {selectedHotelRoom}
                       hotel = {selectedHotel}
                       goBack = {this.props.history.goBack}
                       userBalance = {this.props.user.user.balance}
                       idHotel = {idHotel}
                       idHotelRoom = {idHotelRoom}
                       updateHotels={this.props.updateHotels}
                       updateUser={this.props.updateUser}
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
export default connect(mapStateToProps, {updateHotels, updateUser})(HotelRoomContainer);