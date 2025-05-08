'use server';

import { db } from '@/db/index';
import { blogTable, usersTable } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';
import { getServerSession } from 'next-auth/next';

export async function createPost(data) {
  try {
    // Get the current session
    const session = await getServerSession();
    
    // Check if user is authorized
    if (!session || session.user.email !== process.env.PRIVATE_EMAIL) {
      throw new Error('Unauthorized access');
    }

    const { title, content } = data;
    if (!title || !content) {
      throw new Error('Title and content are required');
    }

    await db.insert(blogTable).values({
      title,
      content,
    });

    revalidatePath('/blog');
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
}

export async function deletePost(id) {
    try {
        await db.delete(blogTable).where(eq(blogTable.id, id));
        revalidatePath('/blog');
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

export async function updatePost(id, title, content) {
    try {
        await db.update(blogTable).set({ title, content }).where(eq(blogTable.id, id));
        revalidatePath('/blog');
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}