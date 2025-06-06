// Environment detection and configuration
export type Environment = 'showcase' | 'main' | 'develop';

export const getEnvironment = (): Environment => {
  const hostname = window.location.hostname;
  
  // Lovable development environment detection
  if (hostname.includes('lovable.dev')) {
    return 'develop';
  }
  
  if (hostname.includes('showcase.')) {
    return 'showcase';
  } else if (hostname.includes('dev.')) {
    return 'develop';
  } else {
    return 'main';
  }
};

export const isShowcaseMode = () => getEnvironment() === 'showcase';
export const isDevelopMode = () => getEnvironment() === 'develop';
export const isProductionMode = () => getEnvironment() === 'main';

// Feature flags per environment
export const getFeatureFlags = () => {
  const env = getEnvironment();
  
  return {
    // Social Media
    showSocialMedia: env === 'showcase' || env === 'main',
    showWhatsAppButton: env === 'showcase', // Only in showcase for now
    showInstagramLink: env === 'showcase' || env === 'main',
    showFacebookLink: env === 'showcase',
    
    // Newsletter
    showNewsletterSignup: env === 'showcase' || env === 'main',
    showNewsletterBanner: env === 'showcase',
    
    // Contact
    showContactForm: env === 'showcase' || env === 'main',
    showPhoneNumber: env === 'showcase',
    
    // Products/Recommendations
    showPlaceholderProducts: env === 'showcase',
    showRealProductsOnly: env === 'main',
    
    // Analytics & SEO
    enableAnalytics: env === 'main',
    allowIndexing: env === 'main',
    
    // Development features
    showDebugInfo: env === 'develop',
  };
};

export const getSEOConfig = () => {
  const env = getEnvironment();
  const flags = getFeatureFlags();
  
  return {
    allowIndexing: flags.allowIndexing,
    titleSuffix: env === 'showcase' ? ' - Showcase Demo' : env === 'develop' ? ' - Development' : '',
    metaRobots: flags.allowIndexing ? 'index,follow' : 'noindex,nofollow',
  };
};
