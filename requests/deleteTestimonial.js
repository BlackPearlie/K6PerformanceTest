import http from 'k6/http';
import { URLS } from '../config/urls.js';
import { check } from 'k6'
export function deleteTestimonialRequest(token, testimonialID){
    const url = `${URLS.testimonial}/${testimonialID}`; 
    const params = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };          
    return http.del(url, null, params);
}