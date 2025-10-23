import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

export const siteConfig = {
  name: "Unity Hall",
  description: "Your community, your space. A welcoming hub for activities, events, and connection in the heart of our town.",
  tagline: "Bringing Our Community Together",
  contact: {
    address: "123 Community Lane, Townsville, UK, AB1 2CD",
    phone: "01234 567890",
    email: "hello@unityhall.org.uk",
  },
  socials: [
    { name: "Facebook", icon: Facebook, url: "https://facebook.com" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
    { name: "Instagram", icon: Instagram, url: "https://instagram.com" },
    { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  ],
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Activities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const heroData = {
  tagline: "Your Community, Your Space",
  title: "Welcome to Unity Hall",
  subtitle: "A vibrant hub for learning, creativity, and connection. Discover classes, events, and facilities for everyone.",
  images: [
    "https://picsum.photos/seed/community1/1920/1080",
    "https://picsum.photos/seed/community2/1920/1080",
    "https://picsum.photos/seed/community3/1920/1080",
  ],
};

export const services = [
  {
    title: "Community Cafe",
    description: "Enjoy fresh coffee, homemade cakes, and light lunches in a friendly, relaxed atmosphere. Open to all.",
    image: "https://picsum.photos/seed/cafe/600/400",
    category: "Facilities",
  },
  {
    title: "Yoga & Wellness Classes",
    description: "From beginner's yoga to mindfulness meditation, find a class to support your physical and mental wellbeing.",
    image: "https://picsum.photos/seed/yoga/600/400",
    category: "Classes",
  },
  {
    title: "Art & Craft Workshops",
    description: "Unleash your creativity with our range of workshops, including pottery, painting, and textile arts.",
    image: "https://picsum.photos/seed/art/600/400",
    category: "Workshops",
  },
  {
    title: "Main Hall Hire",
    description: "A versatile space perfect for parties, conferences, and large community events. Capacity for up to 150 people.",
    image: "https://picsum.photos/seed/hall/600/400",
    category: "Facilities",
  },
  {
    title: "Digital Skills Hub",
    description: "Get help with computers, tablets, and smartphones. We offer drop-in sessions and structured courses.",
    image: "https://picsum.photos/seed/digital/600/400",
    category: "Programmes",
  },
  {
    title: "Parent & Toddler Group",
    description: "A fun and supportive group for parents and young children to play, learn, and socialize.",
    image: "https://picsum.photos/seed/toddler/600/400",
    category: "Programmes",
  },
  {
    title: "Community Garden",
    description: "Join our green-fingered volunteers and help cultivate our beautiful community garden. All welcome.",
    image: "https://picsum.photos/seed/garden/600/400",
    category: "Programmes",
  },
  {
    title: "Meeting Room Hire",
    description: "Smaller, private rooms available for meetings, training sessions, or consultations. Equipped with AV.",
    image: "https://picsum.photos/seed/meeting/600/400",
    category: "Facilities",
  },
];

export const galleryImages = [
  { id: 1, src: "https://picsum.photos/seed/event1/800/600", alt: "Summer Fete" },
  { id: 2, src: "https://picsum.photos/seed/event2/800/600", alt: "Art Workshop" },
  { id: 3, src: "https://picsum.photos/seed/event3/800/600", alt: "Children's Party" },
  { id: 4, src: "https://picsum.photos/seed/event4/800/600", alt: "Yoga Class in session" },
  { id: 5, src: "https://picsum.photos/seed/event5/800/600", alt: "Community Cafe gathering" },
  { id: 6, src: "https://picsum.photos/seed/event6/800/600", alt: "Volunteers in the garden" },
  { id: 7, src: "https://picsum.photos/seed/event7/800/600", alt: "Digital skills workshop" },
  { id: 8, src: "https://picsum.photos/seed/event8/800/600", alt: "Live music night" },
];

export const testimonials = [
  {
    quote: "Unity Hall is the heart of our community. The staff are so friendly, and there's always something interesting going on. My family and I love it here.",
    author: "Sarah L.",
    role: "Local Resident",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    quote: "I hired the main hall for my son's birthday party, and it was perfect. The facilities are excellent, and the booking process was so simple and straightforward.",
    author: "David M.",
    role: "Parent",
    avatar: "https://i.pravatar.cc/150?u=david",
  },
  {
    quote: "The weekly yoga class is my little oasis of calm. The instructor is fantastic, and the atmosphere is so welcoming. Highly recommended!",
    author: "Emily R.",
    role: "Class Member",
    avatar: "https://i.pravatar.cc/150?u=emily",
  },
];

export const openingHours = {
  Monday: "9:00 AM - 8:00 PM",
  Tuesday: "9:00 AM - 8:00 PM",
  Wednesday: "9:00 AM - 5:00 PM",
  Thursday: "9:00 AM - 8:00 PM",
  Friday: "9:00 AM - 5:00 PM",
  Saturday: "10:00 AM - 4:00 PM",
  Sunday: "Closed",
};