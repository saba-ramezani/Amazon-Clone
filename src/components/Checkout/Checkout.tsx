import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { CartProduct } from "../../types/Types";
import { GB_CURRENCY } from "../../utils/constants";
import ProductDetails from "../ProductPage/ProductDetails";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import classNames from "classnames";

const Checkout = () => {

  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => state.cart.products);
  const numberOfItems = useSelector((state: RootState) => state.cart.productsNumber);
  const subtotal = useSelector((state: RootState) => state.cart.products.reduce((subtotal, product: CartProduct) => subtotal + (product.price * product.quantity) , 0));

  console.log(products)


  return (
    <div className="bg-background h-screen">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 bg-white p-8 rounded-2xl">
            <span className="text-3xl font-semibold text-black">Shopping Cart</span>
            <div className="mt-[50px] flex flex-col divide-y bg-gray-100 rounded-2xl p-2">
              {products.map((product: CartProduct) => (
                <div key={product.id} className="grid grid-cols-10 p-4">
                  <div className="col-span-2 h-full flex justify-center">
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image_small} alt="" />
                    </Link>
                  </div>
                  <div className="col-span-6 flex flex-col">
                    <Link to={`/product/${product.id}`}>
                      <ProductDetails product={product} ratings={false} />
                    </Link>
                    <div className="mt-10 flex flex-col gap-2">
                      <button 
                      onClick={() => dispatch(removeFromCart(product.id))}
                      className="bg-red-700 text-white px-2 rounded-lg py-1 text-sm w-[150px] cursor-pointer">Remove from Cart</button>
                      <div className="w-[150px] border border-gray-400 rounded-lg  grid grid-cols-3">
                        <button 
                        onClick={() => {
                          if (product.quantity > 1) {
                            dispatch(addToCart({ ...product, quantity: product.quantity - 1 }));
                          }
                        }}
                        className={classNames("col-span-1 rounded-l-lg font-bold",
                          product.quantity <= 1 ? "bg-gray-300" : "bg-amber-500 cursor-pointer"
                        )}
                        >-</button>
                        <span className="col-span-1 flex justify-center">{product.quantity}</span>
                        <button 
                        onClick={() => {
                          if (product.quantity < 5) {
                            dispatch(addToCart({ ...product, quantity: product.quantity + 1 }));
                          }
                        }}
                        className={classNames("col-span-1 rounded-r-lg", 
                          product.quantity >= 5 ? "bg-gray-300" : "bg-amber-500 cursor-pointer"
                        )}>+</button>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2 flex flex-col">
                    <span className="text-xl font-bold">{GB_CURRENCY.format(product.price)}</span>
                    {(product.quantity > 1) && 
                      <div className="flex mt-[10px] pt-[10px] border-t">
                          <span className="text-lg mr-2">total: </span>
                          <span className="text-xl font-bold">{GB_CURRENCY.format(product.price * product.quantity)}</span>
                      </div>
                    }
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-[20px] px-5">
              <span className="text-xl mr-5">Subtotal ({numberOfItems} items): </span>
              <span className="text-xl font-bold">{GB_CURRENCY.format(subtotal)}</span>
            </div>
          </div>
          <div className="col-span-2 bg-white p-6 h-fit rounded-2xl">
            <span className="text-md text-green-500">Your order qualifies for <span className="text-lg font-semibold">FREE DELIVERY</span></span>
            <button className="bg-green-800 text-white rounded px-3 py-1 cursor-pointer mt-2 text-sm hover:scale-[103%]">Delivery Details</button>
            <div className="flex mt-[20px]">
              <span className="text-xl mr-5">Subtotal ({numberOfItems} items): </span>
              <span className="text-xl font-bold">{GB_CURRENCY.format(subtotal)}</span>
            </div>
            <button className="bg-amber-400 text-black rounded-xl px-3 py-2 cursor-pointer text-md font-semibold hover:scale-[103%] w-full mt-[30px]">Proceed to Checkout</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Checkout