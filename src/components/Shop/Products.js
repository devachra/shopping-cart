import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 8,
    title: "My First Code",
    description: "This is my first code book",
  },
  {
    id: "p2",
    price: 12,
    title: "My First Book",
    description: "This is my first code book",
  },
  {
    id: "p3",
    price: 15,
    title: "My First Code Book",
    description: "This is my first code book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
