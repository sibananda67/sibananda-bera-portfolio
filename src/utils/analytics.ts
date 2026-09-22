// Google Analytics 4 Telemetry Handler
// Operates only when VITE_GA_MEASUREMENT_ID is supplied in environment variables.
// If the variable is empty or undefined, analytics remains cleanly disabled.

declare global {
  interface Window {
    dataLayer: any[];
    gtag?: (...args: any[]) => void;
  }
}

let isInitialized = false;

export function initAnalytics(): void {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // Strict check: if not configured or empty, remain completely disabled
  if (!measurementId || typeof measurementId !== 'string' || !measurementId.trim().startsWith('G-')) {
    return;
  }

  if (isInitialized || typeof window === 'undefined') return;

  try {
    // Inject gtag script asynchronously
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId.trim()}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', measurementId.trim(), {
      anonymize_ip: true,
      send_page_view: true,
    });

    isInitialized = true;
  } catch (err) {
    // Fail silently in production
  }
}

export function trackEvent(action: string, category: string, label?: string, value?: number): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

export function trackPageView(path: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (measurementId) {
      window.gtag('config', measurementId, {
        page_path: path,
      });
    }
  }
}
