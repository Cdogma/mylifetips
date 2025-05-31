
import { getEnvironment, getFeatureFlags } from '@/config/environment';

const EnvironmentBadge = () => {
  const environment = getEnvironment();
  const flags = getFeatureFlags();

  if (environment === 'main') {
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

  if (!config) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 text-white text-center py-2 text-sm shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center gap-2">
        <span className={`px-2 py-1 rounded text-xs font-bold ${config.className}`}>
          {config.label}
        </span>
        <span className="text-gray-300">{config.description}</span>
        {flags.showDebugInfo && (
          <span className="text-xs text-gray-400 ml-4">
            Debug Mode Active
          </span>
        )}
      </div>
    </div>
  );
};

export default EnvironmentBadge;
