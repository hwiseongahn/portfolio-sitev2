'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createPost } from '@/app/[locale]/actions/actions';
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CreatePostForm() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const { data: session } = useSession();
  console.log(session);
  // Client-side handler
  async function handleSubmit(e) {
    e.preventDefault();

    await createPost({ title, content });

    setShowForm(false);
    setTitle('');
    setContent('');
    router.refresh();
  }

  return (
    <div className="mb-8">
      {!showForm ? (
        <Button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2"
        >
          <Plus className="h-4 w-4" /> Create New Post
        </Button>
      ) : (

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              required
            />
          </div>
          <div className="flex gap-2">
            <Button
              type="submit"
            >
              Submit
            </Button>
            <Button
              type="button"
              onClick={() => setShowForm(false)}
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </form>
      )}
    </div>
  )
}