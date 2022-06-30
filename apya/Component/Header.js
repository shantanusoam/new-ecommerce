import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
const Header = () => {
  return (
    <header class="header">
      <div class="header__logo-box">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/APYA.png"
          alt="Logo"
          class="header__logo"
        />
      </div>

      <div class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Apya</span>
          <span class="heading-primary--sub">SERVE THE PURPOSE</span>
        </h1>

        <a href="#section-tours" class="btn btn--white btn--animated">
          Discover
        </a>
      </div>
    </header>
  );
};

export default Header;
