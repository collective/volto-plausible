import PlausibleProvider from './PlausibleProvider';

/**
 * applyPlausibleConfig
 * @param {object} params
 * @param {object} params.config
 * @param {string} params.domain
 */
export function applyPlausibleConfig({ config, domain = '' }) {
  config.settings.appExtras.push({
    match: '',
    component: PlausibleProvider,
    props: {
      domain,
    },
  });

  return config;
}

export default (config) => config;
