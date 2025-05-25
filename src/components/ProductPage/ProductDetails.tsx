import type { Product } from "../../types/Types"
import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";

type Props = {
    product: Product;
    ratings: boolean;
}

const ProductDetails = ({ product, ratings }: Props) => {
  return (
    <div className="flex flex-col space-y-4">
        <div className="text-xl xl:text-2xl font-medium">{product.title}</div>
        <div className="text-sm xl:text-base">{product.brand}</div>
        {ratings && 
          <div className="text-sm xl:text-base">
            <ProductRatings product={product} />
          </div>
        }
        <div className="text-xs xl:text-sm font-bold">{product.attribute }</div>
        <div>
          <ProductBadge badge={product.badge} />
        </div>
    </div>
  )
}

export default ProductDetails