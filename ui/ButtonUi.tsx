import React from 'react'
import { Button } from "../components/ui/button"
import { BunttonUiType } from '@/types/ButtonUitype'


const ButtonUi:React.FC<BunttonUiType> = ({children, onClick,  size, variant, extraClass, iconPosition, icon, type, bgColor}) => {
  return (
    <Button type={type}  className={`${extraClass} ${bgColor ?  "bg-[#FE5F1E] text-white" :"border-[#FE5F1E] text-[#FE5F1E] "} border-[1px] text-[16px] px-[18px] rounded-[30px]`} onClick={onClick} variant={variant} size={size}>
      {iconPosition == "left" && icon} 
        {children}
      {iconPosition == "right" && icon} 
    </Button>
  )
}

export default ButtonUi