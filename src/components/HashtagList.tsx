import prisma from '@/utils/db';
import React from 'react';
import Hashtag from './hashtag';


const HashtagList = async() => {
    const companies = await prisma.feedBack.groupBy({
        by: ['company'], // Group by the 'company' field
        _count: {
          _all: true, // Count all entries for each company
        },
        orderBy:{
           _count:{
            company:"desc"
           }
        }
      });
   
    return (
        <div className='md:p-2 p-4 flex md:flex-col md:my-0 my-4 gap-2 flex-wrap'>
        {companies.map((e)=>{
          return  <Hashtag key={e.company} company={e.company} count={e._count._all} />

        })}
   
          
           
        </div>
    );
}

export default HashtagList;
