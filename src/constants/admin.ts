/**
 * Admin-specific navigation constants
 */

export type AdminNavItem = {
  id: string;
  label: string;
  path: string;
  icon: string;
};

export const ADMIN_NAV_ITEMS: AdminNavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: "gauge",
  },
  {
    id: "destinations",
    label: "Destinations",
    path: "/admin/destinations",
    icon: "map-pin",
  },
  { id: "users", label: "Users", path: "/admin/users", icon: "users" },
  {
    id: "institutes",
    label: "Institutes",
    path: "/admin/institutes",
    icon: "school",
  },
  {
    id: "documents",
    label: "Documents",
    path: "/admin/documents",
    icon: "file",
  },
  {
    id: "notification",
    label: "Notification",
    path: "/admin/notification",
    icon: "bell",
  },
  {
    id: "questions",
    label: "Questions",
    path: "/admin/questions",
    icon: "help",
  },
  { id: "results", label: "Results", path: "/admin/results", icon: "list" },
  { id: "career", label: "Career", path: "/admin/career", icon: "briefcase" },
  {
    id: "marketing",
    label: "Marketing",
    path: "/admin/marketing",
    icon: "eye",
  },
  {
    id: "support",
    label: "Support",
    path: "/admin/support",
    icon: "help-circle",
  },
];
