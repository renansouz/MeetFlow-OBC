import { ElementType } from 'react';

import { Button } from '../ui/button';

export interface NavItemProps {
    title: string;
    icon: ElementType;
}

export function AsideItem({ title, icon: Icon }: NavItemProps) {
    return (
        <Button variant={'ghost'} className="h-11 flex items-center justify-start gap-3 px-12 py-7">
            <Icon />
            <span>{title}</span>
        </Button>
    );
}
