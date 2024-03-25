import { Search } from '@/components/Search';

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
    const categoriesMock: categories[] = [
        { title: 'Saúde', id: 1 },
        { title: 'Advocacia', id: 2 },
        { title: 'Design', id: 3 },
        { title: 'Tecnologia', id: 4 },
        { title: 'Logistica', id: 5 },
    ];

    const cardMock: CardData[] = [
        { profile_pic: 'https://randomuser.me/api/portraits/women/18.jpg', name: 'Ruby Baker', description: 'amo animais', categorie: '(537) 570-7776' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/3.jpg', name: 'Wyatt Peterson', description: 'amo anime', categorie: '(579) 237-0338' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Rafael Burton', description: 'rafael.burton@example.com', categorie: '(509) 635-3757' },
        { profile_pic: 'https://randomuser.me/api/portraits/women/3.jpg', name: 'Hannah Murray', description: 'hannah.murray@example.com', categorie: '(784) 292-7570' },
        { profile_pic: 'https://randomuser.me/api/portraits/women/22.jpg', name: 'Esther Rice', description: 'esther.rice@example.com', categorie: '(509) 805-8485' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
        { profile_pic: 'https://randomuser.me/api/portraits/men/15.jpg', name: 'Kelly Lane', description: 'kelly.lane@example.com', categorie: '(810) 403-3547' },
    ];

    return (
        <div className="w-full">
            <Header title="Serviços" />
            <div>
                <div className="flex items-center flex-col gap-5">
                    <h2 className="text-center text-3xl">Profissionais</h2>
                    <Search placeholder="Busque por um serviço ou profissional" />
                </div>
                <div className="flex flex-wrap items-center gap-10 mt-10 justify-center">
                    {categoriesMock.map((categorie) => {
                        return (
                            <div className="flex items-center gap-2">
                                <input type="checkbox" name="" id={categorie.title} />
                                <label htmlFor="" id={categorie.title}>
                                    {categorie.title}
                                </label>
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-start">
                    <div className="flex flex-wrap w-11/12 ps-28 py-16 gap-10">
                        {cardMock.map((user) => (
                            <CardProfessional profile_pic={user.profile_pic} name={user.name} categorie={user.categorie} description={user.description} />
                        ))}
                    </div>
                    <div className="flex flex-col w-1/12 items-start gap-2">
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
