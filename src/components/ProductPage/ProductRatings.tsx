import type { Product } from "../../types/Types"
import { FaStar } from "react-icons/fa";


type props = {
    product: Product
}

const ProductRatings = ({product}: props) => {
    const starNumber = product.avgRating;
    const ratingNumber = product.ratings;
  return (
    <div className="flex items-center space-x-5">
        <div className="flex space-x-0.5">
            {Array.from({length: starNumber}, (_, i) => <FaStar color="orange" size={18} key={i} />)}
            {Array.from({length: 5-starNumber}, (_, i) => <FaStar color="lightgray" size={18} key={i} />)}
        </div>
        
        <span className="text-blue-500 font-semibold">{ratingNumber} ratings</span>
    </div>
  )
}

export default ProductRatings