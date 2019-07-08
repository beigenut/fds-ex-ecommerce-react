import React from 'react';
import { Link } from 'react-router-dom';

export default function NewProductItem({
  id, // product's id on json server
  title, // product title
  unitPrice, // product unitprice will be underlined
  marketPrice, // product salse price
  imageURL, // main photo of a product
}) {
  return (
    <React.Fragment>
      <div className="new-products-items card">
        <div className="new-products-img">
          <Link to={`/product/${id}`}>
            <img
              className="product-page__img--main"
              alt="New Item 01"
              src={imageURL}
            />
          </Link>
        </div>
        <div className="new-products-items__card">
          <span className="new-products-items__title">{title}</span>
          <span className="new-products-badge badge badge-success">New</span>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="list-group-item__unitPrice">{unitPrice}</span>
            <strong>
              <span className="list-group-item__marketPrice">
                {marketPrice}
              </span>
            </strong>
          </li>
        </ul>
        <div className="new-products-items__card">
          <Link to={`/product/${id}`} className="card-link btn btn-success">
            View Detail
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
