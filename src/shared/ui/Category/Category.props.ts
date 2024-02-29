import {DetailedHTMLProps, HTMLAttributes} from 'react';

export interface CategoryProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    type: 'dev' | 'sup' | 'T&M' | 'hours' | 'seo';
}