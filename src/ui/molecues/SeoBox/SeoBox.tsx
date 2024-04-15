import React from "react";
import './SeoBox.css'

interface Props {
    title: string,
    description: string
    children?: React.ReactNode
}

export const SeoBox = (props: Props) => {
    const {title, description, children} = props
    return (
        <div className='seo-item'>
            <h3>{title}</h3>
            <p>{description}</p>
            {children}
        </div>
    )
}