import { useTheme } from '@/context/theme-provider';
import DarkLogo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';
import { BackGroundDiv, FormDiv } from './styles';
import { useState } from 'react';

export const Register = () => {
    const { theme } = useTheme();

    type passwordAppearenceType = 'password' | 'text';
    const [passwordAppearence, setPasswordAppearence] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passwordAppearence === 'password' ? setPasswordAppearence('text') : setPasswordAppearence('password'));

    return (
        <div className="flex w-full h-screen">
            <BackGroundDiv>
                <div className="flex flex-col gap-20 justify-center items-center w-1/2">
                    <img src={theme === 'dark' ? DarkLogo : LightLogo} alt="" className="w-96" />
                    <h1 className="text-5xl text-center font-semibold">Junte-se à comunidade MeetFlow</h1>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <FormDiv>
                        <div></div>
                        <div className="flex flex-col gap-5 items-center justify-center">
                            <section>
                                <label htmlFor="">Nome de Usuário</label>
                                <input
                                    type="text"
                                    placeholder="Digite seu nome de usuário"
                                    id="user"
                                    className="px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                                />
                            </section>

                            <section>
                                <label htmlFor="">Endereço de e-mail</label>
                                <input
                                    type="email"
                                    placeholder="Digite seu e-mail"
                                    id="email"
                                    className="px-4 py-1 text-base rounded-lg border focus:outline focus:outline- focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                                />
                            </section>

                            <section>
                                <label htmlFor="" className="">
                                    Senha
                                </label>
                                <input
                                    type={passwordAppearence}
                                    placeholder="Digite sua senha"
                                    id="password"
                                    className="px-4 py-1 text-base rounded-lg border focus:outline focus:outline-0 focus:outline-offset-2 bg-[#ffffff] text-[#444444] focus:outline-[#aaaaaa] border-[#cbcbcb]"
                                />
                            </section>

                            <section className="flex text-black gap-2">
                                <label htmlFor="">Mostrar senha</label>
                                <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                            </section>
                        </div>
                    </FormDiv>
                </div>
            </BackGroundDiv>
        </div>
    );
};
