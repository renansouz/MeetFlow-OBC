import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { professionalAPI } from '@/api/professionalAPI';
import { userAPI } from '@/api/userAPI';
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

    const [professionals, setProfessionals] = useState<CardData[]>();

    console.log(professionals);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);
    const categoriesMock: categories[] = [
        { title: 'Saúde', id: 1 },
        { title: 'Advocacia', id: 2 },
        { title: 'Design', id: 3 },
        { title: 'Tecnologia', id: 4 },
        { title: 'Logistica', id: 5 },
    ];

    useEffect(() => {
        async function getProfessionals() {
            try {
                const res = await userAPI.fetchProfessionals();
                const {data} = res;
                setProfessionals(data);
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error.message);
                }
            }
        }

        getProfessionals();
    }, []);

    return (
        <div className="w-full max-sm:mt-10">
            <Header title="Serviços" />
            <div>
                <div className="flex flex-col items-center gap-5">

                    {loading ? <Skeleton className="z-0 h-8 w-48 gap-y-12 rounded-md" /> : <h2 className="text-center max-sm:mt-8 max-sm:text-3xl">Profissionais</h2>}


                    <Search placeholder="Busque por um serviço ou profissional" />
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
