import React from "react";
import Link from "next/link";
import './Button.css'

interface Props {
    text?: string
    link?: string
    color?: string
    colorOther?: string
}

export const Button = (props: Props) => {
    const {color, text, colorOther, link = '/'} = props

    return (
        <Link href={`${link}`} className={color ? `button color--${color}` : "button"} style={{backgroundColor: colorOther}}>{text}</Link>
    )
}