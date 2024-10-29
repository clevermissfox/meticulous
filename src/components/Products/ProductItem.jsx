import BtnIcon from "../Utilities/BtnIcon";

export default function ProductItem({ name, price, img }) {
  return (
    <li className="container">
      <div className="product-item">
        <a href="#">
          <figure>
            <img
              src="/images/product-images/id_101-Restore_a_nail.jpg"
              alt=""
            />
          </figure>
        </a>
        <div className="product-info">
          <a href="#">Restore-A-Nail</a>
          <p className="small">$21.99</p>
          <button
            className="btn-product_options"
            aria-label="Product Options"
            title="Product Options"
          >
            <i className="fa fa-ellipsis" aria-hidden="true"></i>
          </button>
          <BtnIcon
            label="Add to Cart"
            btnClass="btn-add_to_cart"
            iconSize="fa-sm"
            iconClass="fa-cart-plus"
          />
        </div>
      </div>
    </li>
  );
}
