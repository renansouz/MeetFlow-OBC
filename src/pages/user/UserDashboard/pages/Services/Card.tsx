import { CardData } from '.';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Card = ({ profile_pic, description, name, categorie }: CardData) => {
    return (
        <div className="shadow-2xl w-64 h-72 rounded-md flex flex-col items-center gap-5 bg-secondary-foreground">
            <img src={profile_pic} alt="" className="rounded-full w-24" />
            <div className="text-center">
                <h2>{name}</h2>
                <p>{description}</p>
                <p>{categorie}</p>
            </div>
            <Button variant={'default'}>
                <Link to={''}>Agendar</Link>
            </Button>
        </div>
    );
};
