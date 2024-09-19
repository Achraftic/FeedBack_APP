import React from 'react';
import OneFeedBack from './FeedBack';
import { getFeedBack } from '@/actions/feedBack.Actions';
import { FeedBack } from '@prisma/client';

type FeedBackProps = {
    data:FeedBack[]
}
const FeedBackList = async ({data }: FeedBackProps) => {

    if (!data || data.length === 0) {
        return <div className=' w-full    h-max block  text-zinc-500   bg-zinc-200/60  text-sm  py-5 px-8 '>
            <div className='w-full text-center'>
                No feedback available
            </div>
        </div>;
    }

    return (
        <>
            {data.map((e) => {
                return <OneFeedBack feedback={e} key={e.id} />
            })}
        </>
    );
}

export default FeedBackList;
