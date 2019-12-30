import * as axios from 'axios';
import qs from 'qs';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://bb98916d.ngrok.io',
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});


export const userAPI = {
    me() {
        return instance.get(`auth/me`).then(response => {
            return response.data;
        })
    },

    login(login, password) {
        let data = qs.stringify({login, password});
        return instance.post(`auth/login`, data).then(response => {
            return response.data;
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data;
        })
    },
    updateUser(cost) {
        let data = qs.stringify(cost);
        return instance.put('user', data).then(response => {
            return response.data
        });
    }
};

export const hotelsAPI = {
    getHotels() {
        return instance.get(`hotels`).then(response => {
            return response.data;
        })
    },
    updateHotels(hotel) {
        let data = qs.stringify(hotel);
        return instance.put('hotelroom', data).then(response => {
           return response.data
        });
    }
};