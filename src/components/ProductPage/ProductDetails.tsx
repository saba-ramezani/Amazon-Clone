import type { Product } from "../../types/Types"

type Props = {
    product: Product;
    ratings: boolean;
}

const ProductDetails = ({ product, ratings }: Props) => {
  return (
    <div>
        <div>{product.title}</div>
        <div>{product.brand}</div>
        <div>{product.avgRating}</div>
        <div>{product.attribute }</div>
        <div>{product.badge}</div>
    </div>
  )
}

export default ProductDetails