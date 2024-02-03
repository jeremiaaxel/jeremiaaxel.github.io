export const prerender = true;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    umami?: any;
  }
}
