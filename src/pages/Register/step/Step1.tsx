import { useState } from 'react';
import { Link } from 'react-router-dom';

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
                    <input
                        type="text"
                        placeholder="Digite seu nome de usuário"
                        id="user"
                        className="w-96 rounded-lg border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa]"
                    />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Endereço de e-mail
                    </label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        id="email"
                        className="focus:outline- w-96 rounded-lg border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-offset-2 focus:outline-[#aaaaaa]"
                    />
                </section>

                <section>
                    <label htmlFor="" className="block py-1 font-bold text-black">
                        Senha
                    </label>
                    <input
                        type={passwordAppearence}
                        placeholder="Digite sua senha"
                        id="password"
                        className="w-96 rounded-lg border border-[#cbcbcb] bg-[#ffffff] px-4 py-1 text-base text-[#444444] focus:outline focus:outline-0 focus:outline-offset-2 focus:outline-[#aaaaaa]"
                    />
                </section>
                <section className="flex gap-2 text-black">
                    <label htmlFor="">Mostrar senha</label>
                    <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
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
