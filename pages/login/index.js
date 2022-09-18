import React from 'react';
import Layout from '../../components/Landing/Layout';
import Seo from '../../components/Common/Seo';

import Login from '../../components/Landing/Login/Login';

export default function index() {
  return (
    <>
      <Seo title="Hostinza - Login" description="Hostinza, Share processes and data securely on a need to know basis without the need for reconciliation it combines a permissione."/>
      <Login/>
    </>
  )
}
index.Layout =Layout;