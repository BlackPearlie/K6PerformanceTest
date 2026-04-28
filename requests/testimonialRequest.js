import http from 'k6/http';
import { URLS } from '../config/urls.js';
import { check } from 'k6'

export function testimonialRequest(token, payload){
   const url = URLS.testimonial;
   const params = {
        headers: {
            'Authorization': `Bearer ${token}`
        }

    };
    return http.post(url, JSON.stringify(payload), params);

}