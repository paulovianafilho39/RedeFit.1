
import React from 'react';
import { Post } from '../types';
import { SearchIcon } from './icons/SearchIcon';

interface ExplorePageProps {
  posts: Post[];
}

const ExplorePage: React.FC<ExplorePageProps> = ({ posts }) => {
  return (
    <div className="pt-14 pb-16 px-1">
      <div className="sticky top-14 bg-gray-900 py-2 mb-2 z-5">
         <div className="relative">
            <input 
              type="text" 
              placeholder="Buscar usuários ou #hashtags"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
         </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {posts.map(post => (
          <div key={post.id} className="aspect-square bg-gray-800">
            <img src={post.mediaUrl} alt={post.caption} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExplorePage;
