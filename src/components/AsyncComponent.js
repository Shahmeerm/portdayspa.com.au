import React, { Component } from 'react';
import Loader from './Loader';

export default function asyncComponent(
  importComponent,
  asyncProps = null,
  isLoaderActive = false
) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component,
      });
    }

    render() {
      const C = this.state.component;
      return C ? (
        <C {...this.props} {...asyncProps} />
      ) : isLoaderActive ? (
        <Loader />
      ) : (
        <></>
      ); // You can place a loader here if wanted.
    }
  }

  return AsyncComponent;
}