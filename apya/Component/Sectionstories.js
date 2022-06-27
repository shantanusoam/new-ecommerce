import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '../lib/client';
const Sectionstories = () => {
  return (
    <section class="section-stories">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop />
        <source src="img/video.mp4" type="video/mp4" />
        <source src="img/video.webm" type="video/webm" />
        Your browser is not supported!
      </div>

      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img
              src="https://cdn.britannica.com/63/211663-050-A674D74C/Jonny-Bairstow-batting-semifinal-match-England-Australia-2019.jpg"
              alt="Person on a tour"
              class="story__img"
            />
            <figcaption class="story__caption">Mary Smith</figcaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="story">
          <figure class="story__shape">
            <img
              src="https://www.newsnationnow.com/wp-content/uploads/sites/108/2022/02/FootballGettyImages-78457130.jpg"
              alt="Person on a tour"
              class="story__img"
            />
            <figcaption class="story__caption">Jack Wilson</figcaption>
          </figure>
          <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
              WOW! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
              aspernatur libero repellat quis consequatur ducimus quam nisi
              exercitationem omnis earum qui.
            </p>
          </div>
        </div>
      </div>

      <div class="u-center-text u-margin-top-huge">
        <a href="/#" class="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
};

export default Sectionstories;
