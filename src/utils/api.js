import { getSettings } from './fetchSettings';
import { endpoints, url } from './../constants/enums/url';

const apiURLConstructor = baseURL => extension => baseURL + extension;
let baseUrl = url; //DEFAULT URL IS DEVELOPMENT

const ruApi = apiURLConstructor(baseUrl);

export const getQueens = () => () => {
  return fetch(ruApi(`${endpoints.allQueens}`), getSettings());
};

export const getCongeniality = () => () => {
  return fetch(ruApi(`${endpoints.congeniality}`), getSettings());
};

export const getWinners = () => () => {
  return fetch(ruApi(`${endpoints.winners}`), getSettings());
};

export const getSeason = season => () => {
  return fetch(ruApi(`${endpoints.season}${season}`), getSettings());
};
