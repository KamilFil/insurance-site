import React from "react";
import {Button} from "@/ui/atoms/Button/Button";
import './CallToAction.css'
interface Props {
    title?:string,
    description?: string
    link?: string,
    colorBtn?:string,
    bgColor?: string,
    btnText?: string,

}



export const CallToAction = (props: Props) => {
    const {title, description, link = '/', bgColor = "primary", colorBtn = 'primary2', btnText = 'Napisz do nas'} = props
    return (
        <div className={`cta-item --color-${bgColor}`}>
            <h3 className={'cta-item-title'} >{title}</h3>
            <p className={'cta-item-desc'}>{description}</p>
            <Button color={colorBtn} text={btnText} link={link}/>
        </div>
    )
}