import SectionAbout from './Sectionabout';
import Sectionbooks from './Sectionbook';

import Sectionstories from './Sectionstories';
import SectionFeatures from './SectionFeatures';
import SectionTours from './SectionTours.js';
import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';
// import Scroller from './Scroller';
// import Directory from './directory/directory.componrnt';
const Main = () => {
  return (
    <main>
      <SectionTours></SectionTours>

      <SectionFeatures></SectionFeatures>

      {/* <Directory /> */}
      <SectionAbout></SectionAbout>
      <Sectionstories></Sectionstories>

      {/* <Scroller></Scroller> */}

      <Sectionbooks></Sectionbooks>
    </main>
  );
};

export default Main;
