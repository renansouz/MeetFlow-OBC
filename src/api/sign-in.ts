import { api } from '@/lib/axios';

export interface SignInBody {
    name: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    role: string;
}

export async function signIn({ name, email, password, passwordConfirmation }: SignInBody) {
    await api.post('/auth/signup', { name, email, password, passwordConfirmation, role: 'client' });
}
