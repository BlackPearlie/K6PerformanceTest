import { check } from "k6";

export function validateLoginResponse(response){
   return check(response, 
    {
        'Status is 200': (response) => response.status === 200,
        'Body not empty': (response) => response.body.length > 0,
    });
}

export function validateProfileResponse(response){
    return check(response, 
     {
         'Status is 200': (response) => response.status === 200,
         'Body not empty': (response) => response.body.length > 0,
     });
 }

export function validateTestimonialResponse(response){
    return check(response, 
     {
         'Status is 201': (response) => response.status === 201,
         'Body not empty': (response) => response.body.length > 0,
     });
 }

 export function validateUpdateTestimonialResponse(response){
    return check(response, 
     {
         'Status is 200': (response) => response.status === 200,
         'Body not empty': (response) => response.body.length > 0,
     });
 }  

 export function validateDeleteTestimonialResponse(response){
    return check(response, 
     {
         'Status is 200': (response) => response.status === 200,
         'Body not empty': (response) => response.body.length > 0,
     });
 }  
