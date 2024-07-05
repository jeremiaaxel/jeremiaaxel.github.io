/*
 * Profile
 * Consists of:
 * - Profile picture
 * - Description
 * - Name
 * - Social media links
 */

import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

type Link = {
  name: string;
  url: string;
  icon?: ComponentType<Icon>;
  iconAlt?: string;
};

export type Profile = {
  name: string;
  description: string;
  links: Link[];
};

export default Profile;
