import http from 'k6/http';
import { TEST_CONFIG } from "../config/constants.js";
import { PAYLOADS } from "../data/payloads.js";
import { loginRequest } from "../requests/authRequest.js";
import { validateLoginResponse } from "../validations/authChecks.js";
import { getProfileRequest } from "../requests/getProfileRequest.js";
import { validateProfileResponse } from "../validations/authChecks.js";
import { testimonialRequest } from "../requests/testimonialRequest.js";
import { validateTestimonialResponse } from "../validations/authChecks.js";
import { sleep } from "k6";

export const options ={
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration
};

export default function testProfile(){
    
    const response = loginRequest(PAYLOADS.login);
    const token = response.json().data.token; //get token from response body    


    console.log('response status: ', response.status);
    console.log('response body: ', response.body);
    validateLoginResponse(response);
     
    //Profile request with token
    const profileResponse = getProfileRequest(token);
    console.log('PROFILE response status: ', profileResponse.status);
    console.log('PROFILE response body: ', profileResponse.body);
    console.log('PROFILE token: ', token);
    validateProfileResponse(profileResponse);

    //Testimonial request with token (if needed, you can implement this part similarly to the profile request)
    const testimonialResponse = testimonialRequest(token, PAYLOADS.testimonials);
    console.log('TESTIMONIAL response status: ', testimonialResponse.status);
    console.log('TESTIMONIAL response body: ', testimonialResponse.body);
    validateTestimonialResponse(testimonialResponse);


    sleep(TEST_CONFIG.sleepTime);



}