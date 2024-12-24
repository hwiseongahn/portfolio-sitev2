"use client";

import { useEffect, useState } from "react";
import { Trash, Pencil } from 'lucide-react';
import { deletePost, updatePost } from "@/app/actions/actions";
import ReactMarkdown from 'react-markdown';

export default function PostsList({ posts }) {
    // State variables for managing modals and selected post
    const [isEditModalOpen, setEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    // State variables for the edit form fields
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");

    // Function to open the edit modal and prefill form fields
    const openEditModal = (post) => {
        setSelectedPost(post);
        setEditedTitle(post.title);      // Prefill the title
        setEditedContent(post.content);  // Prefill the content
        setEditModalOpen(true);
        console.log("openEditModal called with post:", post);
    };

    // Function to open the delete modal
    const openDeleteModal = (post) => {
        setSelectedPost(post);
        setDeleteModalOpen(true);
        console.log("openDeleteModal called with post:", post);
    };

    // Function to close the edit modal and reset form fields
    const closeEditModal = () => {
        setEditModalOpen(false);
        setSelectedPost(null);
        setEditedTitle("");
        setEditedContent("");
        console.log("closeEditModal called");
    };

    // Function to close the delete modal
    const closeDeleteModal = () => {
        setDeleteModalOpen(false);
        setSelectedPost(null);
        console.log("closeDeleteModal called");
    };

    // Optional: Log whenever selectedPost changes
    useEffect(() => {
        if (selectedPost) {
            console.log("selectedPost updated:", selectedPost);
        }
    }, [selectedPost]);

    const handleDelete = async () => {
        await deletePost(selectedPost.id);
        console.log(`Deleting post with id: ${selectedPost.id}`);
        closeDeleteModal();
    };

    // Handler for edit form submission
    const handleEditSubmit = (e) => {
        e.preventDefault();
        updatePost(selectedPost.id, editedTitle, editedContent);
        console.log(`Updated post with id: ${selectedPost.id}`);
        closeEditModal();
    };

    return (
        <div className="space-y-6">
            {posts.map(post => (
                <div key={post.id} className="collapse shadow-feature-card dark:shadow-feature-card-dark">
                    <input type="checkbox" />
                    <div className="collapse-title text-xl font-medium flex justify-between items-center">
                        {post.title}
                        <div className="flex space-x-2">
                            <button
                                className="z-10"
                                onClick={() => openEditModal(post)}
                                aria-label={`Edit ${post.title}`}
                            >
                                <Pencil className="w-4 h-4" />
                            </button>
                            <button
                                className="z-10"
                                onClick={() => openDeleteModal(post)}
                                aria-label={`Delete ${post.title}`}
                            >
                                <Trash className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                    <div className="collapse-content">
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </div>
                </div>
            ))}

            {/* Edit Modal */}
            {isEditModalOpen && selectedPost && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Post</h3>
                        <form onSubmit={handleEditSubmit} className="space-y-4 mt-4">
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    value={editedTitle}
                                    onChange={(e) => setEditedTitle(e.target.value)}
                                    className="input input-bordered w-full mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="content" className="block text-sm font-medium">Content</label>
                                <textarea
                                    id="content"
                                    value={editedContent}
                                    onChange={(e) => setEditedContent(e.target.value)}
                                    className="textarea textarea-bordered w-full mt-1"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>
                            <div className="modal-action">
                                <button type="submit" className="btn btn-primary" onClick={handleEditSubmit}>Save</button>
                                <button type="button" className="btn" onClick={closeEditModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            )}

            {/* Delete Modal */}
            {isDeleteModalOpen && selectedPost && (
                <dialog open className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Delete Post</h3>
                        <p className="py-4">Are you sure you want to delete the post titled "{selectedPost.title}"?</p>
                        <div className="modal-action">
                            <button
                                className="btn btn-error"
                                onClick={handleDelete}
                                aria-label={`Delete ${selectedPost.title}`}
                            >
                                Delete
                            </button>
                            <button className="btn" onClick={closeDeleteModal}>Cancel</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
}
