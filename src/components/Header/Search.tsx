import { useEffect, useState, type ChangeEvent } from "react";
import { SearchCategories } from "../../data/SearchCategories"
import { BsSearch } from "react-icons/bs";
import type { Suggestion } from "../../types/Types";
import { CallAPI } from "../../utils/CallAPi";
import { createSearchParams, useNavigate } from "react-router-dom";


const Search = () => {
  const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null)
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [category, setCategory] = useState<string>("All")
  const navigate = useNavigate()

  const onHandleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search:
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        }).toString(),
    })
    setSearchTerm('');
    setCategory("All")
  }

  useEffect(() => {
    const getSuggestions = async () => {
      try {
        const suggestionsData = await CallAPI('data/suggestions.json');
        setSuggestions(suggestionsData)
      } catch (error) {
        throw new Error(error as string)
      }
    }

    getSuggestions();
  }, [])


  const handleSearchTermChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div className="w-full bg-white h-[40px] px-0 rounded-[10px]">
      <div className="flex items-center h-full w-full rounded-[10px]">
        <select name="" id="" className="bg-gray-300 rounded-l-[10px] w-fit h-full px-[5px] focus:outline-0" onChange={(e) => setCategory(e.target.value)}>
          {SearchCategories.map((category, i) => 
            <option value={category.value} key={i}>
              {category.title}
            </option>
          )}
        </select>
        <input className="flex ml-[10px] grow bg-white text-black h-full focus:outline-0" type="text" 
        placeholder="Search Amazon" value={searchTerm} onChange={handleSearchTermChange} />
        <button 
        onClick={onHandleSearch}
        className="bg-amber-500 cursor-pointer hover:bg-amber-400 rounded-r-[10px] h-full w-[50px] flex justify-center items-center">
          <BsSearch color="black" size={25} />
        </button>
      </div>
      {suggestions && searchTerm &&
        <div className="bg-white text-black w-full z-40 absolute divide-y divide-gray-300 px-5 py-2 rounded border-t">
          {
            suggestions.filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase()
              const title = suggestion.title.toLowerCase()
              return (
                currentSearchTerm && 
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              )
            }).slice(0,10)
            .map((suggestion) => (
              <div key={suggestion.id} className="py-1 px-2 hover:bg-amber-200 hover:cursor-pointer" 
              onClick={() => 
                {
                  setSearchTerm(suggestion.title)
                  setSuggestions(null)
                }}>
                {suggestion.title}
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Search