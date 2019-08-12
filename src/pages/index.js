import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import HeroNav from '../components/HeroNav';
import Hero from '../components/Hero';
import Why from '../components/Why';
import Services from '../components/Services';
import GiftVoucher from '../components/GiftVoucher';
import Contact from '../components/Contact';
import Map from '../components/Map';

const IndexPage = ({ data }) => (
  <>
    <SEO title="Home" />
    <HeroNav />
    <Hero />
    <Layout>
      <Why />
      <Services />
      <GiftVoucher />
      <Contact data={data} />
      <Map />
    </Layout>
  </>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    hero: file(relativePath: { eq: "contact.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    site {
      siteMetadata {
        address
        email
        facebook
        googleMapsLink
        instagram
        phone
        phoneFormatted
      }
    }
  }
`;
