import { serviceHandler } from '../utils/serviceHandler';
import { apiurl } from '../config/apiUrl';

const { GetInstructionsView } = apiurl;

export const getParcelByFilter = (payload) => {
  return serviceHandler({
    url: `${GetInstructionsView}`,
    methordType: 'post',
    payload
  });
};
