import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';
import HomePage from './homepage/Homepage.component';
import Footer from '../Component/Footer';
import { Catlog } from '../Component/Catlog/catlog';
import { urlFor } from '../lib/client';
import { animateScroll as scroll, Link } from 'react-scroll';
import SectionFeatures from '../Component/SectionFeatures';
import Header from '../Component/Header';
import Sparkles from '../animation/Sparkel';
const Home = ({ products, bannerData, catlogData }) => (
  <div>
    <Header />
    <HeroBanner heroBanner={bannerData.length && bannerData} />
    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>
    {/* <SectionFeatures></SectionFeatures> */}
    <div className="products-container section-features">
      {catlogData?.map((product) => (
        <div className="Category-Card feature-box ">
          <Link
            to={`scroll-${product.name}`}
            smooth={true}
            duration={1000}
            spy={true}
            exact={true}
          >
            {product.imageUrl ? (
              <img
                className="Category-Card__Image feature-box__icon "
                src={product.imageUrl}
                width={250}
                height={250}
              ></img>
            ) : (
              <img
                className="Category-Card__Image"
                src={urlFor(product.image && product.image[0])}
                width={250}
                height={250}
                className="product-image"
              />
            )}
            <div className="Category-Card__heading">{product.name}</div>
          </Link>
        </div>
      ))}
    </div>

    <Catlog catlogData={catlogData.length && catlogData}></Catlog>

    <HomePage></HomePage>
    <div className="products-heading">
      <Sparkles>
        <h2>Best Seller Products</h2>
        <p>speaker There are many variations passages</p>
      </Sparkles>
    </div>
    <div className="products-container">
      {products?.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
    <a
      href="https://api.whatsapp.com/send?phone=919150888833&text=Hello Questions for information about the query"
      class="float"
      target="_blank"
    >
      <FaWhatsapp class="fa fa-whatsapp my-float"></FaWhatsapp>
    </a>
    {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
  const catlogQuery = `*[_type == "catalog"]{
    image,
    imageUrl,
    Desc,
    
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
