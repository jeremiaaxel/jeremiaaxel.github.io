/**
 * Base domain hosting the portfolio and every personal app as a subdomain.
 * Change this once and every app link (navbar, project cards, profile email)
 * follows automatically. If the domain ever changes, move the old value into
 * legacyBaseDomains below so URLs stored in data.json keep resolving.
 */
export const BASE_DOMAIN = 'jeremiaaxel.dev';

/** Base domains this site previously lived on. */
const legacyBaseDomains: string[] = [];

/** The portfolio site origin, e.g. https://jeremiaaxel.dev */
export const siteUrl = `https://${BASE_DOMAIN}`;

/** URL of an app hosted at <subdomain>.<BASE_DOMAIN>, e.g. appUrl('work-utils'). */
export function appUrl(subdomain: string): string {
  return `https://${subdomain}.${BASE_DOMAIN}`;
}

/**
 * Rewrites a stored URL whose host is the base domain (with or without a
 * subdomain) onto the current BASE_DOMAIN. External URLs are left untouched.
 */
export function resolveAppUrl(url: string): string {
  try {
    const parsed = new URL(url);
    const knownDomains = [BASE_DOMAIN, ...legacyBaseDomains];
    const { hostname } = parsed;
    const matchedDomain = knownDomains.find(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`),
    );
    if (!matchedDomain) return url;
    const subdomain =
      hostname === matchedDomain ? '' : hostname.slice(0, -(matchedDomain.length + 1));
    parsed.hostname = subdomain ? `${subdomain}.${BASE_DOMAIN}` : BASE_DOMAIN;
    return parsed.toString();
  } catch {
    // Not an absolute URL (e.g. relative path or mailto) — leave as-is.
    return url;
  }
}
