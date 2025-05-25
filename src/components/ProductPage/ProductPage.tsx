import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { CallAPI } from '../../utils/CallAPi'
import type { Product } from '../../types/Types'
import ProductDetails from './ProductDetails'
import { GB_CURRENCY } from '../../utils/constants'

const ProductPage = () => {

  const {id} = useParams<{id: string}>()
  const [product, setProduct] =  useState<Product | null>(null)

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

  if (!product) return <h1>Loading Product Info...</h1>;

  return (
    product && 
    <div className='w-full h-screen bg-background'>
      <div className='grid grid-cols-10 gap-2 py-4 px-4'>
        <div className='col-span-3 flex items-center justify-center p-6 bg-white rounded'>
          <img src={`${product.image}`} alt="" />
        </div>
        <div className='col-span-5 divide-y divide-gray-500 p-6 bg-white rounded'>
          <div className='pb-6'>
            <ProductDetails product={product} ratings={true} />
          </div>
          <div className='text-base xl:text-lg mt-3 '>
            {product.description}
          </div>
        </div>
        <div className='col-span-2 bg-white p-6 rounded'>
          <div className='flex flex-col items-end'>
            <div className='text-xl xl:text-2xl font-semibold bg-amber-500 w-fit px-3 py-1 rounded-4xl'>{GB_CURRENCY.format(product.price)}</div>
            <div className='text-base xl:text-lg font-semibold line-through px-3 py-1'>{GB_CURRENCY.format(product.oldPrice)}</div>
          </div>
          
          <div className='text-sm xl:text-base font-semibold text-blue-500 mt-3'>FREE Returns</div>
          <div className='text-sm xl:text-base font-semibold text-blue-500 mt-1'>FREE Delivery</div>
          <div className='text-base xl:text-lg font-semibold text-green-700 mt-1'>In Stock</div>
          <div className='text-base xl:text-lg mt-1'>Quantity:
            <select name="" id="" className='px-1 bg-white border rounded-md ml-3'>
              <option value="1">1</option>
              <option value="1">2</option>
              <option value="1">3</option>
              <option value="1">4</option>
              <option value="1">5</option>
            </select>
          </div>
          <button className='bg-amber-300  w-full  p-3 text-md font-semibold  xl:text-lg rounded hover:bg-amber-500 mt-10'>Add to Cart</button>
        </div>

      </div>
    </div>
  )
}

export default ProductPage