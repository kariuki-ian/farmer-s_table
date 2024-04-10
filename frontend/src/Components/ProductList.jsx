/* eslint-disable react/prop-types */
import Product from "./Product";

const ProductList = ({
  categoryName,
  cart_items,
  setItems,
  favourite,
  setFavourite,
  products,
  inputValue,
}) => {
  const handleFavClick = (product) => {
    const index = favourite.findIndex(
      (likedProduct) => likedProduct._id === product._id
    );
    if (index !== -1) {
      // If the product is already liked, remove it from the liked products list
      const updatedLikedProducts = [...favourite];
      updatedLikedProducts.splice(index, 1);
      setFavourite(updatedLikedProducts);
    } else {
      // If the product is not liked, add it to the liked products list
      setFavourite([...favourite, product]);
    }
  };
  const handleItems = (product) => {
    const index = cart_items.findIndex((item) => item._id === product._id);
    if (index !== -1) {
      const updatedItems = [...cart_items];
      updatedItems[index].quantity += 1;
      setItems(updatedItems);
    } else {
      setItems([...cart_items, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="container mx-auto mt-5 flex gap-5 flex-wrap md:pl-40 z-20">
      {products
        .filter(
          (product) =>
            (!categoryName || product.category === categoryName) &&
            (product.name.includes(inputValue)
              ? product
              : product.description.includes(inputValue))
        ) // Filter products by category name
        .map((product) => (
          <Product
            key={product._id}
            product={product}
            name={product.name}
            image={product.image}
            description={product.description}
            click={() => handleItems(product)}
            favClick={() => handleFavClick(product)}
          />
        ))}
    </div>
  );
};

export default ProductList;
