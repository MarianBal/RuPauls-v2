import { getSettings } from './fetchSettings';
import { endpoints, url } from './../constants/enums/url';

const apiURLConstructor = baseURL => extension => baseURL + extension;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT
if (window._CONFIG_) {
  baseUrl = window._CONFIG_.API_URL;
}
const inOfficeApi = apiURLConstructor(baseUrl);

export const getQueens = () => () => {
  return fetch(inOfficeApi(`${endpoints.allQueens}`), getSettings());
};
