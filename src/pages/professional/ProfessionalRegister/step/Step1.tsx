import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Input } from '@/components/Input';
import { InputPassword } from '@/components/Input/InputPassword';

export const Step1 = () => {
    type passwordAppearenceType = 'password' | 'text';
    const [passwordAppearence, setPasswordAppearence] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passwordAppearence === 'password' ? setPasswordAppearence('text') : setPasswordAppearence('password'));

    return (
        <div>
            <div className="mt-24 flex w-full flex-col items-center justify-center gap-5 px-10">
                <section className="w-ful">
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Nome de Usuário
                    </label>
                    <Input placeholder="Digite seu nome de usuário" id="user" />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Endereço de e-mail
                    </label>

                    <Input placeholder="Digite seu e-mail" id="email" />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Senha
                    </label>
                    <InputPassword passwordAppearence={passwordAppearence} id="password" placeholder="Digite sua senha" />
                </section>
                <section className="flex gap-2 text-black">
                    <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                    <label htmlFor="">Mostrar senha</label>
                </section>
                <div className="flex w-full justify-center">
                    <p className="text-black">
                        Já possui uma conta?{' '}
                        <Link to={'/login'} className="text-blue-700 hover:underline">
                            Entrar
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};
