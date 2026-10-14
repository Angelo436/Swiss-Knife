import type { MouseEvent } from "react";

export type SideBarProps = {
  onClick?: (e: MouseEvent<Element>) => void;
}

const SideBar = (props: SideBarProps ) => {
  
  const pages = ["Home","Home2"]

  return (
    <section className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
      onClick={props.onClick}
    >
      <nav 
        className="fixed left-0 w-8/100 h-dvh bg-blue-500"
        onClick={(e) => {e.stopPropagation()}}
      >
        <ul>
        {
          pages.map((page,index) =>
              <li key={index}>
                <a href="#">{page}</a>
              </li>
          )
        }
        </ul>
      </nav>
    </section>
  )
}

export default SideBar