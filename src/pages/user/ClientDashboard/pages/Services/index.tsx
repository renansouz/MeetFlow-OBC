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
        async function getProfessionals() {
            try {
                const result = await getProfessional();
                console.log(result);
                const professional = result.data;
                console.log(professional);
                setProfessionals(professional);
                setLoading(false);
            } catch (error) {
                if (error instanceof AxiosError) {
                    console.log(error.message);
                }
            }
        }

        getProfessionals();
    }, []);

    const handleProfessionalClick = (id: string) => {
        setSelectedProfessionalId(id);
    };

    useEffect(() => {
        if (selectedProfessionalId) {
            async function fetchProfileData() {
                try {
                    const result = await getProfile(selectedProfessionalId as GetProfileParams);
                    console.log('resu;t', result);
                } catch (error) {
                    if (error instanceof AxiosError) {
                        console.log(error.message);
                    }
                }
            }

            fetchProfileData();
        }
    }, [selectedProfessionalId]);

    return (
        <div className="w-full">
            <Header title="Serviços" />
            <div>
                <div className="flex flex-col items-center gap-5">
                    {loading ? <Skeleton className="z-0 h-8 w-48 gap-y-12 rounded-md" /> : <h2 className="text-center">Profissionais</h2>}
                    <Search placeholder="Busque por um serviço ou profissional" />
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-center gap-10"></div>
                <div className="flex">
                    <div className="flex flex-wrap justify-center gap-10 px-16 py-16 max-lg:gap-2 max-sm:gap-1 ">
                        {professionals?.map((professional) => {
                            return (
                                <div key={professional._id} onClick={() => handleProfessionalClick(professional._id)}>
                                    <ProfessionalCard
                                        name={professional.name}
                                        categorie={professional.categorie}
                                        description={professional.description}
                                        profile_pic={professional.profile_pic}
                                        _id={professional._id}
                                        key={professional._id}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
