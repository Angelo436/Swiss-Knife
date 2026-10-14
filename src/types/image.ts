import type {MouseEvent} from "react"

export type ImageProps = {
  imgSource: string;
  style?:string;
  alt?: string;
  onClick?: (e: MouseEvent<Element>) => void;
};