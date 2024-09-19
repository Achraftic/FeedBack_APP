import React from 'react';
import { Button } from './ui/button';
import { useFormStatus } from 'react-dom';

const Submit = () => {
    const { pending } = useFormStatus()

    return (
        <Button  type="submit" className='text-sm h-2 py-3.5 rounded-md px-3 ' variant="secondary"   disabled={pending}  >Submit</Button>
    );
}

export default Submit;
