import React from 'react';

const Skeleton = () => {
    return (
        <>
            {new Array(6).fill(null).map((_, index) => (
                <div key={index} className='flex animate-pulse gap-3 px-8 py-3 w-full border items-center'>
                    <div className='w-8'></div>
                    <div className="rounded-md bg-zinc-200 w-12 h-12 py-4 px-5"></div>
                    <div className='w-full space-y-1'>
                        <div className='w-14 h-3 rounded-full bg-zinc-200'></div>
                        <div className='min-w-max h-4 bg-zinc-300/70 rounded-full'></div>
                        <div className=' w-1/3 h-4 bg-zinc-300/70 rounded-full'></div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skeleton;
