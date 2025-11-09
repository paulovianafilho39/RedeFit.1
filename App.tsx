import React, { useState } from 'react';
import { Page, User, Post as PostType, Product, Story, Reel, Group } from './types';
import { 
  users as mockUsers, 
  posts as mockPosts, 
  products as mockProducts,
  stories as mockStories,
  reels as mockReels,
  groups as mockGroups
} from './data/mockData';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import Feed from './components/Feed';
import ExplorePage from './components/ExplorePage';
import MarketplacePage from './components/MarketplacePage';
import ProfilePage from './components/ProfilePage';
import LoginScreen from './components/LoginScreen';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activePage, setActivePage] = useState<Page>(Page.Feed);
  
  const [allUsers] = useState<User[]>(mockUsers);
  const [allPosts] = useState<PostType[]>(mockPosts);
  const [allProducts] = useState<Product[]>(mockProducts);
  const [allStories] = useState<Story[]>(mockStories);
  const [allReels] = useState<Reel[]>(mockReels);
  const [allGroups] = useState<Group[]>(mockGroups);


  // Simulate logging in with the first user from mock data
  const currentUser = allUsers[0]; 

  const handleLogin = () => {
    setIsLoggedIn(true);
    setActivePage(Page.Feed);
  };
  
  const handleNavigation = (page: Page) => {
    setActivePage(page);
  };

  const handleNewPost = () => {
    // In a real app, this would open a modal to create a new post
    // This could also include options for creating stories or reels
    alert('Funcionalidade de Nova Postagem a ser implementada!');
  };

  const renderPage = () => {
    switch (activePage) {
      case Page.Feed:
        // For simplicity, the feed shows all posts. In a real app, it would be filtered.
        return <Feed posts={allPosts} users={allUsers} stories={allStories} currentUser={currentUser} />;
      case Page.Explore:
        return <ExplorePage posts={allPosts} />;
      case Page.Marketplace:
        return <MarketplacePage products={allProducts} users={allUsers} />;
      case Page.Profile:
        return <ProfilePage user={currentUser} posts={allPosts} reels={allReels} groups={allGroups} />;
      default:
        return <Feed posts={allPosts} users={allUsers} stories={allStories} currentUser={currentUser} />;
    }
  };
  
  if (!isLoggedIn) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <div className="max-w-md mx-auto bg-gray-900 min-h-screen">
      <Header />
      <main className="w-full">
        {renderPage()}
      </main>
      <BottomNav 
        activePage={activePage} 
        onNavigate={handleNavigation}
        onNewPost={handleNewPost}
        currentUser={currentUser}
      />
    </div>
  );
};

export default App;