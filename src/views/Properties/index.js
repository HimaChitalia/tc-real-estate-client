import React from 'react';
import Iframe from 'react-iframe'

const Properties = () => {
  return (
    <div className='divTopMargin'>
      <Iframe url="http://msx.mlsmatrix.com/Matrix/public/IDX.aspx?idx=ea95f8"
              position="absolute"
              width="100%"
              height="100%"
              allowFullScreen/>
    </div>
  )
}

export default Properties;
