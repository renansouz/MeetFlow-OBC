import { Link } from 'react-router-dom';
import { useState } from 'react';

import { InputText } from '@/components/Inputs/InputText';
import { InputPassword } from '@/components/Inputs/InputPassword';

export const Step1 = () => {
    type passwordAppearenceType = 'password' | 'text';
    const [passwordAppearence, setPasswordAppearence] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passwordAppearence === 'password' ? setPasswordAppearence('text') : setPasswordAppearence('password'));

    return (
        <div>
            <div className="w-full flex flex-col gap-5 items-center justify-center mt-24 px-10">
                <section className="w-ful">
                    <label htmlFor="" className="block text-black font-bold py-1">
                        Nome de Usuário
                    </label>
                    <InputText placeholder="Digite seu nome de usuário" id="user" />
                </section>

                <section>
                    <label htmlFor="" className="block text-black font-bold py-1">
                        Endereço de e-mail
                    </label>
                    <InputText placeholder="Digite seu e-mail" id="email" />
                </section>

                <section>
                    <label htmlFor="" className="block text-black font-bold py-1">
                        Senha
                    </label>
                    <InputPassword passwordAppearence={passwordAppearence} id='password' placeholder='Digite sua senha'/>
                </section>
                <section className="flex text-black gap-2">
                    <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                    <label htmlFor="">Mostrar senha</label>
                </section>
                <div className="w-full flex justify-center">
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
