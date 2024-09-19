'use client'
import Submit from './Submit';
import { useFeedbackStore } from '@/store/FeedBackStore';
import { useOptimistic } from 'react';

const MAX_CARACTERE = 150

const FormFeedBack = () => {

    const { text, error, handleSubmit, handleInput } = useFeedbackStore();
 


    const remainingChars = MAX_CARACTERE - text.length;

    return (
        <>
            <form action={handleSubmit} className={`bg-zinc-800/50 shadow-xl ${error ? "border-red-700" : "border-zinc-800"}  focus-within:border-zinc-600  border hover:border-zinc-600  shadow-zinc-800/50 rounded-lg p-2 max-w-sm w-full m-auto my-3`}>

                <textarea value={text} name="content" maxLength={MAX_CARACTERE} onChange={(e) => handleInput(e)} cols={50} rows={3} placeholder='Entre you feedback here , don"t forget to add a hashtag of the company' className='bg-transparent outline-none  resize-none  text-sm placeholder:text-zinc-500 '>

                </textarea>

                <div className='flex justify-between p-2 items-center text-sm  '>
                    <span className={`' ${remainingChars === 0 ? "text-red-600" : "text-zinc-500"}`}>{remainingChars}</span>
                    <Submit />
                </div>

            </form>
        </>
    );
}

export default FormFeedBack;
