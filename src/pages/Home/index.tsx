import { Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Profissional from '@/public/img/AreaProfissional.jpg';
import Conheca from '@/public/img/ConhecaMeetFlow.jpg';

import { BackGroundImage } from './styles';

export const Home = () => {
    return (
        <div className="p-0">
            <section className="h-lvh p-0 text-center">
                <BackGroundImage>
                    <h1 className="text-whit max-sm:text-3x mb-6 mt-44 text-center font-lexend-start text-6xl font-semibold max-xl:text-5xl max-lg:mt-10">
                        Agende serviços com facilidade e praticidade
                    </h1>
                    <p className="max-xl:text-md mb-20 mt-3 w-1/2 text-center font-lexend-start text-2xl font-extralight text-white max-sm:mb-10 max-sm:text-xl">
                        Conectando você aos melhores profissionais, sem complicações.
                    </p>
                    <Link
                        className="h-16 items-center justify-center rounded-md bg-background bg-indigo-600 px-12 py-2 pt-3 text-3xl text-white  max-xl:text-2xl max-sm:h-12 max-sm:px-10 max-sm:py-2 max-sm:text-xl"
                        to={'/register'}
                    >
                        Agendar agora!
                    </Link>
                    <div className="mt-40 flex items-center p-4 text-center text-white max-lg:mt-16 max-lg:mt-96 max-lg:hidden">
                        <div className="flex justify-center gap-28">
                            <div className="flex flex-col items-center">
                                <span className="mr-2 bg-gradient-to-r from-indigo-50 to-slate-500 bg-clip-text font-semibold text-transparent max-xl:text-5xl xl:text-5xl">3000+</span>
                                <p className="inline-block max-lg:text-2xl">usuários</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <Tally1 className="h-20 w-9" />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="mr-2 bg-gradient-to-r from-indigo-50 to-slate-500 bg-clip-text font-semibold text-transparent max-xl:text-5xl xl:text-5xl">98%</span>
                                <p className="inline-block max-lg:text-2xl">de satisfação do cliente</p>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <Tally1 className="h-20 w-9" />
                            </div>
                            <div className="flex flex-col items-center">
                                <span className="mr-2 bg-gradient-to-r from-indigo-50 to-slate-500 bg-clip-text font-semibold text-transparent max-xl:text-5xl xl:text-5xl">2300+</span>
                                <p className="inline-block max-lg:text-2xl">profissionais</p>
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
            <section className="flex h-screen max-xl:flex-col max-xl:items-center max-xl:justify-center">
                <div className="flex w-3/6 flex-col items-center justify-center text-center">
                    <div className="ml-72 flex flex-col justify-start gap-6">
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
            <section className="flex h-screen flex-col items-center py-20 max-xl:justify-center ">
                <h1 className="text-center text-6xl font-semibold">Dúvidas Frequentes</h1>
                <p className="my-6 mb-10 text-xl font-extralight">Veja as respostas para as perguntas mais frequentes </p>
                <div className="mb-20 w-4/6">
                    <Accordion type="single" collapsible>
                        <AccordionItem className="py-5" value="item-1">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200">Como posso agendar um serviço sem criar uma conta?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight">
                                Você pode agendar um serviço sem criar uma conta preenchendo um formulário simples com seu email, telefone e mensagem para o profissional
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-2">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200">Quais são as vantagens de criar uma conta na MeetFlow?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight">
                                Ao criar uma conta, você terá acesso a recursos adicionais, como histórico de agendamentos, perfis de profissionais favoritos e comunicação direta com os
                                prestadores de serviço.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-3">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200">Posso cancelar ou reagendar um agendamento?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight">
                                Sim, você pode cancelar ou reagendar um agendamento a qualquer momento, basta acessar sua conta e selecionar a opção desejada no seu histórico de
                                agendamentos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-4">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200">Como sei se um profissional é confiável?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight">
                                Todos os profissionais listados na MeetFlow passam por um processo de verificação rigoroso para garantir sua confiabilidade. Além disso, os clientes podem
                                deixar avaliações e comentários sobre suas experiências.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-5">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200">Existe alguma taxa para usar a plataforma?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight">
                                Não, o uso da plataforma MeetFlow é totalmente gratuito para os clientes. Os profissionais pagam uma pequena taxa de transação ao utilizar alguns recursos
                                avançados.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </div>
    );
};
