import axios from 'axios';
import { AxiosError } from 'axios';

const token = sessionStorage.getItem('refreshToken');

type getUserDataProps = {
    isAuth:boolean;
}

export const getUserData = async ({isAuth}:getUserDataProps) => {
    console.log(token);
    if (isAuth) {
        try {
            const res = await axios.get(`${import.meta.env.BASE_URL}/account/user`, {headers:{'RefreshToken':token}});
            console.log(res);
        } catch (error) {
            if (error instanceof AxiosError) {
                console.log(error);
            }
        }
    }
};
