<<<<<<< HEAD
import { Link } from 'react-router-dom';

import { BackGroundImage } from './styles';
=======
import { BackGroundImage } from "./styles";
import { Link } from "react-router-dom";
import { Card } from "./Components/Card";
import { Star, ShieldCheck, FolderSync } from "lucide-react";
>>>>>>> 758e1715d8556a96dedadec680f6ce8c2b111990

export const Home = () => {
    return (
        <div className="p-0">
            <section className="p-0 h-lvh text-center">
                <BackGroundImage>
                    <h1 className="text-7xl text-white font-lexend-start font-semibold text-center">
                        The Next Payment Method
                    </h1>
                    <p className="font-lexend-start font-extralight text-2xl text-white text-center w-1/2">Encontre serviços, agende compromissos e simplifique sua vida com o MeetFlow. A maneira mais fácil de conectar-se com profissionais e organizarsua agenda. Experimente agora!</p>
                    <Link
<<<<<<< HEAD
                        className="bg-indigo-600  h-10 w-30 items-center justify-center rounded-md bg-background px-6 py-2 text-white"
                        to={'/cadastro'}
=======
                        className="bg-indigo-600  h-12 items-center justify-center rounded-md bg-background px-6 py-2 text-white text-2xl"
                        to={"/cadastro"}
>>>>>>> 758e1715d8556a96dedadec680f6ce8c2b111990
                    >
                        CLIQUE AQUI PARA COMEÇAR
                    </Link>
                </BackGroundImage>
            </section>
            <section className="min-h-screen flex">
                <div className="w-3/6 flex justify-center items-center text-center flex-col gap-5">
                    <div className="w-9/12 text-left flex flex-col gap-6">
                        <h1 className="text-7xl font-lexend-start font-semibold">
                            Conheça o MeetFlow:
                        </h1>
                        <p className="w-10/12 mb-32">
                            O MeetFlow simplifica o agendamento de compromissos com profissionais.  Nossa plataforma intuitiva conecta clientes a uma variedade de serviços,  oferecendo uma experiência fácil e conveniente.
                        </p>
                    </div>
                </div>

                <div className="w-3/6 flex justify-center items-center flex-col gap-20">
                    <Card
                        Icon={Star}
                        title="Facilidade de Uso"
                        label="Navegue e agende serviços sem complicações."
                    />
                    <Card
                        Icon={ShieldCheck}
                        title="conexões direta"
                        label="Conecte-se diretamente com profissionais qualificados."
                    />
                    <Card
                        Icon={FolderSync}
                        title="gerenciamento simples"
                        label="Mantenha sua agenda organizada em um só lugar."
                    />
                </div>
            </section>
        </div>
    );
};
