import React from 'react';

import Directory from '../../components/directory/directoryComponent';

const HomePage = props => {
  return (
    <>
      <div className="homepage">
        <div className="mfaContainer">
          <div className="directoryWrapper">
            <Directory />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
