import React from 'react';
import { Link } from 'react-router-dom';

import { CartProvider, CartConsumer } from '../contexts/CartContext';
import CartList from '../components/CartList';

export default class CartCT extends React.Component {
  render() {
    return (
      <CartProvider>
        <CartConsumer>
          {({
            id,
            carts,
            total,
            salesTax,
            subTotal,
            updateSelectedQtt,
            deleteCartItem,
            loading,
            changing,
          }) =>
            <CartList
              id={id}
              as={Link}
              loading={loading}
              changing={changing}
              total={total}
              salesTax={salesTax}
              subTotal={subTotal}
              deleteCartItem={async id => {
                await deleteCartItem(id);
              }}
              updateSelectedQtt={async (quantity, id) => {
                await updateSelectedQtt(quantity, id);
              }}
              carts={carts.map(c => ({
                linkProps: { to: `/product/${c.productId}` },
                ...c,
              }))}
            />
          }
        </CartConsumer>
      </CartProvider>
    );
  }
}
