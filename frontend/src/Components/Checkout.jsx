/* eslint-disable react/prop-types */
function Checkout({ cart_items, user }) {
  return (
    <div className="container mx-auto mt-5 flex gap-5 flex-wrap px-10 z-20 relative">
      {cart_items.map((product) => (
        <div
          key={product._id}
          className="flex flex-col items-center border-2 border-gray-200 rounded-lg p-5 w-56 "
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-40 h-40 object-cover rounded-lg"
          />
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-lg font-semibold">
              Quantity: {product.quantity}
            </p>
          </div>
        </div>
      ))}
      {/* calculate total price*/}
      <div className=" w-full p-5 border-t-2 border-gray-200 -z-10">
        <h2 className="text-lg font-semibold">
          Total: $
          {cart_items
            .reduce(
              (total, product) => total + product.price * product.quantity,
              0
            )
            .toFixed(2)}
        </h2>
      </div>
      {/*Order button*/}
      {user ? (
        <button className="bg-emerald-600 mx-auto text-white font-semibold rounded-md p-2 mt-4 hover:bg-green-600 transition duration-300 ease-in-out">
          Order
        </button>
      ) : (
        <p className="text-red-500 mx-auto">Please login to order</p>
      )}
    </div>
  );
}
export default Checkout;
