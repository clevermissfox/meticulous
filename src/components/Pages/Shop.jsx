import ProductItem from "../Products/ProductItem";
import Sidebar from "../Utilities/Sidebar";

export default function Shop() {
  return (
    <section className="page-shop">
      <div className="wrapper">
        <div className="shop-wrapper">
          <Sidebar />
          <ul className="products-wrapper">
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </ul>
        </div>
      </div>
    </section>
  );
}
