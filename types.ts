export interface Comment {
  id: string;
  username: string;
  text: string;
}

export interface Post {
  id: string;
  userId: string;
  mediaUrl: string;
  mediaType: 'image' | 'video';
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
}

export interface Story {
  id: string;
  userId: string;
  mediaUrl: string;
  timestamp: string;
}

export interface Reel {
  id: string;
  userId: string;
  thumbnailUrl: string;
  likes: number;
}

export interface Group {
    id: string;
    name: string;
    coverPhoto: string;
    memberCount: number;
}

export interface User {
  id: string;
  username: string;
  fullName: string;
  profilePicture: string;
  bio: string;
  sport: string;
  followers: number;
  following: number;
  posts: string[]; // array of post IDs
  stories: string[]; // array of story IDs
  reels: string[]; // array of reel IDs
  groups: string[]; // array of group IDs
}

export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrls: string[];
  description: string;
  brand: string;
  location: string;
  sellerId: string;
}

export enum Page {
  Feed,
  Explore,
  Marketplace,
  Profile,
}