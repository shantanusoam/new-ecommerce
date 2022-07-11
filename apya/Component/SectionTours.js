import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
const SectionTours = () => {
  return (
    <section class="section-tours" id="section-tours">
      <div class="u-center-text ">
        <h2 class="heading-secondary">Most Recent</h2>
      </div>

      <div class="row">
        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--1">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--1">
                  Cricket
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Dryfit Quality</li>
                  <li>100% poltyiter</li>
                  <li>Flexibel</li>
                  <li>Easily wearabel</li>
                  <li>loose and coustmizeabel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$297</p>
                </div>
                <a href="#popup" class="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--2">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--2">
                  Football
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Dryfit Quality</li>
                  <li>100% poltyiter</li>
                  <li>Flexibel</li>
                  <li>Easily wearabel</li>
                  <li>loose and coustmizeabel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>

                  <p class="card__price-value">$497</p>
                  {/* <img
                    src="https://raw.githubusercontent.com/shantanusoam/new-ecommerce/main/apya/Images/Front%20(81).png"
                    width={500}
                  ></img> */}
                </div>
                <a href="#popup" class="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-1-of-3">
          <div class="card">
            <div class="card__side card__side--front">
              <div class="card__picture card__picture--3">&nbsp;</div>
              <h4 class="card__heading">
                <span class="card__heading-span card__heading-span--3">
                  Volleyball
                </span>
              </h4>
              <div class="card__details">
                <ul>
                  <li>Dryfit Quality</li>
                  <li>100% poltyiter</li>
                  <li>Flexibel</li>
                  <li>Easily wearabel</li>
                  <li>loose and coustmizeabel</li>
                </ul>
              </div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
              <div class="card__cta">
                <div class="card__price-box">
                  <p class="card__price-only">Only</p>
                  <p class="card__price-value">$897</p>
                </div>
                <a href="#popup" class="btn btn--white">
                  Book now!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="/#" class="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
};

export default SectionTours;
