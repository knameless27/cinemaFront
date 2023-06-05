import axios from "axios";

const login = (data) => {
    return new Promise((resolve, reject) => {
        // const token = localStorage.getItem('accessToken');
        const headers = {
            // Authorization: `Bearer ${token}`
        };
        axios
            .post(`${import.meta.env.VITE_APP_BACK}auth/login`, data, {
                headers: headers
            })
            .then((resp) => {
                resolve(resp.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

const register = (data) => {
    return new Promise((resolve, reject) => {
        // const token = localStorage.getItem('accessToken');
        const headers = {
            // Authorization: `Bearer ${token}`
        };
        axios
            .post(`${import.meta.env.VITE_APP_BACK}auth/register`, data, {
                headers: headers
            })
            .then((resp) => {
                resolve(resp.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export default {
    login,
    register
};
