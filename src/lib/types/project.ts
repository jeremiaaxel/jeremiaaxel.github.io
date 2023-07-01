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

export interface IProject {
	type: string;
	name: string;
	description: string;
	tasks: Task[];
	techStacks: string[];
	tags: string[];
	organization?: string;
	url?: string;	
}

export class Project implements IProject {
	type: string;
	name: string;
	description: string;
	tasks: Task[];
	techStacks: string[];
	tags: string[];
	organization?: string;
	url?: string;

	constructor() {
		this.type = '';
		this.name = '';
		this.description = '';
		this.tasks = [];
		this.techStacks = [];
		this.tags = [];
		this.organization = '';
		this.url = '';
	}


	containsSkills(skills: string[]): boolean {
		return this.techStacks.filter(value => skills.includes(value)).length > 0;
	}
}

export type ProjectsByType = {
	[key: string]: Project[];
};

