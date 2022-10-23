import { ElementNode } from "@graphcms/rich-text-types";

export interface LayoutProps {
  children: React.ReactNode;
}

interface Author {
  bio: string;
  name: string;
  photo: {
    url: string;
  };
}

export interface Content {
  raw: {
    children: ElementNode[];
  };
}

export interface RichContextProps {
  content: Content;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  featuredImage: {
    url: string;
    height: number;
    width: number;
  };
  author: Author;
}

export interface PostWithContent extends BlogPost {
  content: Content;
}
export interface PostWithoutContent {
  post: BlogPost;
}
export interface Post {
  post: PostWithContent;
}

export interface BlogPostData {
  posts: BlogPost[];
}

export interface BlogError {
  error: string;
  status: number;
}

export interface PostsError {
  errors: BlogError[];
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
}

export interface HomeProps {
  posts: BlogPostData;
  categories: PostCategory;
}

export interface PostCategories {
  categories: PostCategory[];
}
