import React from 'react';

function BitbucketButton(props) {
    return (
        <>
         
             <button type="button" className="text-white text-center bg-[#0052CC] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/20 mr-2 mb-2">
  <svg className=" w-12 h-4" height="20" viewBox="-2 -2 65 59" width="20"><defs><linearGradient id="bitbucket-:r0:" x1="104.953%" x2="46.569%" y1="21.921%" y2="75.234%"><stop offset="7%" stopColor="currentColor" stopOpacity=".4"></stop><stop offset="100%" stopColor="currentColor"></stop></linearGradient></defs><path d="M59.696 18.86h-18.77l-3.15 18.39h-13L9.426 55.47a2.71 2.71 0 001.75.66h40.74a2 2 0 002-1.68l5.78-35.59z" fill="url(#bitbucket-:r0:)" fillRule="nonzero" transform="translate(-.026 .82)"></path><path d="M2 .82a2 2 0 00-2 2.32l8.49 51.54a2.7 2.7 0 00.91 1.61 2.71 2.71 0 001.75.66l15.76-18.88H24.7l-3.47-18.39h38.44l2.7-16.53a2 2 0 00-2-2.32L2 .82z" fill="currentColor" fillRule="nonzero"></path></svg>
  Continue with Bitbucket
</button>       
        </>
    );
}

export default BitbucketButton;