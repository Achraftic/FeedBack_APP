"use server"

import prisma from "@/utils/db"
import { revalidatePath } from "next/cache"


export const getFeedBack = async (company:string | undefined) => {
  const data=  await prisma.feedBack.findMany({
        orderBy: {
            createdAt: "desc"
        },
        where:{
            company:company
        }
    })
    
    return data
}


export const AddFeedBack = async (formData: FormData) => {
    const content = formData.get("content") as string
    const company = formData.get("company") as string
    if (content.length < 1) {
        return { message: "content is required", type: "error" }
    }

    try {
        await prisma.feedBack.create({
            data: {
                content: content,
                company: company
            }
        })
        revalidatePath("/")
        return { message: 'Post created successfully.', type: "success" };

    }
    catch (error) {
        console.error(error);
        return { message: 'Error creating post.', type: "error" };
    }
}