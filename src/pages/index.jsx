import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Vampy from '../images/vampy.png';
import VampyGif from '../images/vampygif.gif';
import VampyGayOnion from '../images/vampygayonion.png';

const images = [Vampy, VampyGif, VampyGayOnion];

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = { random: 0 };
  }

  componentDidMount() {
    this.setState(() => ({
      random: Math.floor(Math.random() * 3),
    }));

    this.forceUpdate();
  }

  render() {
    return (
      <Layout>
        <SEO />
        <h1>YES, SPEND YOUR ROLLS</h1>
        <div id="vampy-container">
          <img src={images[this.state.random]} alt="it's vampy!" />
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
