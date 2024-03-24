import { Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import { BackGroundImage, ProfessionalImage, SobreImage } from './styles';

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
                    <div className="mb-[2%] mt-[10%] flex items-center p-4 text-center text-white max-lg:mt-16 max-lg:hidden">
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

            <section className="flex h-screen w-screen items-center gap-40 max-xl:grid max-xl:h-auto max-xl:place-items-center">
                <div className="ml-[12%] flex flex-col items-center max-xl:ml-0">
                    <SobreImage />
                </div>
                <div className="flex w-3/6 flex-col items-center justify-center gap-5 text-center">
                    <div className="mr-52 flex flex-col justify-start gap-6 max-xl:mr-0 max-xl:items-center">
                        <h1 className="text-left text-6xl font-semibold max-xl:w-lvw max-xl:text-center max-lg:text-5xl max-sm:text-4xl">Conheça o MeetFlow:</h1>
                        <p className="max-xl:mx-440 mt-10 w-full text-left text-2xl font-thin max-xl:px-56 max-xl:text-center max-lg:px-[5%] max-sm:mt-0 max-sm:text-base">
                            Nosso objetivo é simplificar o agendamento de serviços, oferecendo uma plataforma intuitiva e acessível para clientes e profissionais. Encontre o serviço ideal
                            para suas necessidades.
                        </p>
                        <div className="group inline-flex h-14 w-80 items-center justify-center rounded-md bg-background bg-indigo-700 px-6 py-2 text-2xl text-white">
                            <Link to={'#'}>Encontre um serviço</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex h-screen w-screen items-center gap-40 max-xl:mb-[10%] max-xl:grid max-xl:h-auto max-xl:place-items-center">
                <div className="flex w-3/6 flex-col items-center justify-center text-center">
                    <div className="ml-[12%] flex flex-col justify-start gap-6 max-xl:mr-0 max-xl:items-center">
                        <h1 className="text-left text-6xl font-semibold max-xl:w-lvw max-xl:text-center max-lg:text-5xl max-sm:text-4xl">Seja um Profissional MeetFlow</h1>
                        <p className="mt-10 w-full text-left text-2xl font-thin max-xl:px-56 max-xl:text-center max-lg:px-[5%] max-sm:mt-0 max-sm:text-base">
                            Se você é um profissional em busca de mais oportunidades, junte-se à nossa comunidade. Aumente sua visibilidade e simplifique seu agendamento
                        </p>
                        <div className="group inline-flex h-14 w-80 items-center justify-center rounded-md bg-background bg-indigo-700 px-6 py-2 text-2xl text-white max-xl:mb-[20%]">
                            <Link to={'#'}>Comece agora</Link>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col items-center max-xl:order-first max-xl:ml-0 max-xl:mt-[10%] ">
                    <ProfessionalImage />
                </div>
            </section>
            <section className="flex h-lvh w-lvw flex-col items-center justify-center">
                <h1 className="text-center text-6xl font-semibold max-xl:text-5xl max-sm:text-2xl">Dúvidas Frequentes</h1>
                <p className="my-6 mb-10 text-center text-xl font-extralight max-xl:text-lg max-sm:text-base">Veja as respostas para as perguntas mais frequentes </p>
                <div className="mb-20 max-h-[80%] max-w-[90%]">
                    <Accordion type="single" collapsible>
                        <AccordionItem className="py-5" value="item-1">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200 max-xl:text-xl max-sm:text-base">
                                Como posso agendar um serviço sem criar uma conta?
                            </AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base">
                                Você pode agendar um serviço sem criar uma conta preenchendo um formulário simples com seu email, telefone e mensagem para o profissional
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-2">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200 max-xl:text-xl max-sm:text-base">
                                Quais são as vantagens de criar uma conta na MeetFlow?
                            </AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10  max-sm:text-base">
                                Ao criar uma conta, você terá acesso a recursos adicionais, como histórico de agendamentos, perfis de profissionais favoritos e comunicação direta com os
                                prestadores de serviço.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-3">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200 max-xl:text-xl max-sm:text-base">Posso cancelar ou reagendar um agendamento?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base">
                                Sim, você pode cancelar ou reagendar um agendamento a qualquer momento, basta acessar sua conta e selecionar a opção desejada no seu histórico de
                                agendamentos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-4">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200 max-xl:text-xl max-sm:text-base">Como sei se um profissional é confiável?</AccordionTrigger>
                            <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base">
                                Todos os profissionais listados na MeetFlow passam por um processo de verificação rigoroso para garantir sua confiabilidade. Além disso, os clientes podem
                                deixar avaliações e comentários sobre suas experiências.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem className="py-5" value="item-5">
                            <AccordionTrigger className="text-2xl font-normal text-indigo-200 max-xl:text-xl max-sm:text-base">Existe alguma taxa para usar a plataforma?</AccordionTrigger>
                            <AccordionContent className=" mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base">
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
