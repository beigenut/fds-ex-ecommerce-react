import React, { Component } from 'react';

import NavBarCT from '../containers/NavBarCT';
import ProductsCT from '../containers/ProductsCT';
// import NavBar from '../components/NavBar';
import NavBarCT from '../containers/NavBarCT';

export default class ProductPage extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBarCT />
        <ProductsCT />
      </React.Fragment>
    );
  }
}
