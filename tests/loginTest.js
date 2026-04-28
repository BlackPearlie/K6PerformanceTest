import { TEST_CONFIG } from "../config/constants";
import { PAYLOADS } from "../data/payloads";

export const options ={
    vus: TEST_CONFIG.vus,
    duration: TEST_CONFIG.duration
};

export default function loginTest(){
    
    const response = loginRequest(PAYLOADS.login);

    validateLoginResponse(response);
    sleep(TEST_CONFIG.sleepTime);

}