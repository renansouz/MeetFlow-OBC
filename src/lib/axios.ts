import axios from 'axios';
import Cookies from 'js-cookie';

export function setupAPIClient() {
    const token = Cookies.get('meetFlow.token');
    const api = axios.create({
        baseURL: 'http://localhost:3333/api',
        headers: { authorization: `Bearer ${token}` },
    });
    return api;
}

export const api = setupAPIClient();
