import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { getProfessional } from '@/api/get-professional';
import { getProfile, GetProfileParams } from '@/api/get-profile';
import { Search } from '@/components/Search';
import { Skeleton } from '@/components/ui/skeleton';

import { Header } from '../components/Header';
import { ProfessionalCard } from './ProfessionalCard';

export type CardData = {
    _id: string;
    profile_pic: string;
    name: string;
    description: string;
    categorie: string;
};

type categories = {
    title: string;
    id: number;
};

export const Services = () => {
    const [loading, setLoading] = useState(true);
    const [professionals, setProfessionals] = useState<any[]>();
    const [selectedProfessionalId, setSelectedProfessionalId] = useState<string | undefined>();

    console.log(professionals);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    useEffect(() => {
        async function getProfessionalsFake() {
            const fakeProfessionals: CardData[] = [
                {
                    _id: '1',
                    profile_pic: 'https://github.com/renansouz.png',
                    name: 'Renan Silva',
                    description: 'Desenvolvimento, Inovação',
                    categorie: 'Programador',
                },
                {
                    _id: '2',
                    profile_pic: 'https://github.com/joao.png',
                    name: 'Wesley Ribas',
                    description: 'Estruturas, Projetos',
                    categorie: 'Engenheiro',
                },
                {
                    _id: '3',
                    profile_pic: 'https://github.com/miqueiasmartinsf.png',
                    name: 'Miqueias Martins',
                    description: 'Jurídico, Consultoria',
                    categorie: 'Advocacia',
                },
                {
                    _id: '4',
                    profile_pic: 'https://i.pravatar.cc/150?img=56',
                    name: 'Isaac Pontes',
                    description: 'Melhora, Eficiência',
                    categorie: 'Logistica',
                },
                {
                    _id: '5',
                    profile_pic: 'https://i.pravatar.cc/150?img=1',
                    name: 'Gisele Maria',
                    description: 'Software, Soluções',
                    categorie: 'Tecnologia',
                },
                {
                    _id: '6',
                    profile_pic: 'https://i.pravatar.cc/150?img=38',
                    name: 'Juliana Conde',
                    description: 'Saúde, Bem-estar',
                    categorie: 'Saúde',
                },
                {
                    _id: '7',
                    profile_pic: 'https://github.com/leonardoscorza.png',
                    name: 'Leonardo Corza',
                    description: 'Visual, Criatividade',
                    categorie: 'Design',
                },
                {
                    _id: '8',
                    profile_pic: 'https://i.pravatar.cc/150?img=20',
                    name: 'maria clara',
                    description: 'Inovação, Tecnologia',
                    categorie: 'Tecnologia',
                },
                {
                    _id: '9',
                    profile_pic: 'https://i.pravatar.cc/150?img=10',
                    name: 'Pedro martins',
                    description: 'Reabilitação, Cuidado',
                    categorie: 'Saúde',
                },
                {
                    _id: '10',
                    profile_pic: 'https://i.pravatar.cc/150?img=23',
                    name: 'Éverton Carvalho',
                    description: 'Estético, Usabilidade',
                    categorie: 'Design',
                },
                {
                    _id: '11',
                    profile_pic: 'https://i.pravatar.cc/150?img=23',
                    name: 'Ana Martinez',
                    description: 'Distribuição, Organização',
                    categorie: 'Logistica',
                },
                {
                    _id: '12',
                    profile_pic: 'https://i.pravatar.cc/150?img=32',
                    name: 'Nilce neta',
                    description: 'Desenvolvimento, Aplicações',
                    categorie: 'Tecnologia',
                },
                {
                    _id: '13',
                    profile_pic: 'https://i.pravatar.cc/150?img=33',
                    name: 'Jung Kook',
                    description: 'Legislação, Direitos',
                    categorie: 'Advocacia',
                },
                {
                    _id: '14',
                    profile_pic: 'https://i.pravatar.cc/150?img=34',
                    name: 'marta nascimento',
                    description: 'Mental, Terapia',
                    categorie: 'Saúde',
                },
                {
                    _id: '15',
                    profile_pic: 'https://i.pravatar.cc/150?img=35',
                    name: 'Emily Clark',
                    description: 'Logística, Planejamento',
                    categorie: 'Logistica',
                },
            ];
            setProfessionals(fakeProfessionals);
        }
        getProfessionalsFake();
    }, []);

    const categoriesMock: categories[] = [
        { title: 'Saúde', id: 1 },
        { title: 'Advocacia', id: 2 },
        { title: 'Design', id: 3 },
        { title: 'Tecnologia', id: 4 },
        { title: 'Logistica', id: 5 },
    ];

    // useEffect(() => {
    //     async function getProfessionals() {
    //         try {
    //             const result = await getProfessional();
    //             console.log(result);
    //             const professional = result.data;
    //             console.log(professional);
    //             setProfessionals(professional);
    //             setLoading(false);
    //         } catch (error) {
    //             if (error instanceof AxiosError) {
    //                 console.log(error.message);
    //             }
    //         }
    //     }
    //     getProfessionals();
    // }, []);
    //
    // const handleProfessionalClick = (id: string) => {
    //     setSelectedProfessionalId(id);
    // };

    return (
        <div className="w-full max-sm:mt-10">
            <Header title="Serviços" />
            <div>
                <div className="flex flex-col items-center gap-5">
                    {loading ? <Skeleton className="z-0 h-8 w-48 gap-y-12 rounded-md" /> : <h2 className="text-center max-sm:mt-8 max-sm:text-3xl">Profissionais</h2>}

                    {loading ? <Skeleton className="z-0 h-8 w-48 gap-y-12 rounded-md" /> : <Search placeholder="Busque por um serviço ou profissional" />}
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-10">
                    {categoriesMock.map((categorie) => {
                        return (
                            <div className="flex items-center gap-2">
                                {loading ? (
                                    <Skeleton className="h-6 w-6 rounded-md" />
                                ) : (
                                    <input
                                        type="radio"
                                        className="h-6 w-6 appearance-none rounded-md border-2 border-indigo-800 checked:border-indigo-800 checked:bg-indigo-600"
                                        name="category"
                                        id={categorie.title}
                                    />
                                )}

                                {loading ? (
                                    <Skeleton className="z-0 h-6 w-20 gap-y-12 rounded-md" />
                                ) : (
                                    <label htmlFor="" id={categorie.title}>
                                        {categorie.title}
                                    </label>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="flex">
                    <div className="flex flex-wrap justify-center gap-10 px-16 py-16 max-lg:gap-2 max-sm:gap-1 ">
                        {professionals?.map((professional) => {
                            return (
                                <ProfessionalCard
                                    name={professional.name}
                                    categorie={professional.categorie}
                                    description={professional.description}
                                    profile_pic={professional.profile_pic}
                                    _id={professional._id}
                                    key={professional._id}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
