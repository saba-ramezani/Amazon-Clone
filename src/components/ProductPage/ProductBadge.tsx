type Props = {
    badge: string
}

const ProductBadge = ({badge}: Props) => {
    if (badge === "choice") {
       return (
            <span className="text-xs xl:text-sm bg-slate-800 text-white p-2 rounded">Amazon's 
            <span className="text-amber-500 ml-1">Choice</span></span>
        )
    } else if (badge === "seller") {
        return (
            <span className="text-xs xl:text-sm bg-orange-600 text-white font-semibold p-2 rounded">#1 Best Seller</span>
        )
    } else if (badge == "limited") {
        return (
            <span className="text-xs xl:text-sm bg-red-500 text-white font-semibold p-2 rounded">Limited Time Deal</span>
        )
    }

    return (
        <div></div>
    )
}

export default ProductBadge