export type GAEventName =
  | 'enquiry_submit'
  | 'apply_start'
  | 'apply_complete'
  | 'whatsapp_click'
  | 'call_click'
  | 'prospectus_download';

declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      targetOrName: string | Date,
      params?: Record<string, unknown>
    ) => void;
  }
}

export function trackEvent(eventName: GAEventName, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
