

import React from 'react';
import type { BlogPost } from './blogData';

interface BlogPageProps {
    posts: BlogPost[];
    onSelectPost: (post: BlogPost) => void;
}

const FeaturedBlogCard: React.FC<{ post: BlogPost, onSelectPost: (post: BlogPost) => void }> = ({ post, onSelectPost }) => {
    return (
        <div 
            onClick={() => onSelectPost(post)} 
            className="group cursor-pointer md:grid md:grid-cols-2 md:gap-12 items-center mb-16 border-b pb-12"
            role="article"
            aria-labelledby={`featured-blog-title-${post.id}`}
        >
            <div className="overflow-hidden rounded-lg">
                <img src={post.headerImageUrl} alt={post.title} className="w-full h-auto object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="mt-6 md:mt-0">
                 <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">{post.category}</p>
                <h2 id={`featured-blog-title-${post.id}`} className="text-3xl lg:text-4xl font-bold text-black mt-2 group-hover:text-gray-700 transition-colors">{post.title}</h2>
                <p className="text-gray-600 mt-4 text-lg">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-base text-gray-500">
                    <span>{post.date}</span>
                    <span className="font-semibold text-black group-hover:underline">Leer más &rarr;</span>
                </div>
            </div>
        </div>
    );
}

const BlogCard: React.FC<{ post: BlogPost, onSelectPost: (post: BlogPost) => void }> = ({ post, onSelectPost }) => {
    return (
        <div 
            className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col group cursor-pointer border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => onSelectPost(post)}
            role="article"
            aria-labelledby={`blog-title-${post.id}`}
        >
            <div className="relative">
                <img src={post.imageUrl} alt={post.title} className="w-full h-56 object-cover" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">{post.category}</p>
                <h3 id={`blog-title-${post.id}`} className="text-xl font-bold text-black mt-2 group-hover:text-gray-700 transition-colors">{post.title}</h3>
                <p className="text-gray-600 mt-2 flex-grow">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="font-semibold text-black group-hover:underline">Leer más &rarr;</span>
                </div>
            </div>
        </div>
    );
};

const BlogPage: React.FC<BlogPageProps> = ({ posts, onSelectPost }) => {
    const featuredPost = posts[0];
    const otherPosts = posts.slice(1);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-black tracking-tight">Nuestro Blog de Belleza</h1>
                <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
                    Consejos, tutoriales y las últimas tendencias del mundo de la cosmética y el bienestar.
                </p>
            </div>
            
            {featuredPost && <FeaturedBlogCard post={featuredPost} onSelectPost={onSelectPost} />}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherPosts.map(post => (
                    <BlogCard key={post.id} post={post} onSelectPost={onSelectPost} />
                ))}
            </div>
        </div>
    );
};

export default BlogPage;