import React from 'react';
import BoxHeader from './BoxHeader';
import ConnectedAccountBox from './ConnectedAccountBox';
import ConnectionsBox from './ConnectionsBox'

export default function BoxContainer(){
    return(
        <div className='md:w-[75%] lg:w-[75%] xl:[75%] w-[75%] sm:w-[90%] xs:w-[95%] xs:mx-auto'>
              <BoxHeader/>
              <ConnectionsBox />
              <ConnectedAccountBox />
        </div>
    )
}