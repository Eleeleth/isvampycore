import React, { useEffect, useState } from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Vampy from '../images/vampy.png';
import VampyGif from '../images/vampygif.gif';
import VampyGayOnion from '../images/vampygayonion.png';

const images = [Vampy, VampyGif, VampyGayOnion];

function IndexPage() {
  const [random, setRandom] = useState(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * 3));
  }, []);

  return (
    <Layout>
      <SEO />
      <h1>YES</h1>
      <div id="vampy-container">
        <img src={typeof window === 'undefined' ? null : images[random]} alt="it's vampy!" />
      </div>
    </Layout>
  );
}

export default IndexPage;
