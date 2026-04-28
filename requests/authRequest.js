
import http from 'k6/http';
import { URLS } from '../config/urls.js';
im
export function loginRequest(payload)
{
    const url = URLS.login;
    const body = JSON.stringify(payload);

    return http.post(url,body);
}