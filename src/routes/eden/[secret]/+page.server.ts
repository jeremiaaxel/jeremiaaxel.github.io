import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { SECRET_PASSWORD, WHATSAPP_NUMBER } from '$env/static/private'

export const prerender = false;
export const ssr = true;

export const load: PageServerLoad = async ({ params }) => {
  if (!SECRET_PASSWORD || !WHATSAPP_NUMBER) {
    throw error(500, 'Secret password or WhatsApp number not configured');
  }

  const secret = params.secret as string;
  if (secret !== SECRET_PASSWORD) {
    error(404, 'Not found');
  }

  const whatsappNumber = WHATSAPP_NUMBER;
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}`;

  return {
    whatsappUrl,
  };
};
