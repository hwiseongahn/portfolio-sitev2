import { db } from "@/db/index";
import { notFound } from "next/navigation";
import ReactMarkdown from 'react-markdown';
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default async function BlogPost({ params }) {
    const { id } = params;
    
    try {
        // Query for the specific post directly instead of fetching all posts
        const post = await db.query.blogTable.findFirst({
            where: (table, { eq }) => eq(table.id, parseInt(id))
        });
        
        if (!post) {
            return notFound();
        }

        const formattedDate = new Date(post.createdAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const slug = post.title.toLowerCase().replace(/\s+/g, '-');

        return (
            <div className="max-w-4xl mx-auto p-4 min-h-screen">
                <div className="mb-8">
                    <Link href="/blog">
                        <Button variant="ghost" className="mb-4 -ml-2 gap-1">
                            <ArrowLeft className="h-4 w-4" />
                            Back to Blog
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
                    <p className="text-gray-500 dark:text-gray-400">{formattedDate}</p>
                </div>
                <div className="prose dark:prose-invert prose-lg max-w-none">
                    {/* Split content by double newlines to create separate paragraphs */}
                    {post.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">
                            {paragraph}
                        </p>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error("Error fetching post:", error);
        return <div>Error loading post: {error.message}</div>;
    }
}
