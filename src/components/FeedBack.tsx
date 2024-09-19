import React from 'react';
import { IoMdArrowDropup } from 'react-icons/io';
import { FeedBack } from '@prisma/client';

import { calculateTimeAgo } from '@/utils/custom';


type FeedBackProps = {
    feedback: FeedBack
}


const OneFeedBack = ({ feedback }: FeedBackProps) => {
    return (

        <div className='  transition-all hover:-translate-x-1 hover:bg-zinc-200 h-max flex gap-4 border bg-zinc-200/60  text-sm justify-between py-3 px-8 items-center'>
            <div>
                <span className='text-xs text-zinc-500 flex flex-col items-center '>
                    <IoMdArrowDropup size={18} className='hover:bg-zinc-300 rounded-full  cursor-pointer' />
                    539
                </span>
            </div>
            <div className='flex-1 flex  gap-4'>


                <div className='w-12 h-12 py-4 px-5 capitalize rounded-md text-xl font-bold text-white flex justify-center items-center bg-violet-900'>
                {feedback.company?.substring(0,1)}
                </div>

                <div>
                    <h4 className='text-zinc-500 uppercase text-xs fontse'> {feedback.company}  </h4>
                    <p className='font-semibold leading-4 text-zinc-900'>{feedback.content} </p>
                </div>
            </div>
            <div>
                <span className='text-xs text-zinc-500   '>
                    {calculateTimeAgo(feedback.createdAt)}

                </span>
            </div>
        </div>

    );
}

export default OneFeedBack;
