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
  { id: "overview", label: "Overview", path: "/admin/overview", icon: "gauge" },
  { id: "users", label: "Users", path: "/admin/users", icon: "users" },
  {
    id: "institutes",
    label: "Institutes",
    path: "/admin/institutes",
    icon: "school",
  },
  { id: "courses", label: "Courses", path: "/admin/courses", icon: "book" },
  {
    id: "marketing",
    label: "Marketing",
    path: "/admin/marketing",
    icon: "megaphone",
  },
  {
    id: "reports",
    label: "Reports",
    path: "/admin/reports",
    icon: "chart-bar",
  },
  {
    id: "settings",
    label: "Settings",
    path: "/admin/settings",
    icon: "settings",
  },
];
