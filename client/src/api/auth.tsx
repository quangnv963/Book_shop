import { IUsers } from "../types";
import instance from "./instance";
import { AxiosResponse } from 'axios'


export const SignGoogle = async (res?:any) => {
    const token = res.credential;
    try {
        const response : AxiosResponse<IUsers[]> = await instance.post('/signupgg', {token})
        console.log('Server Response:', response.data);
        return response.data || []
    } catch (error) {
        console.log('SIGN_GOOGLE_ERROR', error)
    }
}

