/**
 * Application-wide constants
 */

export const APP_NAME = "RomanLearn";
export const APP_DESCRIPTION = "Your Gateway to Quality Education";

export const NAVIGATION_ITEMS = [
  { id: "home", label: "Home", path: "/", icon: "home" },
  { id: "courses", label: "Courses", path: "/courses", icon: "book" },
  {
    id: "instructors",
    label: "Instructors",
    path: "/instructors",
    icon: "users",
  },
  { id: "about", label: "About", path: "/about", icon: "info-circle" },
  { id: "contact", label: "Contact", path: "/contact", icon: "mail" },
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
