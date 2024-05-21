import axios from 'axios';
// import showAlert from './alert';

const createAxiosClient = (baseUrl) => {
    const axiosClient = axios.create({
        baseURL: baseUrl,
        timeout: 10000, // Adjust based on your needs
    });

    axiosClient.interceptors.request.use((config) => {
        // Setup common headers
        config.headers['Authorization'] = `Bearer ${localStorage.getItem('abc')}`;
        config.headers['Access-Control-Allow-Origin'] = "true";

        return config;
    }, (error) => {
        // console.error('Request error:', error.message);
        return Promise.reject(error);
    });

    axiosClient.interceptors.response.use((response) => {
        return response;
    }, (error) => {
    //     if (error?.response) {
    //         switch (error?.response?.status) {
    //             case 400:
    //                 showAlert('Bad Request:' + error.response.data.message, 'error');
    //                 break;
    //             case 401:
    //                 showAlert('Unauthorized: Please login again.', 'error');
    //                 break;
    //             case 403:
    //                 showAlert('Forbidden: You do not have permission to access this resource.', 'error');
    //                 break;
    //             case 404:
    //                 showAlert('Not Found: The requested resource could not be found.', 'error');
    //                 break;
    //             case 500:
    //                 showAlert('Internal Server Error: Please try again later.', 'error');
    //                 break;
    //             default:
    //                 showAlert(`API call error: ${error.response.status} - ${error.response.statusText}`, 'error');
    //         }
    //     } else if (error?.request) {
    //         showAlert('API call error: No response received:'+ error.request, 'error');
    //     } else {
    //         showAlert('API call setup error:'+ error.message, 'error');
    //     }
        return Promise.reject(error);
    });

    return axiosClient;
};

export default createAxiosClient;
