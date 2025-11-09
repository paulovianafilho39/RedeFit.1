
import React, { useState } from 'react';
import { Post as PostType, User } from '../types';
import { HeartIcon } from './icons/HeartIcon';
import { ChatBubbleIcon } from './icons/ChatBubbleIcon';
import { ShareIcon } from './icons/ShareIcon';

interface PostProps {
  post: PostType;
  author: User;
}

const Post: React.FC<PostProps> = ({ post, author }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden mb-4 border border-gray-700">
      <div className="p-3 flex items-center">
        <img src={author.profilePicture} alt={author.username} className="w-10 h-10 rounded-full mr-3" />
        <div>
          <p className="font-bold text-sm">{author.username}</p>
          <p className="text-xs text-gray-400">{author.sport}</p>
        </div>
      </div>
      
      <img src={post.mediaUrl} alt="Post media" className="w-full h-auto" />

      <div className="p-3">
        <div className="flex items-center space-x-4 mb-2">
          <button onClick={handleLike} className="flex items-center space-x-1 text-white">
            <HeartIcon className={`w-7 h-7 transition-colors ${isLiked ? 'text-red-500' : 'text-white'}`} fill={isLiked ? 'currentColor' : 'none'} />
          </button>
          <button className="flex items-center space-x-1 text-white">
            <ChatBubbleIcon className="w-7 h-7" />
          </button>
          <button className="flex items-center space-x-1 text-white">
            <ShareIcon className="w-7 h-7" />
          </button>
        </div>
        
        <p className="font-bold text-sm mb-1">{likeCount} curtidas</p>
        
        <p className="text-sm">
          <span className="font-bold">{author.username}</span> {post.caption}
        </p>

        <p className="text-xs text-gray-400 mt-2 uppercase">{post.timestamp}</p>
      </div>
    </div>
  );
};

export default Post;
