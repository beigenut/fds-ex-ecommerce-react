import React from 'react';

import mallAPI from '../mallAPI';

const { Provider, Consumer } = React.createContext();

class DetailProductProvider extends React.Component {
  static defaultProps = {
    category: null,
  };

  state = {
    colors: [],
    sizes: [],
    productId: '',
    productTitle: '',
    productDesc: '',
    imageURL: '',
    category: '',
    color: '',
    size: 0,
    quantity: 0,
    attrSKU: '',
    productMarketPrice: 0,
    productUnitPrice: 0,
    // avgRate: '',
    // cntRates: 0,
    loading: false,
  };

  // reviews = [];
  async componentDidMount() {
    const { id } = this.props;
    this.setState({ loading: true });
    try {
      const res = await mallAPI.get(
        `/attributes?productId=${id}&defaultAttr=true&_expand=product`
      );
      // const reviewRes = await mallAPI.get('/reviews?productId=${id}');
      const attrRes = await mallAPI.get(`/attributes?productId=${id}`);

      // 중복 제거
      const avoidColor = attrRes.data
        .map(p => p.color)
        .filter(function(item, i, arr) {
          return i === arr.indexOf(item);
        });

      const avoidSize = attrRes.data
        .map(p => p.size)
        .filter(function(item, i, arr) {
          return i === arr.indexOf(item);
        });

      this.setState({
        colors: avoidColor,
        sizes: avoidSize.sort((prev, current) => prev - current),
        productId: res.data.map(p => p.productId),
        productTitle: res.data.map(p => p.product.productTitle),
        productDesc: res.data.map(p => p.product.productDesc),
        imageURL: res.data.map(p => p.product.imageURL),
        category: res.data.map(p => p.product.category),
        color: res.data.map(p => p.color),
        size: res.data.map(p => p.size),
        quantity: res.data.map(p => p.quantity),
        attrSKU: res.data.map(p => p.attrSKU),
        productMarketPrice: res.data.map(p => p.productMarketPrice),
        productUnitPrice: res.data.map(p => p.productUnitPrice),
      });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const value = {
      ...this.state,
    };
    return <Provider value={value}>{this.props.children}</Provider>;
  }
}

export { DetailProductProvider, Consumer as DetailProductConsumer };