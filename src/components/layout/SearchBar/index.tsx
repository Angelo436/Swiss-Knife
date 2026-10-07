import search_icon from "@/assets/search.svg"

import Image from "@/components/ui/Image"
import React, { useRef } from "react";

const SearchBar = () => {

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSearch = (e : React.SubmitEvent) => {
    e.preventDefault()
    const query = inputRef.current?.value || "";
    console.log("Buscando:", query);
  };
  
  return (
    <div>
        <form className="bg-amber-50 h-1/2 rounded-2xl flex items-center justify-between"
            onSubmit={handleSearch}
        >
            <input 
                className="text-black m-2 flex-1 bg-transparent outline-none"
                type="text" 
                ref={inputRef}
                placeholder="Buscar"
            />
            <button
                type="submit"
            >
                <Image 
                    imgSource={search_icon}
                    style="size-4 m-2 cursor-pointer"
                />
            </button>
          </form>
    </div>
  )
}

export default SearchBar
