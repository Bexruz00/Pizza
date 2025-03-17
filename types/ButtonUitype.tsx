import { MouseEventHandler, ReactNode } from "react";


export interface BunttonUiType {
    variant?:"default" | "destructive" | "ghost" | "link" | "outline"
    onClick?:MouseEventHandler<HTMLButtonElement>
    extraClass?:string
    children?:ReactNode
    icon?:ReactNode
    bgColor?: any
    textColor?:string
    rounded?: string
    iconPosition?:"left" | "right" 
    size:"lg" | "sm" | "icon"
    type?:"button" | "reset" | "submit"
    
      
}