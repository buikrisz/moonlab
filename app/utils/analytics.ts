const CONSENT_STORAGE_KEY = 'moonlab_cookie_consent';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  if (typeof window === 'undefined') {
    return;
  }

  const consent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

  if (consent !== 'accepted') {
    return;
  }

  if (!window.gtag) {
    return;
  }

  window.gtag('event', eventName, params || {});
};
