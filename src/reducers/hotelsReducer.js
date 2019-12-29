import {hotelsAPI} from "../api/api";

const SET_HOTELS_DATA = "SET_HOTELS_DATA";
const UPDATE_HOTEL_DATA = "UPDATE_HOTEL_DATA";

let initialState = {
  hotels: []
};

const hotelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HOTELS_DATA:
        {
            return {
                ...state,
                hotels: [...action.hotels]
            };
        }
        case UPDATE_HOTEL_DATA:
        {
            let newHotelData = [...state.hotels];
            let objIndex = newHotelData.findIndex(obj => obj._id === action.hotel._id);
            newHotelData[objIndex] = action.hotel;
            return {
                ...state,
                hotels: [...newHotelData]
            };
        }
        default:
            return state;
    }
};

export const setHotelsData = (hotels) =>
    ({type: SET_HOTELS_DATA, hotels: hotels});
export const updatetHotelData = (hotel) =>
    ({type: UPDATE_HOTEL_DATA, hotel: hotel});

export const getHotels = () => (dispatch) => {
    hotelsAPI.getHotels()
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(setHotelsData(response.hotels));
            }
        })
};
export const updateHotels = (hotel) => (dispatch) => {
    hotelsAPI.updateHotels(hotel)
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(updatetHotelData(response.hotel));
            }
        })
};

export default hotelsReducer;