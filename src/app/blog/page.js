import Image from "next/image";
import { db } from "@/db";
import { postsTable } from "@/db/schema"
import CreatePostForm from "@/components/CreatePostForm";

export default async function page() {
    try {
        const posts = await db.query.postsTable.findMany();
        console.log("posts:", posts);
        return (
            <div className="max-w-4xl mx-auto p-4">
                <CreatePostForm />

                <div className="space-y-6">
                    {posts.map(post => (
                        <div key={post.id} className="border rounded-lg p-6 shadow-sm">
                            <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
                            <p className="text-gray-600">{post.content}</p>
                        </div>
                    ))}
                </div>

                <Image
                    width={1512}
                    height={550}
                    className='absolute left-1/2 top-0 -z-10 -translate-x-1/2'
                    src='/gradient-background-top.png'
                    alt=''
                    role='presentation'
                    priority
                />
                <Image
                    width={1512}
                    height={447}
                    className='absolute -bottom-6 left-1/2 -z-10 -translate-x-1/2'
                    src='/gradient-background-bottom.png'
                    alt=''
                    role='presentation'
                    priority
                />
            </div>
        );
    } catch (error) {
        console.error("Error fetching posts:", error);
        return <div>Error loading posts</div>;
    }
}