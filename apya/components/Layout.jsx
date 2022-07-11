import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';
import FooterAp from '../Component/Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>JS Mastery Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <FooterAp></FooterAp>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
