import PlausibleProvider from './PlausibleProvider';

export default function applyConfig(config) {
  config.settings.appExtras.push({
    match: '',
    component: PlausibleProvider,
  });

  return config;
}
