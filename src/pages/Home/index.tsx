import { FolderSync, Share2, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Card } from './Components/Card';
import { BackGroundImage } from './styles';

export const Home = () => {
    return (
        <div className="p-0">
            <section className="h-lvh p-0 text-center">
                <BackGroundImage>
                    <h1 className="text-center font-lexend-start text-7xl font-semibold text-white max-xl:text-5xl max-sm:text-4xl">Facilite sua agenda com o MeetFlow</h1>
                    <p className="max-xl:text-md w-1/2 text-center font-lexend-start text-2xl font-extralight text-white max-sm:text-sm ">
                        Encontre serviços, agende compromissos e simplifique sua vida com o MeetFlow. A maneira mais fácil de conectar-se com profissionais e organizarsua agenda. Experimente
                        agora!
                    </p>
                    <Link
                        className="max-xl:text-md h-12 items-center justify-center rounded-md bg-background bg-indigo-600 px-6 py-2 text-2xl text-white max-xl:h-12 max-sm:h-8 max-sm:text-sm"
                        to={'/register'}
                    >
                        CLIQUE AQUI PARA COMEÇAR
                    </Link>
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
        </div>
    );
};
