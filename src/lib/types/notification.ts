import type { ComponentType } from 'svelte';
import type { Icon } from 'lucide-svelte';

export type Notification = {
	icon?: ComponentType<Icon>;
    title: string;
    detail?: string;
}