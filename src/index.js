import PlausibleProvider from './PlausibleProvider';

export default function applyConfig(config) {
  if (config.settings.plausibleDomain) {
    config.settings.appExtras.push({
      match: '',
      component: PlausibleProvider,
      props: {
        domain: config.settings.plausibleDomain,
      },
    });
  }

  return config;
}
