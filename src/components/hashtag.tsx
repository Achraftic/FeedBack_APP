
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

type HashtagProps = {
    company: string | null;
    count: string | number | null;
}

const Hashtag = ({ company, count }: HashtagProps) => {
    const router = useRouter();

    const handleParm = (company: string | null) => {
        if (company) {
            const encodedCompany = encodeURIComponent(company);
            router.push(`/?company=${encodedCompany}`);
        }
    }

    return (
        <li 
            onClick={() => handleParm(company)} 
            className='list-none bg-purple-300/10 text-zinc-300 py-1.5 px-4 rounded-full text-xs cursor-pointer hover:bg-purple-200/20 transition flex w-max gap-1'>
            #{company} <span className='font-bold'>{count}</span>
        </li>
    );
}

export default Hashtag;
