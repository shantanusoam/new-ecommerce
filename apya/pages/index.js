import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import HomePage from './homepage/Homepage.component';
import Footer from '../Component/Footer';
import Catlog from '../Component/Catlog/catlog';

const Home = ({ products, bannerData, catlogData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <Catlog CatlogData={catlogData.length && catlogData}></Catlog>

    <HomePage></HomePage>

    <Footer />
    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const catlogQuery = '*[_type == "catalog"]';
  const catlogData = await client.fetch(catlogQuery);
  console.log(`dataaaaaaaaaaaaaaaaaa ${bannerData}`);

  return {
    props: { products, bannerData, catlogData },
  };
};

export default Home;
