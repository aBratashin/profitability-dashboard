import {Metadata} from 'next';
import React from 'react';
import Main from '@/pages/Main/Main';

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default function Dashboard() {
    return (
        <>
            <Main/>
        </>
    );
}