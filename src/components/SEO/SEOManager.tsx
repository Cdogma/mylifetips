
import { useEffect } from 'react';
import { getSEOConfig } from '@/config/environment';

interface SEOManagerProps {
  title?: string;
  description?: string;
}

const SEOManager = ({ title, description }: SEOManagerProps) => {
  useEffect(() => {
    const seoConfig = getSEOConfig();
    
    // Update page title
    if (title) {
      document.title = `${title}${seoConfig.titleSuffix}`;
    }
    
    // Update meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
    
    // Update robots meta tag
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.setAttribute('name', 'robots');
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute('content', seoConfig.metaRobots);
    
    // Add environment indicator for non-production
    if (!seoConfig.allowIndexing) {
      let metaEnvironment = document.querySelector('meta[name="environment"]');
      if (!metaEnvironment) {
        metaEnvironment = document.createElement('meta');
        metaEnvironment.setAttribute('name', 'environment');
        document.head.appendChild(metaEnvironment);
      }
      metaEnvironment.setAttribute('content', seoConfig.titleSuffix.replace(' - ', ''));
    }
  }, [title, description]);

  return null;
};

export default SEOManager;
