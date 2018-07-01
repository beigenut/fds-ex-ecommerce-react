import React from 'react';
import CartItem from './CartItem';

export default function CartList({ carts = [] }) {
  return (
    <React.Fragment>
      <section class="cart-page">
        <div class="rows">
          <p class="title is-2">My Shopping Cart List</p>
        </div>
        <div class="rows clearfix">
          <button class="button is-success checkout is-static">Checkout</button>
        </div>
        <div class="rows">
          <div class="cart-page__item clearfix">
            <div class="column-labels">
              <label class="product-checkbox">Check</label>
              <label class="product-image">Image</label>
              <label class="product-details">Product</label>
              <label class="product-price">Price</label>
              <label class="product-quantity-box">Quantity</label>
              <label class="product-subtot">Subtotal</label>
              <label class="product-removal">Remove</label>
            </div>
            {carts.map(cart => <CartItem key={cart.id} {...cart} />)}
            <div class="totals">
              <div class="totals-item">
                <label>Subtotal</label>
                <div class="totals-value" id="cart-subtotal">
                  0
                </div>
              </div>
              <div class="totals-item">
                <label>Tax (6.625%)</label>
                <div class="totals-value" id="cart-tax">
                  0.00
                </div>
              </div>
              <div class="totals-item totals-item-total">
                <label>Grand Total</label>
                <div class="totals-value" id="cart-total">
                  0.00
                </div>
              </div>
            </div>
            <button class="button is-success checkout checkout2 is-static">
              Checkout
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}