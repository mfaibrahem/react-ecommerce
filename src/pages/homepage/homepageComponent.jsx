import React from 'react';

import Directory from '../../components/directory/directoryComponent';

const HomePage = props => {
  return (
    <>
      <div className="homepage">
        <div className="mfa-container">
          <Directory />
        </div>
      </div>
    </>
  );
};

export default HomePage;
