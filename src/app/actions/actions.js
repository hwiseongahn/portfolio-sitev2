'use server';

import { db } from '@/db';
import { postsTable, usersTable } from '@/db/schema';
import { revalidatePath } from 'next/cache';
import { eq } from 'drizzle-orm';

export async function createPost(data) {
  try {

    const { title, content } = data;
    if (!title || !content) {
      throw new Error('Title and content are required');
    }

    // Insert post
    await db.insert(postsTable).values({
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
        await db.delete(postsTable).where(eq(postsTable.id, id));
        revalidatePath('/blog');
    } catch (error) {
        console.error('Error deleting post:', error);
        throw error;
    }
}

export async function updatePost(id, title, content) {
    try {
        await db.update(postsTable).set({ title, content }).where(eq(postsTable.id, id));
        revalidatePath('/blog');
    } catch (error) {
        console.error('Error updating post:', error);
        throw error;
    }
}