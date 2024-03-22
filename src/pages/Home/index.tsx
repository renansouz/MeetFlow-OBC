import { Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';

import Profissional from '@/public/AreaProfissional.png';
import Conheca from '@/public/ConheçaMeetFlow.png';

import { BackGroundImage } from './styles';

export const Home = () => {
    return (
        <div className="p-0">
            <section className="h-lvh p-0 text-center">
                <BackGroundImage>
                    <h1 className="text-center font-lexend-start text-6xl font-semibold text-white max-xl:text-5xl max-sm:text-4xl ">Agende serviços com facilidade e praticidade</h1>
                    <p className="max-xl:text-md w-1/2 text-center font-lexend-start text-xl  font-extralight text-white max-sm:text-sm">
                        Conectando você aos melhores profissionais, sem complicações.
                    </p>
                    <Link className="h-16 items-center justify-center rounded-md bg-background bg-indigo-600 px-12 py-2 pt-3 text-3xl text-white" to={'/register'}>
                        Agende agora!
                    </Link>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center text-white">
                        <div className="flex justify-between">
                            <div className="ml-52">
                                <span className="mr-2 text-4xl font-semibold">3000+</span>
                                <p className="inline-block">usuários</p>
                            </div>
                            <Tally1 className="h-9 w-9" />
                            <div>
                                <span className="mr-2 text-4xl font-semibold">2300+</span>
                                <p className="inline-block">profissionais</p>
                            </div>
                            <Tally1 className="h-9 w-9" />
                            <div className="mr-52">
                                <span className="mr-2 text-4xl font-semibold">98%</span>
                                <p className="inline-block">de satisfação do cliente</p>
                            </div>
                        </div>
                    </div>
                </BackGroundImage>
            </section>
            <section className="flex h-screen max-xl:flex-col max-xl:items-center max-xl:justify-center">
                <div className="flex w-3/6 flex-col items-center justify-center gap-20 max-xl:mb-20 max-xl:gap-52">
                    <img src={Conheca} alt="Imagem ilustrativa" className="w-2/3 rounded-3xl" />
                </div>
                <div className="flex w-3/6 flex-col items-center justify-center gap-5 text-center max-xl:mt-12 max-xl:w-full">
                    <div className="mr-72 flex flex-col justify-start gap-6">
                        <h1 className="text-left text-6xl font-semibold">Conheça o MeetFlow:</h1>
                        <p className="mt-10 w-full text-left text-2xl font-thin ">
                            Nosso objetivo é simplificar o agendamento de serviços, oferecendo uma plataforma intuitiva e acessível para clientes e profissionais. Encontre o serviço ideal
                            para suas necessidades.
                        </p>
                        <div className="group inline-flex h-14 w-80 items-center justify-center rounded-md bg-background bg-indigo-700 px-6 py-2 text-2xl text-white">
                            <Link to={'#'}>Encontre um serviço</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex h-screen bg-slate-900 max-xl:flex-col max-xl:items-center max-xl:justify-center">
                <div className="flex w-3/6 flex-col items-center justify-center text-center">
                    <div className="flex w-9/12 flex-col gap-6">
                        <h1 className="text-left text-6xl font-semibold">Seja um Profissional MeetFlow</h1>
                        <p className="mt-10 w-full text-left text-2xl font-thin ">
                            Se você é um profissional em busca de mais oportunidades, junte-se à nossa comunidade. Aumente sua visibilidade e simplifique seu agendamento
                        </p>
                        <div className="group inline-flex h-14 w-80 items-center justify-center rounded-md bg-background bg-indigo-700 px-6 py-2 text-2xl text-white">
                            <Link to={'#'}>Comece agora</Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-3/6 flex-col items-center justify-center gap-20 max-xl:mb-20 max-xl:gap-52">
                    <img src={Profissional} alt="Imagem ilustrativa" className="w-2/3 rounded-3xl" />
                </div>
            </section>
            <section className="flex h-screen flex-col items-center py-32 max-xl:justify-center">
                <div>
                    <h1 className="text-center text-6xl font-semibold">Dúvidas Frequentes</h1>
                    <p className="mt-10 w-full text-center text-2xl font-thin ">Agora é com voce miqueias😁🚀</p>
                </div>
            </section>
        </div>
    );
};
