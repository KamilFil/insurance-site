import {Button} from "@/ui/atoms/Button/Button";
import React from "react";
import './CardItem.css'
interface Props {
    title?: string
    description?: string
imageName?: string
    children?: React.ReactNode
}

export const CardItem = (props: Props) => {
    const {title, description, imageName, children} = props
   return (
    <div className="card-item">
        {title && <h3 className={'card-title'}>{title}</h3>}
        {imageName && (<div className='card-item-img'>
            <img src={`/img/${imageName}`}/>
        </div>)}
        {description && <p>{description}</p>}
        {children}
    </div>)
}