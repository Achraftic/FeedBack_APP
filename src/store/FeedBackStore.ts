// stores/useFeedbackStore.ts
import { AddFeedBack } from '@/actions/feedBack.Actions';
import { toastCustom } from '@/utils/custom';

import { TypeOptions } from 'react-toastify';
import { text } from 'stream/consumers';
import { z } from 'zod';
import { create } from 'zustand';


type FeedbackState ={
    content: string;
    company: string ;
    error: string | null;
    text: string;

    handleSubmit: (formdata: FormData) => Promise<void>;
    handleInput: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const contentSchema = z.string()
    .min(1, "Content is required")
    .regex(/#\w+/, "Content must contain at least one hashtag (e.g., #something)");





export const useFeedbackStore = create<FeedbackState>((set) => ({
    content: '',
    company: "",
    error: null,
    text: '',

   
   

    handleSubmit: async (formdata: FormData) => {
        const content = formdata.get("content");

        // Validate content
        const validation = contentSchema.safeParse(content);
        if (!validation.success) {
            const errorMessage = validation.error.errors[0].message;
            set({ error: errorMessage });
            toastCustom(errorMessage, 'error');
            return;
        }

        // Extract company
        const company = content?.toString().split(' ').find((e) => e.includes('#'))?.substring(1);
        set({ company });

        formdata.append('company', company as string);

        // Submit feedback
        const resulte = await AddFeedBack(formdata);
        toastCustom(resulte.message, resulte.type as TypeOptions);
        if (resulte.type === "error") {
            set({ error: resulte.message });
        }
        set({ text: "" });
    },
    handleInput: (e) => {
        const inputText = e.target.value;
        set({ text: inputText });
        set({ error: "" })

    }
}));
