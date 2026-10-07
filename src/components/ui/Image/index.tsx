import { type ImageProps } from "../../../types/image"
import React from "react"

const Image = (props: ImageProps) => {
  return (
    <>
        <img 
            src={props.imgSource}
            className={ props.onClick ? props.style + " cursor-pointer" : props.style}
            alt={props.alt}
            onClick={props.onClick}
        />
    </>
  )
}

export default React.memo(Image);