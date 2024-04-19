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
    <div className="gap-0 p-0">
      {/* HERO */}
      <section id="hero-section" className="h-screen min-h-lvh p-0 text-center">
        <BackGroundImage>
          <div className="-ml-36 flex w-3/4 flex-col flex-wrap items-start justify-start gap-2 max-md:mx-10 max-md:w-full max-md:items-center max-md:justify-center">
            <h1 className="text-start text-4xl font-bold text-white  max-xl:text-4xl max-md:text-center max-md:text-2xl max-sm:mb-8 max-sm:text-3xl">
              Otimize sua Gestão de Agendamentos e<br className="max-xl:hidden" /> Impulsione seu
              Negócio.
            </h1>
            <p className="mb-8 w-7/12 text-start text-xl font-light text-white max-xl:text-lg max-md:w-full max-md:text-center max-sm:mb-10 max-sm:mt-0 max-sm:hidden max-sm:text-lg max-sm:text-sm">
              Descubra uma nova maneira de agendar compromissos. Conectamos você aos profissionais
              certos, permitindo que você foque no crescimento da sua empresa.
            </p>
            <Dialog>
              <DialogTrigger>
                <Button className="items-center justify-center gap-2 rounded-md px-2 py-5 pl-4 text-white hover:bg-primary">
                  Agendar agora!
                  <ArrowRight className="h-4" />
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
                    className="item-center flex  w-full justify-center rounded-2xl border border-primary bg-primary bg-opacity-20 p-4 text-xl hover:bg-primary/90 hover:bg-opacity-30 "
                    to={'/login'}
                  >
                    <span className="font-medium text-white">Fazer LogIn</span>
                  </Link>
                  <Link
                    to={'/dashboard/services'}
                    className=" item-center flex w-full justify-center p-4 font-medium text-foreground hover:text-primary hover:underline"
                  >
                    <span>Entrar sem Login</span>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </BackGroundImage>
      </section>
      {/* CARDS */}
      <section className="mx-5 my-16 flex flex-wrap items-start justify-center max-xl:gap-6 2xl:gap-8">
        <div className="mt-10 h-64 min-w-[22rem] max-2xl:mt-7">
          <Card
            Icon={Star}
            title="Facilidade de Uso"
            label="Navegue e agende serviços sem complicações."
          />
        </div>
        <div className="h-64 min-w-[22rem] max-2xl:mt-7">
          <Card
            Icon={ShieldCheck}
            title="conexões direta"
            label="Conecte-se diretamente com profissionais qualificados."
          />
        </div>
        <div className="mt-10 h-64 min-w-[22rem]  max-2xl:mt-7">
          <Card
            Icon={FolderSync}
            title="gerenciamento simples"
            label="Mantenha sua agenda organizada em um só lugar."
          />
        </div>
      </section>
      {/*  ABOUT */}
      <section
        id="about-section"
        className="flex h-screen items-center justify-center max-xl:my-10 max-xl:h-auto max-xl:flex-col"
      >
        <div className="flex h-full w-full items-center justify-start max-xl:h-[30rem] max-xl:w-[30rem] max-xl:justify-center">
          <SobreImage />
        </div>
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="flex w-8/12 flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold max-xl:mt-10 max-xl:w-lvw max-md:text-2xl">
              Conheça o MeetFlow:
            </h1>
            <p className="my-5 w-full text-base font-extralight max-xl:px-20 max-md:px-0 max-sm:mt-0 max-sm:text-sm">
              Nosso objetivo é simplificar o agendamento de serviços, oferecendo uma plataforma
              intuitiva e acessível para clientes e profissionais. Encontre o serviço ideal para
              suas necessidades.
            </p>
            <div className="flex h-14 w-80 items-center justify-center max-lg:mb-[20%]">
              <Link to={'/dashboard/services'} className="mr-5">
                <Button className="items-center justify-center gap-2 rounded-md px-2 py-5 pl-4 text-white">
                  Encontre um serviço
                  <ArrowRight className="h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* PROFESSIONAL */}
      <section className="flex h-screen items-center justify-center bg-card max-xl:my-24 max-xl:h-auto max-xl:flex-col">
        <div className="flex w-full flex-col items-center justify-center text-center max-xl:order-2">
          <div className="flex w-8/12 flex-col items-center justify-center">
            <h1 className="text-3xl font-semibold max-xl:mt-10 max-xl:w-lvw max-md:text-2xl">
              Seja um Profissional MeetFlow
            </h1>
            <p className="my-5 w-full text-base font-extralight max-xl:px-56 max-lg:px-[5%] max-sm:mt-0 max-sm:text-sm">
              Se você é um profissional em busca de mais oportunidades, junte-se à nossa comunidade.
              Aumente sua visibilidade e simplifique seu agendamento
            </p>
            <div className="flex h-14 w-80 items-center justify-center max-lg:mb-[20%]">
              <Link to={'/professional/register'}>
                <Button className="items-center justify-center gap-2 rounded-md px-2 py-5 pl-4 text-white">
                  Comece agora
                  <ArrowRight className="h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-start max-xl:h-[30rem] max-xl:w-[30rem] max-xl:justify-center">
          <ProfessionalImage />
        </div>
      </section>
      {/* DOUBTS */}
      <section className="my-0 flex min-h-lvh flex-col items-center justify-center">
        <h1 className="text-center font-semibold">Dúvidas Frequentes</h1>
        <p className="my-6 mb-10 text-center text-xl font-extralight max-xl:text-lg max-sm:text-base max-sm:text-sm">
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
