import Image from "@/components/ui/Image"
import burgerMenu from "@/assets/burgerMenu.svg"

import SideBar from "@/components/layout/SideBar"
import SearchBar from "@/components/layout/SearchBar";

import { useState } from "react"

const Header = () => {

  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = () => setIsClicked((prev) => !prev)
  
  return (
    <header className="grid flex-row grid-cols-3 gap-8 min-h-fit h-1/18 w-full bg-blue-400 items-center">
      <div>
        <Image
          imgSource={burgerMenu}
          style="size-8 m-2"
          onClick={handleClick}
        />
      </div>

      {isClicked && (
        <SideBar 
          onClick={handleClick}
        />
      )}

      <SearchBar/>

    </header>
  )
}

export default Header