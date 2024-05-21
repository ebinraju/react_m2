import showAlert from './alert';
import axios from './axios';

export const serviceHandler = ({ url, payload, methordType = 'get', options }) => {
  return axios[methordType](`${url}`, payload, options)
    .then((response) => {
      if (response.status === 200) return { success: true, data: response.data };
      return { success: false };
    })
    .catch((error) => {
      if (error?.response && error?.response?.config?.method !== 'get') {
        switch (error.response.status) {
          case 500:
            showAlert('Internal Server Error', 'error');
            break;
          case 402:
            showAlert(error.response.data);
            break;
          case 401:
            localStorage.clear();
            window.location.assign('/unauthorized');
            break;
          case 404:
            showAlert('Something went wrong.', 'error');
            break;
          case 400:
            showAlert(error?.response?.data?.title || 'Something went wrong.', 'error');
            break;
          case 422:
            if (error.config.responseType === 'blob') {
              new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                  resolve(JSON.parse(reader.result));
                };

                reader.onerror = () => {
                  reject(error);
                };

                reader.readAsText(error.response.data);
              })
                .then((data) => showAlert(data?.Message || 'Something went wrong', 'error'))
                .catch(() => showAlert('Something went wrong', 'error'));
            } else {
              showAlert(error?.response?.data?.Message || 'Something went wrong', 'error');
            }
            break;
          default:
            break;
        }
      }
      return { success: false, error };
    });
};
