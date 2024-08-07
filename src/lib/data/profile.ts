import type Profile from '$lib/types/profile';
import { Mail, Linkedin, Github } from 'lucide-svelte';

const data: Profile = {
  name: 'Jeremia Axel',
  description:
    'Software Engineer. I love to learn new things.\nLooking for the opportunity to work with a great team and awesome technologies!',
  links: [
    {
      name: 'email',
      icon: Mail,
      iconAlt: 'Email icon',
      url: 'mailto:jeremiaaxelb+myweb@gmail.com',
    },
    {
      name: 'linkedin',
      icon: Linkedin,
      iconAlt: 'LinkedIn icon',
      url: 'https://www.linkedin.com/in/jeremiaaxel/',
    },
    {
      name: 'github',
      icon: Github,
      iconAlt: 'GitHub icon',
      url: 'https://github.com/jeremiaaxel',
    },
  ],
};

export default data;
