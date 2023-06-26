/*
 * Profile
 * Consists of:
 * - Profile picture
 * - Description
 * - Name
 * - Social media links
 */

type Link = {
	name: string;
	url: string;
	icon?: string;
	iconAlt?: string;
};

export type Profile = {
	name: string;
	description: string;
	links: Link[];
};

export default Profile;
