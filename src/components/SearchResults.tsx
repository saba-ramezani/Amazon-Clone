import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom"
import type { Product } from "../types/Types";
import { CallAPI } from "../utils/CallAPi";
import ProductDetails from "./ProductPage/ProductDetails";
import { GB_CURRENCY } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<Product[] | null>(null)

  useEffect(() => {
    const getSearchResults = async () => {
      try {
        const searchTerm = searchParams.get("searchTerm");
        const category = searchParams.get("category") || ""
        const searchResults = await CallAPI('data/search.json')
        const categoryResults = searchResults[category]
        if (searchTerm) {
          const results = (categoryResults || []).filter((product: Product) =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setProducts(results);
        } else {
          setProducts(categoryResults || []);
        }
      } catch (error) {
        throw new Error(error as string)
      }
    }

    getSearchResults()

  }, [searchParams])

  return (
    <div className="min-w-[1200px] max-w-[1300px] m-auto">
      {products && products.map((product: Product, key: number) => {
        return (
          <Link key={key} to={`/product/${product.id}`}>
            <div className="h-[250px] grid grid-cols-12 rounded my-1">
              <div className="col-span-2 p-4 bg-gray-200">
                <img className="m-auto" src={product.image_small} alt="" />
              </div>
              <div className="col-span-10 bg-gray-50 border border-gray-100 hover:bg-gray-100">
                <div className="font-medium text-black p-2">
                  <ProductDetails product={product} ratings={true} />
                  <div className="text-xl xl:text-2xl pt-3">{GB_CURRENCY.format(product.price)}</div>
                </div>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default SearchResults