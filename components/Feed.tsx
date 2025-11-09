
import React from 'react';
import { Post as PostType, User, Story } from '../types';
import Post from './Post';
import StoriesTray from './StoriesTray';

interface FeedProps {
  posts: PostType[];
  users: User[];
  stories: Story[];
  currentUser: User;
}

const Feed: React.FC<FeedProps> = ({ posts, users, stories, currentUser }) => {
  const userMap = new Map(users.map(user => [user.id, user]));

  return (
    <div className="pt-14 pb-16">
      <StoriesTray users={users} stories={stories} currentUser={currentUser} />
      <div className="px-1">
        {posts.map(post => {
          const author = userMap.get(post.userId);
          if (!author) return null;
          return <Post key={post.id} post={post} author={author} />;
        })}
      </div>
    </div>
  );
};

export default Feed;