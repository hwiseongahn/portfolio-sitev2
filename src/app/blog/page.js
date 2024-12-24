import { db } from "@/db";
import CreatePostForm from "@/components/CreatePostForm";
import PostsList from "@/components/PostListEdit";
import { getServerSession } from "next-auth";
import PostsListView from "@/components/PostListView";

export default async function page() {
    const session = await getServerSession();
    console.log(session);

    try {
        const posts = await db.query.postsTable.findMany();
        posts.reverse();
        console.log("posts:", posts);


        if (session && session.user.email === process.env.PRIVATE_EMAIL) {
            return (
                <div className="max-w-4xl mx-auto p-4 min-h-screen">
                    <CreatePostForm />
                    <PostsList posts={posts} />
                </div>
            );
        } else {
            return (
                <div className="max-w-4xl mx-auto p-4 min-h-screen">
                    <PostsListView posts={posts} />
                </div>
            );
        }
    } catch (error) {
        console.error("Error fetching posts:", error);
        return <div>Error loading posts</div>;
    }
}