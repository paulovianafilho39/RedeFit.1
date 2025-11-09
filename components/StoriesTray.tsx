
import React from 'react';
import { User, Story } from '../types';
import StoryCircle from './StoryCircle';

interface StoriesTrayProps {
    users: User[];
    stories: Story[];
    currentUser: User;
}

const StoriesTray: React.FC<StoriesTrayProps> = ({ users, stories, currentUser }) => {
    const userMap = new Map(users.map(u => [u.id, u]));
    const usersWithStories = stories
        .map(story => userMap.get(story.userId))
        .filter((user): user is User => !!user)
        .filter(user => user.id !== currentUser.id);

    // Remove duplicates
    const uniqueUsersWithStories = Array.from(new Set(usersWithStories.map(u => u.id)))
      .map(id => usersWithStories.find(u => u.id === id)!);


    const handleStoryClick = (username: string) => {
        alert(`Visualizando story de ${username}`);
    };
    
    const handleAddStory = () => {
        // In a real app, this would open the camera/gallery to create a story
        alert('Funcionalidade de adicionar story (câmera, filtros, etc.) a ser implementada!');
    };


    return (
        <div className="border-b border-gray-700 mb-2">
            <div className="flex space-x-4 p-3 overflow-x-auto scrollbar-hide">
                <StoryCircle 
                    user={currentUser} 
                    isCurrentUser 
                    onClick={handleAddStory}
                />
                {uniqueUsersWithStories.map(user => (
                    <StoryCircle 
                        key={user.id} 
                        user={user} 
                        hasStory 
                        onClick={() => handleStoryClick(user.username)}
                    />
                ))}
            </div>
        </div>
    );
};

// Helper style to hide scrollbar (for browsers that support it)
const style = document.createElement('style');
style.innerHTML = `
    .scrollbar-hide::-webkit-scrollbar {
        display: none;
    }
    .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
`;
document.head.appendChild(style);

export default StoriesTray;