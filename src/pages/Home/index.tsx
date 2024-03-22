import { Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FolderSync, Share2, Star } from 'lucide-react';
import Profissional from '@/public/AreaProfissional.png';
import Conheca from '@/public/ConheçaMeetFlow.png';
import { Card } from './Components/Card';
import { BackGroundImage } from './styles';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

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
                        Agendar agora!
                    </Link>
                    <div className="mt-20 flex items-center p-4 text-center text-white">
                        <div className="flex justify-between gap-10">
                            <div className="flex items-center">
                                <span className="mr-2 text-4xl font-semibold">3000+</span>
                                <p className="inline-block text-2xl">usuários</p>
                            </div>
                            <Tally1 className="h-9 w-9" />
                            <div className="flex items-center">
                                <span className="mr-2 text-4xl font-semibold">2300+</span>
                                <p className="inline-block text-2xl">profissionais</p>
                            </div>
                            <Tally1 className="h-9 w-9" />
                            <div className="flex items-center">
                                <span className="mr-2 text-4xl font-semibold">98%</span>
                                <p className="inline-block text-2xl">de satisfação do cliente</p>
                            </div>
                        </div>
                    </div>
                </BackGroundImage>
            </section>
            <section className="flex min-h-screen max-xl:flex-col max-xl:items-center max-xl:justify-center">
                <div className="flex w-3/6 flex-col items-center justify-center gap-5 text-center max-xl:mt-12 max-xl:w-full">
                    <div className="flex w-9/12 flex-col justify-start gap-6 max-xl:gap-0 max-xl:pb-11">
                        <h1 className="text-center text-6xl font-semibold max-xl:text-3xl">Conheça o MeetFlow:</h1>
                        <p className="mt-12 w-full text-center max-xl:mt-6 max-xl:whitespace-break-spaces">
                            O MeetFlow simplifica o agendamento de compromissos com profissionais. Nossa plataforma intuitiva conecta clientes a uma variedade de serviços, oferecendo uma
                            experiência fácil e conveniente.
                        </p>
                    </div>
                </div>

                <div className="flex w-3/6 flex-col items-center justify-center gap-20 max-xl:mb-20 max-xl:gap-52">
                    <Card Icon={Star} title="Facilidade de Uso" label="Navegue e agende serviços sem complicações." />
                    <Card Icon={Share2} title="conexões direta" label="Conecte-se diretamente com profissionais qualificados." />
                    <Card Icon={FolderSync} title="gerenciamento simples" label="Mantenha sua agenda organizada em um só lugar." />
                </div>
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
            <section className="flex h-screen flex-col items-center py-32 max-xl:justify-center ">
                <h1 className="text-center text-6xl font-semibold">Dúvidas Frequentes</h1>
                <p className="mt-8">Veja as respostas para as perguntas mais frequentes </p>
                <div className="mt-20 w-4/6">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Como posso agendar um serviço sem criar uma conta?</AccordionTrigger>
                            <AccordionContent>
                                Você pode agendar um serviço sem criar uma conta preenchendo um formulário simples com seu email, telefone e mensagem para o profissional
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Quais são as vantagens de criar uma conta na MeetFlow?</AccordionTrigger>
                            <AccordionContent>
                                Ao criar uma conta, você terá acesso a recursos adicionais, como histórico de agendamentos, perfis de profissionais favoritos e comunicação direta com os
                                prestadores de serviço.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Posso cancelar ou reagendar um agendamento?</AccordionTrigger>
                            <AccordionContent>
                                Sim, você pode cancelar ou reagendar um agendamento a qualquer momento, basta acessar sua conta e selecionar a opção desejada no seu histórico de
                                agendamentos.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-4">
                            <AccordionTrigger>"Como sei se um profissional é confiável?</AccordionTrigger>
                            <AccordionContent>
                                Todos os profissionais listados na MeetFlow passam por um processo de verificação rigoroso para garantir sua confiabilidade. Além disso, os clientes podem
                                deixar avaliações e comentários sobre suas experiências.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-5">
                            <AccordionTrigger>Existe alguma taxa para usar a plataforma?</AccordionTrigger>
                            <AccordionContent>
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
