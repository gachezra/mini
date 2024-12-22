// This file contains the ReferralLink component for the Vetracoin app.
// It is used to display referral links in the Referral System section.

import React from 'react';

const ReferralLink = ({ link }) => {
  return (
    <div className="referral-link">
      <h3>Referral Link</h3>
      <p>Share this link to earn Vetrocoins: {link}</p>
    </div>
  );
};

export default ReferralLink;
