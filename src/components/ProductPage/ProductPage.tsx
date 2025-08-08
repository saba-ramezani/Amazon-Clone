import { useEffect, useState } from 'react'
import {Link, useParams} from 'react-router-dom'
import { CallAPI } from '../../utils/CallAPi'
import { type CartProduct, type Product } from '../../types/Types'
import ProductDetails from './ProductDetails'
import { GB_CURRENCY } from '../../utils/constants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import { MdOutlineDone } from "react-icons/md";
import { IoIosCloseCircle } from "react-icons/io";



const ProductPage = () => {

  const {id} = useParams<{id: string}>()
  const [product, setProduct] =  useState<Product | null>(null)
  const [quantity, setQuantity] = useState<number>(1)
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const dispatch = useDispatch()

  useEffect(() => {
    const getProduct = async () => {
      try {
        const productsData = await CallAPI('data/products.json');
        const foundProduct = productsData?.[id as string]
        setProduct(foundProduct)
      } catch (error) {
        throw new Error(error as string)
      }
    }
    getProduct();
  }, [id])

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);



  if (!product) return <h1>Loading Product Info...</h1>;

  return (
    product && 
    <div className='w-full h-fit min-h-screen bg-background'>
      <div className='grid grid-cols-10 gap-2 py-4 px-4 min-h-[700px]'>
        <div className='md:col-span-5 lg:col-span-3 col-span-10 flex items-center justify-center p-6 bg-white h-full rounded'>
          <img src={`${product.image}`} className='w-auto' alt="" />
        </div>
        <div className='md:col-span-5 col-span-10 divide-y divide-gray-500 p-6 bg-white rounded'>
          <div className='pb-6'>
            <ProductDetails product={product} ratings={true} />
          </div>
          <div className='text-base xl:text-lg mt-3 '>
            {product.description}
          </div>
        </div>
        <div className='md:col-span-10 lg:col-span-2 col-span-10 bg-white p-6 rounded flex flex-col items-center lg:items-start'>
          <div className='flex flex-col items-center lg:items-end'>
            <div className='text-xl xl:text-2xl font-semibold bg-amber-500 w-fit px-3 py-1 rounded-4xl'>{GB_CURRENCY.format(product.price)}</div>
            <div className='text-base xl:text-lg font-semibold line-through px-3 py-1'>{GB_CURRENCY.format(product.oldPrice)}</div>
          </div>
          
          <div className='text-sm xl:text-base font-semibold text-blue-500 mt-3'>FREE Returns</div>
          <div className='text-sm xl:text-base font-semibold text-blue-500 mt-1'>FREE Delivery</div>
          <div className='text-base xl:text-lg font-semibold text-green-700 mt-1'>In Stock</div>
          <div className='text-base xl:text-lg mt-1'>Quantity:
            <select 
              onChange={(e) => {
                setQuantity(Number(e.target.value))
              }}
            name="" id="" className='px-1 bg-white border rounded-md ml-3'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <button
          onClick={() => 
          {
            const cartProduct: CartProduct = {...product, quantity}
            dispatch(addToCart(cartProduct))
            setModalOpen(true)
            setTimeout(() => setModalOpen(false), 5000)
          }
          } 
          className='bg-amber-300 md:w-[50%] lg:w-full w-full p-3 text-md font-semibold  xl:text-lg rounded hover:bg-amber-500 mt-10'>Add to Cart</button>
        </div>
 
      </div>
      {modalOpen &&
        <div className='absolute top-0 left-0 z-10 h-screen w-screen justify-center items-center flex bg-[rgba(0,0,0,0.5)]'>
          <div className='bg-white h-fit w-[500px] rounded-xl p-4'>
            <div className='flex border-b pb-3 gap-2 px-1'>
              <div className='flex flex-row flex-1 gap-2'>
                <MdOutlineDone color='green' size={25} />
                <span className='text-lg text-green-600'>This item is added to your cart!</span>
              </div>
              
              <button className='cursor-pointer' onClick={() => setModalOpen(false)}>
                <IoIosCloseCircle color='black' size={25} />
              </button>
            </div>
            <div className='flex flex-row p-2 items-center gap-5 mt-3'>
              <img src={product.image} alt="" className='w-[100px] h-[100px]' />
              <span className='text-lg font-semibold'>{product.title}</span>
            </div>
            <div className='w-full flex justify-center my-5'>
              <Link to={"/checkout"}>
                <button className='bg-amber-500 w-full text-lg px-3 py-2 rounded cursor-pointer hover:scale-[105%] hover:bg-amber-300'>Go to Shopping Cart</button>
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default ProductPage