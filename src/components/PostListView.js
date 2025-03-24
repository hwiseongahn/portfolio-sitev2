"use client";

import Link from 'next/link';

export default function PostsListView({ posts }) {
    return (
        <div className="flex flex-col space-y-8 pt-4">
            {posts.map(post => {
                const postId = post.id.toString();
                const date = new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                return (
                    <Link href={`/blog/${postId}`} key={post.id}>
                        <div className="group cursor-pointer">
                            <h2 className="text-xl font-medium group-hover:underline">{post.title}</h2>
                            <p className="text-gray-500 dark:text-gray-400">{date}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
