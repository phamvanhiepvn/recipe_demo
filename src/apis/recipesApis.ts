import httpClient from '.';

const API_PATH = 'recipes';

export const getAll = () => httpClient.get(API_PATH);
