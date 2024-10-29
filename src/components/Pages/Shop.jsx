import ProductItem from "../Products/ProductItem";
import Sidebar from "../Sidebar";

export default function Shop() {
  return (
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
  );
}
