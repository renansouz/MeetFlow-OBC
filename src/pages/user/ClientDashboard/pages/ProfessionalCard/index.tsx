import { useEffect, useState } from 'react';

import { Search } from '@/components/Search';
import { Skeleton } from '@/components/ui/skeleton';

import { Header } from '../components/Header';
import { CardProfessional } from './Card';

export type CardData = {
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

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    const categoriesMock: categories[] = [
        { title: 'Saúde', id: 1 },
        { title: 'Advocacia', id: 2 },
        { title: 'Design', id: 3 },
        { title: 'Tecnologia', id: 4 },
        { title: 'Logistica', id: 5 },
    ];

    const cardMock: CardData[] = [
        {
            profile_pic: 'https://randomuser.me/api/portraits/women/11.jpg',
            name: 'Nicole Martin Pavanelli de Souza',
            description: 'lorem ipsum asdfasdfasdfasdfasdfsadfasdlsdfk',
            categorie: '(537) 570-7776',
        },
        { profile_pic: 'https://github.com/renansouz.png', name: 'Renan Souza', description: 'Senior Tailwind Enginer', categorie: '(579) 237-0338' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Wesley Ribas', description: 'wesley backend', categorie: '(509) 635-3757' },
        { profile_pic: 'https://github.com/miqueiasmartinsf.png', name: 'Mikéias', description: 'baiano', categorie: '(784) 292-7570' },
        {
            profile_pic: 'https://randomuser.me/api/portraits/women/22.jpg',
            name: 'Esther Rice',
            description: 'lorem ipsum lorem ipsum lrsdfsdfsdfsdfsdfsdfsdem',
            categorie: '(509) 805-8485',
        },
        {
            profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg',
            name: 'Kelly Lane de souza nascimento filho',
            description: 'lorem ipsum lorem ipsum lrem',
            categorie: '(810) 403-3547',
        },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'lorem ipsum lorem ipsum lrem', categorie: '(810) 403-3547' },
    ];

    return (
        <div className="w-full">
            <Header title="Serviços" />
            <div>
                <div className="flex flex-col items-center gap-5">
                    {loading ? <Skeleton className="z-0 h-8 w-48 gap-y-12 rounded-md" /> : <h2 className="text-center text-3xl">Profissionais</h2>}

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
                    <div className="flex flex-wrap justify-center gap-10 py-16">
                        {cardMock.map((user) => (
                            <CardProfessional profile_pic={user.profile_pic} name={user.name} categorie={user.categorie} description={user.description} />
                        ))}
                    </div>
                    <div className="flex w-1/12 flex-col items-start gap-2">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
