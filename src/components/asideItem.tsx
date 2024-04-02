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
        <Button asChild variant={'ghost'} className="flex h-11 items-center justify-start gap-3 px-10 py-7 max-lg:justify-center max-lg:px-0">
            <Link to={link}>
                <Icon />
                <span className="max-lg:hidden">{title}</span>
            </Link>
        </Button>
    );
}
