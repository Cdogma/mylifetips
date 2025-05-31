
import { useEffect } from 'react';
import { getFeatureFlags } from '@/config/environment';

const Analytics = () => {
  useEffect(() => {
    const flags = getFeatureFlags();
    
    if (!flags.enableAnalytics) {
      console.log('Analytics disabled in this environment');
      return;
    }
    
    // Google Analytics 4 Setup (replace GA_MEASUREMENT_ID with your actual ID)
    const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with real ID
    
    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
    
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(arguments);
    }
    
    gtag('js', new Date());
    gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
    
    // Make gtag available globally for tracking events
    (window as any).gtag = gtag;
    
  }, []);

  return null;
};

export default Analytics;
