"use client";

import { useState } from "react";
import { Trash, Pencil, X } from 'lucide-react';
import { deletePost, updatePost } from "@/app/actions/actions";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ReactMarkdown from 'react-markdown';

export default function PostsList({ posts }) {
    // State variables for the selected post
    const [selectedPost, setSelectedPost] = useState(null);
    const [editedTitle, setEditedTitle] = useState("");
    const [editedContent, setEditedContent] = useState("");
    const [modalType, setModalType] = useState(null); // "edit" or "delete"

    // Function to open the edit modal and prefill form fields
    const openEditModal = (post) => {
        setSelectedPost(post);
        setEditedTitle(post.title);
        setEditedContent(post.content);
        setModalType("edit");
    };

    // Function to open the delete modal
    const openDeleteModal = (post) => {
        setSelectedPost(post);
        setModalType("delete");
    };

    // Function to reset form fields
    const resetFormFields = () => {
        setSelectedPost(null);
        setEditedTitle("");
        setEditedContent("");
        setModalType(null);
    };

    const handleDelete = async () => {
        if (selectedPost) {
            await deletePost(selectedPost.id);
            resetFormFields();
        }
    };

    // Handler for edit form submission
    const handleEditSubmit = (e) => {
        e.preventDefault();
        if (selectedPost) {
            updatePost(selectedPost.id, editedTitle, editedContent);
            resetFormFields();
        }
    };

    return (
        <div className="flex flex-col space-y-8 pt-4">
            {posts.map(post => {
                const date = new Date(post.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                
                // Define the slug using the post ID
                const slug = post.id.toString();
                
                return (
                    <div key={post.id} className="group">
                        <div className="flex justify-between items-start">
                            <Link href={`/blog/${slug}`}>
                                <div className="cursor-pointer">
                                    <h2 className="text-xl font-medium group-hover:underline">{post.title}</h2>
                                    <p className="text-gray-500 dark:text-gray-400">{date}</p>
                                </div>
                            </Link>
                            <div className="flex space-x-2">
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Stop event propagation
                                        openEditModal(post);
                                    }}
                                    aria-label={`Edit ${post.title}`}
                                >
                                    <Pencil className="h-4 w-4" />
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Stop event propagation
                                        openDeleteModal(post);
                                    }}
                                    aria-label={`Delete ${post.title}`}
                                >
                                    <Trash className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Edit Modal */}
            {selectedPost && modalType === "edit" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-background text-foreground w-full max-w-2xl rounded-xl border border-border dark:border-zinc-800 overflow-hidden">
                        <div className="flex justify-between items-center p-6 pb-0">
                            <h3 className="text-xl font-bold">Edit Post</h3>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={resetFormFields}
                                className="h-8 w-8"
                            >
                                <X size={18} />
                            </Button>
                        </div>
                        <div className="p-6">
                            <form onSubmit={handleEditSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="title" className="text-sm font-medium">
                                        Title
                                    </label>
                                    <Input
                                        id="title"
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="content" className="text-sm font-medium">
                                        Content
                                    </label>
                                    <Textarea
                                        id="content"
                                        value={editedContent}
                                        onChange={(e) => setEditedContent(e.target.value)}
                                        rows={12}
                                        required
                                    />
                                </div>
                                <div className="flex justify-end space-x-2 pt-2">
                                    <Button type="button" variant="secondary" onClick={resetFormFields}>
                                        Cancel
                                    </Button>
                                    <Button type="submit">
                                        Save
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Modal */}
            {selectedPost && modalType === "delete" && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="bg-background text-foreground w-full max-w-lg rounded-xl border border-border dark:border-zinc-800 overflow-hidden">
                        <div className="flex justify-between items-center p-6 pb-0">
                            <h3 className="text-xl font-bold">Delete Post</h3>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={resetFormFields}
                                className="h-8 w-8"
                            >
                                <X size={18} />
                            </Button>
                        </div>
                        <div className="p-6">
                            <p className="text-muted-foreground mb-6">
                                Are you sure you want to delete the post titled `{selectedPost.title}`?
                            </p>
                            <div className="flex justify-end space-x-2">
                                <Button variant="secondary" onClick={resetFormFields}>
                                    Cancel
                                </Button>
                                <Button variant="destructive" onClick={handleDelete}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
