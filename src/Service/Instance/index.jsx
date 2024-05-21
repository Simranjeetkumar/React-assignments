import axios from "axios";
import LocalStorageService from "../LocalStorageService";
const instance = axios.create({
    // LocalStorageService.getAccessToken() baseURL :'http://localhost:3051',LocalStorageService.getAccessToken()
    
    // timeout:2000,
    headers:{"Authorization":`Bearer ${LocalStorageService.getAccessToken()}`}
})
export default instance;