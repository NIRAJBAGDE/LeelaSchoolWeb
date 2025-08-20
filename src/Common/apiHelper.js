import Axios from 'axios';

const webAPIURL = () => {
    let url = 'http://api.leelasschool.com';
    // if (process.env.NODE_ENV === 'production') {
    //     url = '/api'; //'http://nba.thedigitalgroup.com/api'
    //   }
    //  else if (process.env.NODE_ENV === 'development') {
    //      url = '/api'; //'http://localhost:54954/api'
    //  }  
    // console.log(process.env);

    return url
};


const instance = Axios.create({
    withCredentials: true,
    baseURL: webAPIURL()
})

export default class APIHelper {

    static apiUrl() {
        return webAPIURL();
    }


    static get(url) {

        return new Promise((resolve, reject) => {
            instance
                .get(url)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (typeof error.response === 'undefined') {
                        window.location.href = '/';
                    }
                    reject(error);
                });
        });
    }

    static get(url, obj) {

        return new Promise((resolve, reject) => {
            instance
                .get(url, obj)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (typeof error.response === 'undefined') {
                        window.location.href = '/';
                    }
                    reject(error);
                });
        });
    }

    static post(url, obj) {

        return new Promise((resolve, reject) => {
            instance
                .post(url, obj)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (typeof error.response === 'undefined') {
                        window.location.href = '/';
                    }
                    reject(error);
                });
        });
    }

    static delete(url) {

        return new Promise((resolve, reject) => {
            instance
                .delete(url)
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    if (typeof error.response === 'undefined') {
                        window.location.href = '/';
                    }
                    reject(error);
                });
        });
    }
}

//module.exports = APIHelper;