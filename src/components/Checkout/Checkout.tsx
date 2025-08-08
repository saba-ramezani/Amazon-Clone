import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { CartProduct } from "../../types/Types";
import { GB_CURRENCY } from "../../utils/constants";
import ProductDetails from "../ProductPage/ProductDetails";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import classNames from "classnames";

const Checkout = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);
  const numberOfItems = useSelector(
    (state: RootState) => state.cart.productsNumber
  );
  const subtotal = useSelector((state: RootState) =>
    state.cart.products.reduce(
      (subtotal, product: CartProduct) =>
        subtotal + product.price * product.quantity,
      0
    )
  );

  if (numberOfItems === 0) {
    return (
      <div className="w-screen flex justify-center items-center pt-[150px] px-4 text-center">
        <span className="text-2xl md:text-4xl text-red-700 font-semibold">
          Your Shopping Cart is empty!
        </span>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen px-4">
      <div className="max-w-[1500px] m-auto pt-8">
        <div className="grid lg:grid-cols-8 gap-6">
          <div className="lg:col-span-6 col-span-8 bg-white p-6 sm:p-8 rounded-2xl">
            <span className="text-2xl sm:text-3xl font-semibold text-black">
              Shopping Cart
            </span>
            <div className="mt-8 flex flex-col divide-y bg-gray-100 rounded-2xl p-2">
              {products.map((product: CartProduct) => (
                <div
                  key={product.id}
                  className="grid grid-cols-1 sm:grid-cols-10 gap-4 p-4 items-center"
                >
                  <div className="sm:col-span-2 flex justify-center">
                    <Link to={`/product/${product.id}`}>
                      <img
                        src={product.image_small}
                        alt={product.title}
                        className="max-h-[120px] object-contain"
                      />
                    </Link>
                  </div>

                  <div className="sm:col-span-6 flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <ProductDetails product={product} ratings={false} />
                    </Link>
                    <div className="mt-4 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-3">
                      <button
                        onClick={() => dispatch(removeFromCart(product.id))}
                        className="bg-red-700 hover:bg-red-800 text-white px-3 rounded-lg py-1 text-sm w-full sm:w-[150px] cursor-pointer"
                      >
                        Remove from Cart
                      </button>
                      <div className="w-full sm:w-[150px] border border-gray-400 rounded-lg grid grid-cols-3">
                        <button
                          onClick={() => {
                            if (product.quantity > 1) {
                              dispatch(
                                addToCart({
                                  ...product,
                                  quantity: product.quantity - 1,
                                })
                              );
                            }
                          }}
                          className={classNames(
                            "col-span-1 rounded-l-lg font-bold",
                            product.quantity <= 1
                              ? "bg-gray-300"
                              : "bg-amber-500 hover:bg-amber-400 cursor-pointer"
                          )}
                        >
                          -
                        </button>
                        <span className="col-span-1 flex justify-center items-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => {
                            if (product.quantity < 5) {
                              dispatch(
                                addToCart({
                                  ...product,
                                  quantity: product.quantity + 1,
                                })
                              );
                            }
                          }}
                          className={classNames(
                            "col-span-1 rounded-r-lg",
                            product.quantity >= 5
                              ? "bg-gray-300"
                              : "bg-amber-500 hover:bg-amber-400 cursor-pointer"
                          )}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="sm:col-span-2 flex flex-col items-start sm:items-end">
                    <span className="text-lg sm:text-xl font-bold">
                      {GB_CURRENCY.format(product.price)}
                    </span>
                    {product.quantity > 1 && (
                      <div className="flex mt-3 pt-3 border-t w-full sm:w-auto justify-between sm:justify-end">
                        <span className="text-base sm:text-lg mr-2">total:</span>
                        <span className="text-lg sm:text-xl font-bold">
                          {GB_CURRENCY.format(
                            product.price * product.quantity
                          )}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-end mt-6 px-2 sm:px-5 gap-2 sm:gap-5">
              <span className="text-lg sm:text-xl">
                Subtotal ({numberOfItems} items):
              </span>
              <span className="text-lg sm:text-xl font-bold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 col-span-8 bg-white p-6 h-fit rounded-2xl">
            <span className="text-sm sm:text-md text-green-500">
              Your order qualifies for{" "}
              <span className="text-lg font-semibold">FREE DELIVERY</span>
            </span>
            <button className="bg-green-800 text-white rounded px-3 py-1 cursor-pointer mt-2 text-sm hover:scale-[103%] w-full sm:w-auto">
              Delivery Details
            </button>
            <div className="flex flex-col sm:flex-row mt-5 gap-2 sm:gap-5">
              <span className="text-lg sm:text-xl">
                Subtotal ({numberOfItems} items):
              </span>
              <span className="text-lg sm:text-xl font-bold">
                {GB_CURRENCY.format(subtotal)}
              </span>
            </div>
            <button className="bg-amber-400 text-black rounded-xl px-3 py-2 cursor-pointer text-md font-semibold hover:scale-[103%] w-full mt-6">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
