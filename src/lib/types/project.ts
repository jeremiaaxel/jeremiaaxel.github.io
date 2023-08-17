/*
 * Project
 * Consists of:
 * - Project name
 * - Project description
 * - Project tools
 * - Project tags
 * - Project links (if any)
 */

import type { Task } from './task';

export type Project = {
	type: string;
	name: string;
	description: string;
	tasks: Task[];
	techStacks: string[];
	tags: string[];
	organization?: string;
	url?: string;	
}

export type ProjectsByType = {
	[key: string]: Project[];
};

