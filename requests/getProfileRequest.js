
import http from 'k6/http';
import { URLS } from '../config/urls.js';
import { check } from 'k6'
export function getProfileRequest(token){
    const url = URLS.userProfile;

    const params = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    return http.get(url, params);
}