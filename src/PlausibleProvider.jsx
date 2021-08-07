import React from 'react';
import { Helmet } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

const PlausibleProvider = () => {
  const domain = config.settings.plausibleDomain;

  return domain ? (
    <React.Fragment>
      <Helmet>
        <script
          defer
          data-domain={domain}
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Helmet>
    </React.Fragment>
  ) : null;
};

export default PlausibleProvider;
