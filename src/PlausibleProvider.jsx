import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from '@plone/volto/helpers';

/**
 * PlausibleProvider
 * @param {object} props
 * @param {string} props.domain - Plausible domain
 */
const PlausibleProvider = ({ domain = '' }) => {
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

PlausibleProvider.propTypes = {
  domain: PropTypes.string.isRequired,
};

export default PlausibleProvider;
