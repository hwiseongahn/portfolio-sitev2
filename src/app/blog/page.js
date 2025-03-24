import { db } from "@/db/index";
import CreatePostForm from "@/components/CreatePostForm";
import PostsList from "@/components/PostListEdit";
import { getServerSession } from "next-auth";
import PostsListView from "@/components/PostListView";

export default async function page() {
    const session = await getServerSession();
    console.log(session);

    try {
        const posts = await db.query.blogTable.findMany();
        // Sort posts with newest first
        const sortedPosts = [...posts].sort((a, b) => 
            new Date(b.createdAt) - new Date(a.createdAt)
        );
        console.log("posts:", sortedPosts);

        if (session && session.user.email === process.env.PRIVATE_EMAIL) {
            return (
                <div className="max-w-4xl mx-auto p-4 min-h-screen">
                    <CreatePostForm />
                    <PostsList posts={sortedPosts} />
                </div>
            );
        } else {
            return (
                <div className="max-w-4xl mx-auto p-4 min-h-screen">
                    <PostsListView posts={sortedPosts} />
                </div>
            );
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        return <div>Error loading posts</div>;
    }
}