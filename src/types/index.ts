/**
 * Type definitions for the educational website
 */

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
