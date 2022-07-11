import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
const FooterAp = () => {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img
          src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/APYA.png"
          alt="Full logo"
          class="footer__logo"
        />
      </div>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item">
                <a href="/#" class="footer__link">
                  Company
                </a>
              </li>
              <li class="footer__item">
                <a href="/#" class="footer__link">
                  Contact us
                </a>
                <ul class="footer__navigation">
                  <li class="footer__item">
                    <a href="mailto:contact@apya.com" class="footer__link">
                      contact@apya.com
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="/#" class="footer__link">
                      Sector 4, 4/141, Madhav Puram, Meerut-250002, Uttar
                      Pradesh, India
                    </a>
                  </li>
                  <li class="footer__item">
                    <a href="tel:919150888833" class="footer__link">
                      +91 9150888833
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <ul className="footer__navigation">
              <li class="footer__item">
                <Link href="/sizeChart" scroll={true} class="footer__link">
                  Size Chart
                </Link>
              </li>
              <li class="footer__item">
                <a href="/sizeChart" class="footer__link">
                  Privacy policy
                </a>
                {/* <a href="/#" class="footer__link">
                  
                </a> */}
              </li>
              <li class="footer__item">
                <a href="/sizeChart" class="footer__link">
                  Size Chart
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Built by{' '}
            <a href="/#" class="footer__link">
              Shantanu soam
            </a>{' '}
            for Apya Industry
            <a href="/#" class="footer__link">
              E commerce portfolio
            </a>
            . Copyright &copy; by Apya.
            <br /> Sector 4, 4/141, Madhav Puram, Meerut-250002, Uttar Pradesh,
            India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterAp;
