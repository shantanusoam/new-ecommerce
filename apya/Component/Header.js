import React from 'react';

import { animateScroll as scroll, Link } from 'react-scroll';
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

        <Link
          to="section-tours"
          smooth={true}
          duration={1000}
          spy={true}
          exact={true}
          class="btn btn--white btn--animated"
        >
          Discover
        </Link>
      </div>
    </header>
  );
};

export default Header;
