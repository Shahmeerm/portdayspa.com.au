import React, { Component } from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';

class ContactImg extends Component {
  static propTypes = {
    fluid: PropTypes.object,
  };

  render() {
    const { fluid } = this.props;
    return (
      <Image
        fluid={fluid}
        loading="eager"
        className="w-full"
        style={{ minHeight: '30rem', height: '100%', maxHeight: '50rem' }}
      />
    );
  }
}

export default ContactImg;
