import ApiConstants from "./ApiConstants"

const api = (path, param, method) => {
    let options;
    options = {
        headers: {
            'Content-Type': 'application/json'
        },
        method: method
    };
    let params = `${param}&api_key=${ApiConstants.API_KEY}`;
    return fetch(ApiConstants.BASE_URL+path+"?"+params)
    .then(response => response.json())
    .then(json => json)
    .catch(error => error);
}

export default api;