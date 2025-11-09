import { User, Post, Product, Story, Reel, Group } from '../types';

export const users: User[] = [
  {
    id: 'u1',
    username: 'runnermaster',
    fullName: 'Alex Johnson',
    profilePicture: 'https://picsum.photos/seed/u1/200',
    bio: 'Marathon runner and coffee enthusiast. Chasing new personal bests every day. 🏃‍♂️💨',
    sport: 'Running',
    followers: 1250,
    following: 320,
    posts: ['p1', 'p2'],
    stories: ['s1'],
    reels: ['r1'],
    groups: ['g1'],
  },
  {
    id: 'u2',
    username: 'yogagirl',
    fullName: 'Bella Chen',
    profilePicture: 'https://picsum.photos/seed/u2/200',
    bio: 'Finding balance on and off the mat. Vinyasa flow teacher. ✨',
    sport: 'Yoga',
    followers: 5800,
    following: 150,
    posts: ['p3'],
    stories: ['s2'],
    reels: [],
    groups: ['g1', 'g2'],
  },
  {
    id: 'u3',
    username: 'ironmike',
    fullName: 'Mike Davis',
    profilePicture: 'https://picsum.photos/seed/u3/200',
    bio: 'Powerlifter. Eat, sleep, lift, repeat. #noexcuses',
    sport: 'Powerlifting',
    followers: 2300,
    following: 85,
    posts: ['p4', 'p5'],
    stories: [],
    reels: ['r2', 'r3'],
    groups: ['g2'],
  },
];

export const posts: Post[] = [
  {
    id: 'p1',
    userId: 'u1',
    mediaUrl: 'https://picsum.photos/seed/p1/600/800',
    mediaType: 'image',
    caption: 'Morning run with a beautiful sunrise. Nothing beats this feeling! #running #sunrise',
    likes: 152,
    comments: [
      { id: 'c1', username: 'yogagirl', text: 'Beautiful view!' },
      { id: 'c2', username: 'ironmike', text: 'Great start to the day.' },
    ],
    timestamp: '2 hours ago',
  },
  {
    id: 'p2',
    userId: 'u1',
    mediaUrl: 'https://picsum.photos/seed/p2/600/800',
    mediaType: 'image',
    caption: 'New running shoes! Ready to hit the pavement.',
    likes: 98,
    comments: [],
    timestamp: '1 day ago',
  },
  {
    id: 'p3',
    userId: 'u2',
    mediaUrl: 'https://picsum.photos/seed/p3/600/800',
    mediaType: 'image',
    caption: 'Finding my zen in this warrior pose. #yoga #mindfulness',
    likes: 430,
    comments: [],
    timestamp: '5 hours ago',
  },
  {
    id: 'p4',
    userId: 'u3',
    mediaUrl: 'https://picsum.photos/seed/p4/600/800',
    mediaType: 'image',
    caption: 'New PR on deadlifts today! 220kg felt smooth. Let\'s go! 🔥 #powerlifting #deadlift',
    likes: 215,
    comments: [{ id: 'c3', username: 'runnermaster', text: 'Beast mode! 💪' }],
    timestamp: '8 hours ago',
  },
  {
    id: 'p5',
    userId: 'u3',
    mediaUrl: 'https://picsum.photos/seed/p5/600/800',
    mediaType: 'image',
    caption: 'Meal prep Sunday. Fueling for the week ahead.',
    likes: 180,
    comments: [],
    timestamp: '3 days ago',
  },
];

export const stories: Story[] = [
  { id: 's1', userId: 'u1', mediaUrl: 'https://picsum.photos/seed/s1/400/600', timestamp: '1 hour ago' },
  { id: 's2', userId: 'u2', mediaUrl: 'https://picsum.photos/seed/s2/400/600', timestamp: '3 hours ago' },
];

export const reels: Reel[] = [
  { id: 'r1', userId: 'u1', thumbnailUrl: 'https://picsum.photos/seed/r1/400/600', likes: 1203 },
  { id: 'r2', userId: 'u3', thumbnailUrl: 'https://picsum.photos/seed/r2/400/600', likes: 5432 },
  { id: 'r3', userId: 'u3', thumbnailUrl: 'https://picsum.photos/seed/r3/400/600', likes: 2100 },
];

export const groups: Group[] = [
    { id: 'g1', name: 'Running Club', coverPhoto: 'https://picsum.photos/seed/g1/400', memberCount: 150 },
    { id: 'g2', name: 'Powerlifting Crew', coverPhoto: 'https://picsum.photos/seed/g2/400', memberCount: 85 },
];


export const products: Product[] = [
    {
        id: 'prod1',
        name: 'Pro Performance Whey Protein',
        price: 49.99,
        imageUrls: ['https://picsum.photos/seed/prod1a/400', 'https://picsum.photos/seed/prod1b/400'],
        description: '25g of high-quality whey protein per serving to support muscle growth and recovery.',
        brand: 'NutriSport',
        location: 'São Paulo, SP',
        sellerId: 'u3'
    },
    {
        id: 'prod2',
        name: 'FlexFit Training Shorts',
        price: 34.99,
        imageUrls: ['https://picsum.photos/seed/prod2a/400', 'https://picsum.photos/seed/prod2b/400', 'https://picsum.photos/seed/prod2c/400'],
        description: 'Lightweight, breathable shorts with 4-way stretch for maximum mobility.',
        brand: 'FlexFit',
        location: 'Rio de Janeiro, RJ',
        sellerId: 'u1'
    },
    {
        id: 'prod3',
        name: 'Endurance Running Shoes',
        price: 129.99,
        imageUrls: ['https://picsum.photos/seed/prod3a/400'],
        description: 'Cushioned and responsive shoes designed for long-distance running.',
        brand: 'Pace',
        location: 'Curitiba, PR',
        sellerId: 'u1'
    },
    {
        id: 'prod4',
        name: 'Adjustable Dumbbell Set',
        price: 299.99,
        imageUrls: ['https://picsum.photos/seed/prod4a/400', 'https://picsum.photos/seed/prod4b/400'],
        description: 'Save space with this adjustable dumbbell set, ranging from 5 to 52.5 lbs.',
        brand: 'IronHome',
        location: 'Belo Horizonte, MG',
        sellerId: 'u3'
    },
    {
        id: 'prod5',
        name: 'Premium Yoga Mat',
        price: 59.99,
        imageUrls: ['https://picsum.photos/seed/prod5a/400', 'https://picsum.photos/seed/prod5b/400'],
        description: 'Non-slip, eco-friendly mat with extra cushioning for comfort and support.',
        brand: 'ZenFlow',
        location: 'Florianópolis, SC',
        sellerId: 'u2'
    },
    {
        id: 'prod6',
        name: 'Smart Fitness Tracker',
        price: 99.99,
        imageUrls: ['https://picsum.photos/seed/prod6a/400', 'https://picsum.photos/seed/prod6b/400', 'https://picsum.photos/seed/prod6c/400'],
        description: 'Track your steps, heart rate, sleep, and workouts with this sleek fitness watch.',
        brand: 'FitTrack',
        location: 'Porto Alegre, RS',
        sellerId: 'u2'
    },
];