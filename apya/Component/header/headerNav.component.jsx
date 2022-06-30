import React from 'react';

const HeaderNav = ({ ishome }) => (
  /* <div className="header">
<a href="/" className="logo-container">
<Logo className="logo"/>
</a>
<div className="options">
<a className="option" href='/shop'>
    SHOP
</a>
<a className="option" href='/shop'>
    CONTACT
</a>
</div>
</div> */
  <nav href="/" className={`${ishome ? 'ishome' : ''}  navbarcontainer`}>
    <ul className={`${ishome ? 'ishome' : ''}  navbarcontainer_nav`}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/">Company</a>
      </li>
      <li>
        <a href="/shop">Shop</a>
      </li>
      <li>
        <a href="/">Safety</a>
      </li>

      <li class="logo">
        {/* <Logo></Logo> */}
        <img
          src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/APYA.png"
          alt="Logo"
          class="header__logo"
        />
      </li>
      {/* <li class="Push"><a href="/shop">sell</a></li> */}
      {/* <li class="Push">
        <a href="/shop">
       
            <a href="/signin">SIGN IN</a>
       
        </a>
      </li> */}
      <li>{/* <CartIcon /> */}</li>
    </ul>
    {/* {hidden ? null : <CartDropdown />} */}
  </nav>
);

export default HeaderNav;
