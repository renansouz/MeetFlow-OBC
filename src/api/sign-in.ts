import { api } from '.';

export interface SignInBody {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: string;
}

export async function signIn({ name, email, password, passwordConfirmation, role }: SignInBody) {
    try {
        const res = await api.post('/auth/signup', { name, email, password, passwordConfirmation, role });
        return res.data;
    } catch (error) {
        throw error;
    }
}
