import {userAPI} from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const IS_AUTH = "IS_AUTH";

let initialState = {
    user: {
        id: 0,
        login: "test",
        firstname: "test",
        secondname: "test",
        patronymic: "test",
        email: null,
        balance: 700
    },
    isAuth: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        {

            return {
                ...state,
                user: action.user
            };
        }
        case IS_AUTH:
        {
            return {
                ...state,
                isAuth: action.isAuth
            };
        }
        default:
            return state;
    }
};

export const setUserData = (user) =>
    ({type: SET_USER_DATA, user: user});
export const isAuth = (isAuth) =>
    ({type: IS_AUTH, isAuth: isAuth});

export const login = (email, password) => (dispatch) => {
    userAPI.login(email, password)
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(isAuth(true));
            }
        })
};

export const getMe = () => (dispatch) => {
    userAPI.me()
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(isAuth(true));
                dispatch(setUserData(response.userData));
            }
        })
};
export const logout = () => (dispatch) => {
    userAPI.logout()
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(isAuth(false));
            }
        })
};

export const updateUser = (cost) => (dispatch) => {
    userAPI.updateUser(cost)
        .then(response => {
            if (response.responseCode === 0) {
                dispatch(isAuth(true));
                dispatch(setUserData(response.userData));
            }
        })
};

export default userReducer;