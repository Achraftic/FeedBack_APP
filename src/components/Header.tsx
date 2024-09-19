
import React from 'react';
import { title } from './primitives';

import FormFeedBack from './FormFeedBack';


const Header = async() => {
    
    return (
        <div className="w-full h-max bg-secondary-foreground">
            <div className=' text-secondary  text-center flex flex-col gap-0 p-4'>
                <h3> <span className='font-bold'>Corp</span>Comment</h3>
                <h1 className={`${title({ size: "sm" })} font-bold`}>Give  us your feedback</h1>
                <FormFeedBack />
            </div>
        </div>
    );
}

export default Header;
