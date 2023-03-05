import Product from "./Product";
import { products } from "../products.json";

const Grid = () => {
  return (
    <section>
      <div className="container">
        <div className="grid">
          {products.map((product) => {
            return (
              <Product
                key={product.slug}
                title={product.title}
                slug={product.slug}
                image={product.image}
                description={product.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Grid;
