import { ArrowRight, FolderSync, ShieldCheck, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Card } from './Components/Card';
import { BackGroundImage, ProfessionalImage, SobreImage } from './styles';

export const LandingPage = () => {
  return (
    <div className="p-0">
      <section id="hero-section" className="h-screen min-h-lvh p-0 text-center">
        <BackGroundImage>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-center font-bold text-indigo-100  max-sm:text-3xl">
              <span className="font-poppins-end text-[2.5rem] font-extrabold text-indigo-500 max-sm:text-3xl">
                Simplifique{' '}
              </span>{' '}
              seus agendamentos
              <div>otimize seu tempo</div>
            </h1>
            <p className="mb-8 text-center text-xl font-light text-indigo-100 max-lg:text-base max-sm:mb-10 max-sm:mt-0 max-sm:text-lg">
              Conectando você aos melhores profissionais, <br /> sem complicações.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="h-14 items-center justify-center rounded-md bg-indigo-600 px-12 py-2 pt-3 text-2xl text-white max-sm:h-12 max-sm:px-10 max-sm:py-2 max-sm:text-xl">
                  Agendar agora!
                </Button>
              </DialogTrigger>
              <DialogContent className="gap-6 p-12">
                <DialogHeader className="flex">
                  <DialogTitle className="mb-2 items-center justify-center text-center font-bold">
                    Seja bem-vindo ao MeetFLow!
                  </DialogTitle>
                  <DialogDescription className="text-center">
                    Estamos felizes por você estar aqui. Para desfrutar ao máximo de nossos
                    serviços, recomendamos criar uma conta. Se preferir, vocês também pode entrar
                    sem fazer login.
                  </DialogDescription>
                </DialogHeader>
                <div className="mt-10 flex flex-col items-center justify-center gap-6">
                  <Link
                    className="item-center flex  w-full justify-center rounded-2xl border-2 border-indigo-800 bg-indigo-900 bg-opacity-20 p-4 text-xl hover:bg-indigo-500 hover:bg-opacity-30 "
                    to={'/login'}
                  >
                    <span className="font-medium">Fazer LogIn</span>
                  </Link>
                  <Link
                    to={'/dashboard/services'}
                    className=" item-center flex w-full justify-center p-4 font-medium text-foreground hover:text-indigo-600 hover:underline"
                  >
                    <span>Entrar sem Login</span>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </BackGroundImage>
      </section>
      <section className="mx-10 my-16 flex  items-start justify-center gap-2 max-xl:w-full max-xl:flex-col max-xl:items-center  max-md:hidden">
        <div className="w-[28%] rounded-2xl p-7 py-10 hover:opacity-60 max-xl:w-1/2">
          <Card
            Icon={Star}
            title="Facilidade de Uso"
            label="Navegue e agende serviços sem complicações."
          />
        </div>
        <div className="w-[28%] rounded-2xl bg-card/70 bg-gradient-to-r from-card/30 via-card/30 to-primary/10 p-7 py-10 hover:opacity-60  max-xl:w-1/2">
          <Card
            Icon={ShieldCheck}
            title="conexões direta"
            label="Conecte-se diretamente com profissionais qualificados."
          />
        </div>
        <div className="w-[28%] rounded-2xl p-7 py-10 hover:opacity-60 max-xl:w-1/2">
          <Card
            Icon={FolderSync}
            title="gerenciamento simples"
            label="Mantenha sua agenda organizada em um só lugar."
          />
        </div>
      </section>
      <section
        id="about-section"
        className="flex h-screen items-center justify-center max-xl:my-24 max-xl:h-auto max-xl:flex-col "
      >
        <div className="flex w-full flex-col items-center justify-center max-xl:ml-0">
          <SobreImage />
        </div>
        <div className="flex w-3/6 flex-col items-center justify-center gap-5 text-center">
          <div className="mr-52 flex flex-col justify-start gap-6 max-xl:mr-0 max-xl:items-center">
            <h1 className="text-left text-6xl font-semibold max-xl:w-lvw max-xl:text-center max-lg:text-5xl max-sm:text-4xl md:text-4xl lg:text-5xl ">
              Conheça o MeetFlow:
            </h1>
            <p className="max-xl:mx-440 mt-10 w-full text-left text-2xl font-extralight max-xl:px-56 max-xl:text-center max-lg:px-[5%] max-sm:mt-0 max-sm:text-base">
              Nosso objetivo é simplificar o agendamento de serviços, oferecendo uma plataforma
              intuitiva e acessível para clientes e profissionais. Encontre o serviço ideal para
              suas necessidades.
            </p>
            <div className="flex h-14 w-80 max-xl:items-center max-xl:justify-center max-lg:mb-[20%] max-sm:text-xl">
              <Link to={'/dashboard/services'} className="mr-5">
                <Button className="items-center justify-center rounded-md py-7 text-white ">
                  Encontre um serviço
                  <ArrowRight className="ml-3" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex h-screen items-center justify-center bg-card max-xl:my-24 max-xl:mb-[10%] max-xl:grid max-xl:h-auto max-xl:place-items-center max-lg:mb-0 max-sm:mb-14 xl:m-0 2xl:m-0 2xl:p-0">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="ml-[20%] flex flex-col justify-start gap-6 max-xl:ml-0 max-xl:items-center ">
            <h1 className="text-left font-semibold max-xl:w-lvw max-xl:text-center">
              Seja um Profissional MeetFlow
            </h1>
            <p className="mt-1 w-full text-left font-light max-xl:px-56 max-xl:text-center max-lg:px-[5%] max-sm:mt-0 max-sm:text-base">
              Se você é um profissional em busca de mais oportunidades, junte-se à nossa comunidade.
              Aumente sua visibilidade e simplifique seu agendamento
            </p>
            <div className="group inline-flex h-14 w-80 items-center justify-center rounded-md bg-indigo-700 px-6 py-2 text-2xl text-white max-xl:mb-[20%] max-sm:text-xl">
              <Link to={'/professional/register'}>Comece agora</Link>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-center max-xl:order-first max-xl:ml-0 max-xl:mt-[10%] ">
          <ProfessionalImage />
        </div>
      </section>
      <section className="my-40  flex min-h-lvh flex-col items-center justify-center">
        <h1 className="text-center font-semibold">Dúvidas Frequentes</h1>
        <p className="my-6 mb-10 text-center text-xl font-extralight max-xl:text-lg max-sm:text-base">
          Veja as respostas para as perguntas mais frequentes{' '}
        </p>
        <div className=" max-h-[80%] w-[90%] max-sm:mb-[10%] max-sm:h-full sm:h-full xl:w-[70%]">
          <Accordion type="single" collapsible>
            <AccordionItem className="py-5" value="item-1">
              <AccordionTrigger className="text-xl font-bold text-primary-foreground max-xl:text-xl max-sm:text-base lg:text-xl">
                Como posso agendar um serviço sem criar uma conta?
              </AccordionTrigger>
              <AccordionContent className="mr-56  text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base sm:m-0 sm:text-sm lg:text-base">
                Você pode agendar um serviço sem criar uma conta preenchendo um formulário simples
                com seu email, telefone e mensagem para o profissional
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="py-5" value="item-2">
              <AccordionTrigger className="text-xl font-bold text-primary-foreground max-xl:text-xl max-sm:text-base sm:text-base lg:text-xl">
                Quais são as vantagens de criar uma conta na MeetFlow?
              </AccordionTrigger>
              <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base  sm:m-0 sm:text-base lg:text-base">
                Ao criar uma conta, você terá acesso a recursos adicionais, como histórico de
                agendamentos, perfis de profissionais favoritos e comunicação direta com os
                prestadores de serviço.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="py-5" value="item-3">
              <AccordionTrigger className="text-xl font-bold text-primary-foreground max-xl:text-xl max-sm:text-base sm:text-base lg:text-xl">
                Posso cancelar ou reagendar um agendamento?
              </AccordionTrigger>
              <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base sm:m-0 sm:text-base lg:text-base">
                Sim, você pode cancelar ou reagendar um agendamento a qualquer momento, basta
                acessar sua conta e selecionar a opção desejada no seu histórico de agendamentos.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="py-5" value="item-4">
              <AccordionTrigger className="text-xl font-bold text-primary-foreground max-xl:text-xl max-sm:text-base sm:text-base lg:text-xl">
                Como sei se um profissional é confiável?
              </AccordionTrigger>
              <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base sm:m-0 sm:text-base lg:text-base">
                Todos os profissionais listados na MeetFlow passam por um processo de verificação
                rigoroso para garantir sua confiabilidade. Além disso, os clientes podem deixar
                avaliações e comentários sobre suas experiências.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className="py-5" value="item-5">
              <AccordionTrigger className="text-xl font-bold text-primary-foreground max-xl:text-xl max-sm:text-base sm:text-base lg:text-xl">
                Existe alguma taxa para usar a plataforma?
              </AccordionTrigger>
              <AccordionContent className="mr-56 text-xl font-extralight max-xl:text-lg max-sm:m-10 max-sm:text-base sm:m-0 sm:text-base lg:text-base">
                Não, o uso da plataforma MeetFlow é totalmente gratuito para os clientes. Os
                profissionais pagam uma pequena taxa de transação ao utilizar alguns recursos
                avançados.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};
