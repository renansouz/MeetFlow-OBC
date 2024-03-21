import { BackGroundDiv, FormDiv } from './styles';
import Logo from '@/public/Logo.png';
import LightLogo from '@/public/Logo-light.png';
import { Link } from 'react-router-dom';
import { InputText } from '@/components/Inputs/InputText';
import { Button } from '@/components/ui/button';
import { InputPassword } from '@/components/Inputs/InputPassword';
import { useState } from 'react';

type passwordAppearenceType = 'text' | 'password';

export const Login = () => {
    const [passswordAppearenceState, setpasswordAppearenceState] = useState<passwordAppearenceType>('password');
    const handlePasswordAppearence = () => (passswordAppearenceState === 'password' ? setpasswordAppearenceState('text') : setpasswordAppearenceState('password'));

    return (
        <div className="h-screen">
            <BackGroundDiv>
                <FormDiv>
                    <div className="flex flex-col justify-center items-center">
                        <Link to={'/'}>
                            <img src={LightLogo} alt="" className="w-96" />
                        </Link>
                        <h2 className=" text-2xl">Seja bem vindo!</h2>
                    </div>
                    <div className="flex flex-col items-center justify-center py-10 gap-8">
                        <section>
                            <label htmlFor="" className="block text-black font-bold py-2">
                                Endereço de e-mail
                            </label>
                            <InputText placeholder="Digite seu email" id="email" />
                        </section>
                        <section>
                            <label htmlFor="" className="block text-black font-bold py-2">
                                Senha
                            </label>
                            <InputPassword placeholder="Digite sua senha" id="password" passwordAppearence={passswordAppearenceState} />
                        </section>
                        <section className="flex text-black gap-2">
                            <input type="checkbox" name="" id="" onClick={handlePasswordAppearence} />
                            <label htmlFor="">Mostrar senha</label>
                        </section>
                        <Button className="w-96 mt-5">Entrar</Button>
                        <p className="text-black">
                            Não possui uma conta?{' '}
                            <Link to={'/register'} className="text-blue-700 hover:underline">
                                Cadastre-se
                            </Link>
                        </p>
                    </div>
                </FormDiv>
            </BackGroundDiv>
        </div>
    );
};
