import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { CallAPI } from '../../utils/CallAPi'
import type { Product } from '../../types/Types'
import ProductDetails from './ProductDetails'

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
      <div className='grid grid-cols-10 bg-amber-500 gap-2 py-4 px-4'>
        <div className='col-span-3 flex items-center justify-center p-6 bg-white'>
          <img src={`${product.image}`} alt="" />
        </div>
        <div className='col-span-5 divide-y-2 divide-gray-500 p-6 bg-white'>
          <ProductDetails product={product} ratings={false} />
        </div>
        <div className='col-span-2 bg-white p-6'>
ss
        </div>

      </div>
    </div>
  )
}

export default ProductPage