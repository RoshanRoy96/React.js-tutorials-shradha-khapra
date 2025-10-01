import Product from "./Product";

function ProductTab() {
  let features = ["hi-tech", "durable", "fast"];
  // let featuresObj = {a: "hi-tech", b: "durable", c: "fast"};
  return (
    <div>
      <Product title = "Phone" price = {30000} features = {features}/>
      {/* <Product title = "Laptop" price = {50000} />
      <Product title = "Pen" /> */}
    </div>
  );
}

export default ProductTab;
