import Product from "./Product";

function ProductTab() {
  return (
    <div>
      <Product title = "Phone" price = {30000} />
      <Product title = "Laptop" price = {50000} />
      <Product title = "Pen" />
    </div>
  );
}

export default ProductTab;
