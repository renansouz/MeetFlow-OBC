import { Link } from 'react-router-dom';
import { useState } from 'react';
import { stepProps } from '@/types/StepsTypes';
import { StepNavigator } from './StepNavigator';


export const Step1 = ({ setCurrentStepState, currentStepState } : stepProps ) => {

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
                    <input
                        type="text"
                        placeholder="Digite seu nome de usuário"
                        id="user"
                        className="w-96 px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                    />
                </section>

                <section>
                    <label htmlFor="" className="block text-black font-bold py-1">
                        Endereço de e-mail
                    </label>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        id="email"
                        className="w-96 px-4 py-1 text-base rounded-lg border focus:outline focus:outline- focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                    />
                </section>

                <section>
                    <label htmlFor="" className="block text-black font-bold py-1">
                        Senha
                    </label>
                    <input
                        type={passwordAppearence}
                        placeholder="Digite sua senha"
                        id="password"
                        className="w-96 px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                    />
                </section>
                <section className="flex text-black gap-2">
                    <label htmlFor="">Mostrar senha</label>
                    <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
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
