'use server'
import { db } from "@/db";
import { postsTable } from "@/db/schema";
import { revalidatePath } from 'next/cache';

export async function createPost(formData) {
   try {
       const title = formData.get('title');
       const content = formData.get('content');
       
       if (!title || !content) {
           throw new Error('Title and content are required');
       }
       
       await db.insert(postsTable).values({
           title,
           content,
           userId: 1, // Still hardcoded for now
       });

       revalidatePath('/blog');
   } catch (error) {
       console.error('Error creating post:', error);
       throw error;
   }
}