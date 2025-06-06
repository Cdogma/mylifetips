
import { getEnvironment, getFeatureFlags } from '@/config/environment';

const EnvironmentBadge = () => {
  const environment = getEnvironment();
  const flags = getFeatureFlags();

  console.log('EnvironmentBadge - Current environment:', environment);
  console.log('EnvironmentBadge - Current hostname:', window.location.hostname);

  if (environment === 'main') {
    console.log('EnvironmentBadge - Hiding badge because environment is main');
    return null; // No badge in production
  }

  const badgeConfig = {
    showcase: {
      label: 'SHOWCASE DEMO',
      className: 'bg-blue-600 text-white',
      description: 'Diese Version zeigt alle geplanten Features'
    },
    develop: {
      label: 'DEVELOPMENT',
      className: 'bg-orange-600 text-white',
      description: 'Entwicklungsversion - Features in Arbeit'
    }
  };

  const config = badgeConfig[environment as keyof typeof badgeConfig];

  if (!config) {
    console.log('EnvironmentBadge - No config found for environment:', environment);
    return null;
  }

  console.log('EnvironmentBadge - Rendering badge with config:', config);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-3 text-sm shadow-lg border-b-2 border-orange-500">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <span className={`px-3 py-1 rounded text-xs font-bold ${config.className} animate-pulse`}>
          {config.label}
        </span>
        <span className="text-gray-300 font-medium">{config.description}</span>
        {flags.showDebugInfo && (
          <span className="text-xs text-yellow-400 ml-4 bg-yellow-900/30 px-2 py-1 rounded">
            Debug Mode Active | Hostname: {window.location.hostname}
          </span>
        )}
      </div>
    </div>
  );
};

export default EnvironmentBadge;
