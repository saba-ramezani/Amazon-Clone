import { SearchCategories } from "../../data/SearchCategories"
import { BsSearch } from "react-icons/bs";


const Search = () => {
  return (
    <div className="w-full bg-white h-[40px] px-0 rounded-[10px]">
      <div className="flex items-center h-full w-full rounded-[10px]">
        <select name="" id="" className="bg-gray-300 rounded-l-[10px] w-fit h-full px-[5px] focus:outline-0">
          {SearchCategories.map((category, i) => 
            <option value={category.value} key={i}>
              {category.title}
            </option>
          )}
        </select>
        <input className="flex ml-[10px] grow bg-white text-black h-full focus:outline-0" type="text" placeholder="Search Amazon" />
        <button className="bg-amber-500 rounded-r-[10px] h-full w-[50px] flex justify-center items-center">
          <BsSearch color="black" size={25} />
        </button>
      </div>
    </div>
  )
}

export default Search