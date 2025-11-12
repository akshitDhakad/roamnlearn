/**
 * Application-wide constants
 */

export const APP_NAME = "RoamLearn";
export const APP_DESCRIPTION = "Your Gateway to Educational Tours & Adventures";

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: "home", hasDropdown: false },
  {
    id: "destinations",
    label: "Destinations",
    path: "/destinations",
    icon: "map-pin",
    hasDropdown: true
  },
  {
    id: "tours",
    label: "Tours",
    path: "/tours",
    icon: "route",
    hasDropdown: true,
  },
  {
    id: "guides",
    label: "Tour Guides",
    path: "/guides",
    icon: "users",
    hasDropdown: false,
  },
  { id: "about", label: "About", path: "/about", icon: "info-circle", hasDropdown: false },
  { id: "contact", label: "Contact", path: "/contact", icon: "mail", hasDropdown: false },
];

/**
 * Tour categories for mega menu dropdown
 */
export const TOUR_CATEGORIES = [
  {
    id: "culture",
    title: "Cultural Tours",
    description: "Explore history, art, and traditions",
    icon: "building-monument",
    color: "#e63946",
    tours: [
      { label: "Historical Sites", path: "/destinations/culture/historical" },
      { label: "Museums & Art", path: "/destinations/culture/museums" },
      { label: "Local Traditions", path: "/destinations/culture/traditions" },
      { label: "Architecture Tours", path: "/destinations/culture/architecture" },
    ],
  },
  {
    id: "adventure",
    title: "Adventure Tours",
    description: "Thrilling outdoor experiences",
    icon: "mountain",
    color: "#d81b60",
    tours: [
      { label: "Mountain Climbing", path: "/destinations/adventure/climbing" },
      { label: "Hiking & Trekking", path: "/destinations/adventure/hiking" },
      { label: "Water Sports", path: "/destinations/adventure/water-sports" },
      { label: "Wildlife Safari", path: "/destinations/adventure/safari" },
    ],
  },
  {
    id: "science",
    title: "Science & Nature",
    description: "Educational and eco-friendly tours",
    icon: "plant",
    color: "#2e7d32",
    tours: [
      { label: "Nature Reserves", path: "/destinations/science/nature" },
      { label: "Science Centers", path: "/destinations/science/centers" },
      { label: "Planetariums", path: "/destinations/science/space" },
      { label: "Botanical Gardens", path: "/destinations/science/botanical" },
    ],
  },
  {
    id: "sports",
    title: "Sports Tours",
    description: "Active and sporting adventures",
    icon: "ball-football",
    color: "#0288d1",
    tours: [
      { label: "Stadium Tours", path: "/destinations/sports/stadiums" },
      { label: "Cycling Routes", path: "/destinations/sports/cycling" },
      { label: "Skiing & Snowboarding", path: "/destinations/sports/winter" },
      { label: "Beach Sports", path: "/destinations/sports/beach" },
    ],
  },
  {
    id: "food",
    title: "Food & Culinary",
    description: "Taste local flavors and cuisines",
    icon: "tools-kitchen-2",
    color: "#ed6c02",
    tours: [
      { label: "Food Markets", path: "/destinations/food/markets" },
      { label: "Cooking Classes", path: "/destinations/food/cooking" },
      { label: "Wine Tasting", path: "/destinations/food/wine" },
      { label: "Street Food Tours", path: "/destinations/food/street" },
    ],
  },
  {
    id: "wellness",
    title: "Wellness & Relaxation",
    description: "Rejuvenate mind and body",
    icon: "yoga",
    color: "#9c27b0",
    tours: [
      { label: "Spa Retreats", path: "/destinations/wellness/spa" },
      { label: "Yoga & Meditation", path: "/destinations/wellness/yoga" },
      { label: "Hot Springs", path: "/destinations/wellness/springs" },
      { label: "Beach Relaxation", path: "/destinations/wellness/beach" },
    ],
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Careers", path: "/careers" },
    { label: "Blog", path: "/blog" },
  ],
  resources: [
    { label: "Help Center", path: "/help" },
    { label: "Documentation", path: "/docs" },
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
  ],
  social: [
    { label: "Facebook", path: "https://facebook.com", icon: "brand-facebook" },
    { label: "Twitter", path: "https://twitter.com", icon: "brand-twitter" },
    { label: "LinkedIn", path: "https://linkedin.com", icon: "brand-linkedin" },
    { label: "YouTube", path: "https://youtube.com", icon: "brand-youtube" },
  ],
};
