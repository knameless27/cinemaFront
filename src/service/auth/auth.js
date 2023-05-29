const paginaCustom = (data) => {
    return new Promise((resolve, reject) => {
        const token = localStorage.getItem('accessToken');
        const headers = {
            Authorization: `Bearer ${token}`
        };
        axios
            .post(`${import.meta.env.VITE_APP_BACK}/ver_caja_global`, data, {
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
    paginaCustom
};
