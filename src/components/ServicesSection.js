import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const ServicesSection = () => {
  const data = useStaticQuery(graphql`
    query ServicesSectionQuery {
      file(relativePath: { eq: "services.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3000, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <ParallaxProvider>
      <Parallax y={[-50, 50]}>
        <div className="overflow-hidden">
          <Image
            style={{
              minHeight: `30rem`,
              height: `100%`,
              maxHeight: `50rem`,
              width: `100%`,
            }}
            fluid={data.file.childImageSharp.fluid}
            loading="eager"
          />
        </div>
      </Parallax>
      <article
        id="services"
        className="bg-white px-4 md:px-6 py-24 relative w-full z-10"
      >
        <div className="flex flex-wrap max-w-6xl  mx-auto w-full">
          <div className="flex items-center justify-center w-full md:w-2/5">
            <h2 className="font-semibold font-serif leading-tight md:p-10 text-2xl uppercase w-full">
              {data.site.siteMetadata.title} Services
            </h2>
          </div>
          <div className="md:col-3 mt-4 md:mt-0 w-full md:w-3/5">
            <ul className="font-bold leading-none pr-12">
              <li className="mb-4">Skin Consulation</li>
              <li className="mb-4">Signature Faicals</li>
              <li className="mb-4">Skin Workouts</li>
              <li className="mb-4">Skin Needling</li>
              <li className="mb-4">Radiance Plus</li>
              <li className="mb-4">Paramedical skin treatments</li>
              <li className="mb-4">Simultaneously</li>
              <li className="mb-4">Hydro-Brasion</li>
              <li className="mb-4">Spa Packages</li>
              <li className="mb-4">MassagesBody</li>
              <li className="mb-4">Beauty</li>
              <li className="mb-4">Lash Lift</li>
              <li className="mb-4">Waxing &amp; Tinting</li>
              <li className="mb-4">Makeup</li>
              <li className="mb-4">IPL/SHR</li>
            </ul>
          </div>
          <div className="mt-8 text-center w-full">
            <Link
              to="/services"
              className="border border-gray-500 inline-block leading-none px-2 py-1 uppercase transition-all hover:bg-gray-800 hover:text-white hover:border-gray-800"
            >
              View more information here
            </Link>
          </div>
        </div>
      </article>
    </ParallaxProvider>
  );
};

export default ServicesSection;
