import { ElementType } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';

export interface NavItemProps {
    title: string;
    icon: ElementType;
    link: string;
}

export function AsideItem({ title, icon: Icon, link }: NavItemProps) {
    return (
        <Button asChild variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-10 py-7 max-lg:px-0 max-lg:justify-center">
            <Link to={link}>
                <Icon />
                <span className="max-lg:hidden">{title}</span>
            </Link>
        </Button>
    );
}
