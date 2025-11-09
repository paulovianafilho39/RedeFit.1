
import React from 'react';
import { User } from '../types';

interface StoryCircleProps {
    user: User;
    hasStory?: boolean;
    isCurrentUser?: boolean;
    onClick: () => void;
}

const StoryCircle: React.FC<StoryCircleProps> = ({ user, hasStory, isCurrentUser, onClick }) => {
    return (
        <div className="flex flex-col items-center space-y-1 flex-shrink-0" onClick={onClick}>
            <div className={`relative rounded-full p-0.5 ${hasStory ? 'bg-gradient-to-tr from-red-500 to-orange-400' : ''}`}>
                <div className="bg-gray-900 p-0.5 rounded-full">
                    <img
                        src={user.profilePicture}
                        alt={user.username}
                        className="w-16 h-16 rounded-full object-cover"
                    />
                </div>
                {isCurrentUser && (
                    <div className="absolute bottom-0 right-0 bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center border-2 border-gray-900">
                        <span className="text-white font-bold text-lg">+</span>
                    </div>
                )}
            </div>
            <p className="text-xs text-center truncate w-20">{isCurrentUser ? "Seu story" : user.username}</p>
        </div>
    );
};

export default StoryCircle;