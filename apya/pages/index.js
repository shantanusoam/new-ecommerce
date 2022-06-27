import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import HomePage from './homepage/Homepage.component';
import Footer from '../Component/Footer';
import { Catlog } from '../Component/Catlog/catlog';

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

    <Catlog catlogData={catlogData.length && catlogData}></Catlog>

    <HomePage></HomePage>
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <Footer />
    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const catlogQuery = `*[_type == "catalog"]{
    name,
    
        products[] {
    "product" : *[_type == "product" && _id == ^._ref]{
      _id,
    details,
    image,
    details,
    name,
    price,
    slug,
    }
      }
    }`;
  const catlogData = await client.fetch(catlogQuery);
  // console.log(`dataaaaaaaaaaaaaaaaaa ${bannerData}`);
  // console.log(`dataaaaaaaaaaaaaaaaaa ${catlogData}`);

  return {
    props: { products, bannerData, catlogData },
  };
};

export default Home;
