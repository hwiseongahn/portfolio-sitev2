"use client";

export default function PostsListView({ posts }) {
    return (
        <div className="space-y-6">
            {posts.map(post => (
                <div key={post.id} className="collapse shadow-feature-card dark:shadow-feature-card-dark">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium">
                        {post.title}
                    </div>
                    <div className="collapse-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>
            ))}
        </div>
    );
}
