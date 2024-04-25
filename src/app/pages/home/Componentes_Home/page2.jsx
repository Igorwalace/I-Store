'use client';
import { useEffect } from 'react';
import useAppContext from '@/context/page';

const Page2 = () => {
    const { setProductsSingle, productsSingle } = useAppContext();

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem('ProductsSingle'));
        if (local) {
            setProductsSingle(local);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('ProductsSingle', JSON.stringify(productsSingle));
    }, [productsSingle]);

    return null;
};

export default Page2;
