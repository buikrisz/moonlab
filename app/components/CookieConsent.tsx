'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import Link from 'next/link';
import styles from '../styles/CookieConsent.module.css';

const CONSENT_STORAGE_KEY = 'moonlab_cookie_consent';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type CookieConsentValue = 'accepted' | 'rejected';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CookieConsent = () => {
  const [isReady, setIsReady] = useState(false);
  const [consent, setConsent] = useState<CookieConsentValue | null>(null);
  const [isBannerOpen, setIsBannerOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(
      CONSENT_STORAGE_KEY,
    ) as CookieConsentValue | null;

    const validConsent =
      storedConsent === 'accepted' || storedConsent === 'rejected' ? storedConsent : null;

    setConsent(validConsent);
    setAnalyticsEnabled(validConsent === 'accepted');
    setIsBannerOpen(!validConsent);
    setIsReady(true);

    const openSettings = () => {
      const currentConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);

      setAnalyticsEnabled(currentConsent === 'accepted');
      setIsSettingsOpen(true);
      setIsBannerOpen(true);
    };

    window.addEventListener('moonlab:open-cookie-settings', openSettings);

    return () => {
      window.removeEventListener('moonlab:open-cookie-settings', openSettings);
    };
  }, []);

  const handleAcceptAll = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'accepted');

    setConsent('accepted');
    setAnalyticsEnabled(true);
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  };

  const handleRejectAll = () => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, 'rejected');

    setConsent('rejected');
    setAnalyticsEnabled(false);
    setIsBannerOpen(false);
    setIsSettingsOpen(false);
  };

  const handleSaveSettings = () => {
    if (analyticsEnabled) {
      handleAcceptAll();
      return;
    }

    handleRejectAll();
  };

  if (!isReady) {
    return null;
  }

  const shouldLoadAnalytics = consent === 'accepted' && Boolean(GA_MEASUREMENT_ID);

  return (
    <>
      {shouldLoadAnalytics && (
        <>
          <Script id="ga4-base" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}

              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });

              gtag('js', new Date());

              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname + window.location.search
              });
            `}
          </Script>

          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
        </>
      )}

      {isBannerOpen && (
        <div
          className={`${styles.cookieBanner} ${isSettingsOpen ? styles.settingsMode : ''}`}
          role="dialog"
          aria-live="polite"
          aria-label="Süti beállítások"
        >
          <div
            className={`${styles.cookieContent} ${
              isSettingsOpen ? styles.expandedContent : styles.compactContent
            }`}
          >
            {!isSettingsOpen ? (
              <>
                <div className={styles.cookieCompactText}>
                  <p>
                    <strong>Sütik használata</strong>
                    <span>
                      Analitikai sütiket csak hozzájárulás esetén használunk az oldal
                      fejlesztéséhez.
                    </span>
                  </p>

                  <Link href="/suti-tajekoztato" className={styles.cookiePolicyLink}>
                    Részletek a süti tájékoztatóban
                  </Link>
                </div>

                <div className={styles.cookieActions}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={handleRejectAll}
                  >
                    Elutasítom
                  </button>

                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => setIsSettingsOpen(true)}
                  >
                    Beállítások
                  </button>

                  <button type="button" className={styles.primaryButton} onClick={handleAcceptAll}>
                    Elfogadom
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className={styles.cookieExpandedHeader}>
                  <p className={styles.cookieEyebrow}>Süti beállítások</p>

                  <h2>Te döntöd el, mit engedélyezel</h2>

                  <p>
                    A weboldal működéséhez szükséges beállításokat mindig használjuk. Az analitikai
                    sütik opcionálisak, ezek segítenek megérteni, hogyan használják a látogatók az
                    oldalt, például mely részeket nézik meg és hányan kattintanak az órarendre.
                  </p>

                  <Link href="/suti-tajekoztato" className={styles.cookiePolicyLink}>
                    Süti tájékoztató megnyitása
                  </Link>
                </div>

                <div className={styles.cookieOptions}>
                  <div className={styles.cookieOption}>
                    <div>
                      <h3>Szükséges beállítások</h3>
                      <p>
                        Ezek az oldal alapvető működéséhez és a választásod megjegyzéséhez
                        szükségesek.
                      </p>
                    </div>

                    <span>Mindig aktív</span>
                  </div>

                  <label className={styles.cookieOption}>
                    <div>
                      <h3>Analitikai sütik</h3>
                      <p>
                        Google Analytics mérésekhez használjuk, kizárólag a weboldal használatának
                        megértésére és fejlesztésére.
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={analyticsEnabled}
                      onChange={(event) => setAnalyticsEnabled(event.target.checked)}
                    />
                  </label>
                </div>

                <div className={styles.cookieActions}>
                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={() => setIsSettingsOpen(false)}
                  >
                    Vissza
                  </button>

                  <button
                    type="button"
                    className={styles.secondaryButton}
                    onClick={handleRejectAll}
                  >
                    Mindent elutasítok
                  </button>

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={handleSaveSettings}
                  >
                    Mentés
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
