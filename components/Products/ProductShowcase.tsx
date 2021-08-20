import {FC} from "react";

import products from "../../product/mock.json";

import ProductShowcaseItem from "./ProductShowcaseItem";

const ProductShowcase: FC = () => {
  return (
    <section className="grid mb-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.length ? (
        products.map((product) => (
          <ProductShowcaseItem
            key={product.id}
            imgUrl={product.imgUrl}
            name={product.name}
            price={product.price}
          />
        ))
      ) : (
        <div className="sm:col-span-2 md:col-span-3 h-64 flex justify-center items-center text-2xl">
          There are not products at the moment
        </div>
      )}
    </section>
  );
};

export default ProductShowcase;
