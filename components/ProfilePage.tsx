
import React, { useState } from 'react';
import { User, Post, Reel, Group } from '../types';
import { GridIcon } from './icons/GridIcon';
import { ReelsIcon } from './icons/ReelsIcon';
import { GroupsIcon } from './icons/GroupsIcon';
import { HeartIcon } from './icons/HeartIcon';

interface ProfilePageProps {
  user: User;
  posts: Post[];
  reels: Reel[];
  groups: Group[];
}

const ProfileStat: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="font-bold text-lg">{value}</p>
        <p className="text-sm text-gray-400">{label}</p>
    </div>
);

const TabButton: React.FC<{ onClick: () => void; isActive: boolean; children: React.ReactNode; }> = ({ onClick, isActive, children }) => (
    <button onClick={onClick} className={`flex-1 py-3 text-center transition-colors ${isActive ? 'border-b-2 border-red-500 text-white' : 'text-gray-500'}`}>
        {children}
    </button>
);


const ProfilePage: React.FC<ProfilePageProps> = ({ user, posts, reels, groups }) => {
  const [activeTab, setActiveTab] = useState<'posts' | 'reels' | 'groups'>('posts');

  const userPosts = posts.filter(post => user.posts.includes(post.id));
  const userReels = reels.filter(reel => user.reels.includes(reel.id));
  const userGroups = groups.filter(group => user.groups.includes(group.id));

  const renderContent = () => {
    switch(activeTab) {
        case 'posts':
            return (
                <div className="grid grid-cols-3 gap-1">
                    {userPosts.map(post => (
                        <div key={post.id} className="aspect-square bg-gray-800">
                            <img src={post.mediaUrl} alt={post.caption} className="w-full h-full object-cover" />
                        </div>
                    ))}
                </div>
            );
        case 'reels':
            return (
                <div className="grid grid-cols-3 gap-1">
                    {userReels.map(reel => (
                        <div key={reel.id} className="relative aspect-[9/16] bg-gray-800">
                            <img src={reel.thumbnailUrl} alt="Reel thumbnail" className="w-full h-full object-cover" />
                             <div className="absolute bottom-1 left-1 flex items-center text-white text-xs bg-black/50 rounded px-1 py-0.5">
                                <HeartIcon className="w-3 h-3 mr-1" fill="white" />
                                <span>{(reel.likes / 1000).toFixed(1)}k</span>
                            </div>
                        </div>
                    ))}
                </div>
            );
        case 'groups':
            return (
                <div className="px-2 space-y-2">
                    {userGroups.map(group => (
                         <div key={group.id} className="flex items-center bg-gray-800 p-2 rounded-lg">
                            <img src={group.coverPhoto} alt={group.name} className="w-16 h-16 rounded-md object-cover mr-4" />
                            <div className="flex-1">
                                <p className="font-bold">{group.name}</p>
                                <p className="text-sm text-gray-400">{group.memberCount} membros</p>
                            </div>
                            <button className="bg-gray-700 text-white font-semibold py-1 px-4 rounded-lg text-sm hover:bg-gray-600">
                                Ver
                            </button>
                        </div>
                    ))}
                </div>
            );
    }
  }

  return (
    <div className="pt-14 pb-16">
      <div className="p-4">
        <div className="flex items-center mb-4">
          <img src={user.profilePicture} alt={user.username} className="w-20 h-20 rounded-full mr-6" />
          <div className="flex-1 flex justify-around">
             <ProfileStat value={user.posts.length} label="Publicações" />
             <ProfileStat value={user.followers} label="Seguidores" />
             <ProfileStat value={user.following} label="Seguindo" />
          </div>
        </div>
        
        <div>
          <h2 className="font-bold">{user.fullName}</h2>
          <p className="text-sm text-gray-400">@{user.username}</p>
          <p className="text-sm my-2">{user.bio}</p>
          <p className="text-xs font-semibold bg-gray-700 text-red-400 inline-block px-2 py-1 rounded-full">{user.sport}</p>
        </div>

        <div className="flex items-center space-x-2 mt-4">
            <button className="flex-1 bg-red-600 text-white font-bold py-2 rounded-lg text-sm hover:bg-red-700 transition-colors">Seguir</button>
            <button className="flex-1 bg-gray-700 text-white font-bold py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">Mensagem</button>
        </div>
      </div>
      
      <div className="border-t border-gray-700">
        <div className="flex">
            <TabButton onClick={() => setActiveTab('posts')} isActive={activeTab === 'posts'}>
                <GridIcon className="w-6 h-6 mx-auto" />
            </TabButton>
            <TabButton onClick={() => setActiveTab('reels')} isActive={activeTab === 'reels'}>
                <ReelsIcon className="w-6 h-6 mx-auto" />
            </TabButton>
             <TabButton onClick={() => setActiveTab('groups')} isActive={activeTab === 'groups'}>
                <GroupsIcon className="w-6 h-6 mx-auto" />
            </TabButton>
        </div>
         <div className="py-1">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;