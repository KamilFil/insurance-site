import type {ReactNode} from "react";
import './Container.css';
export const Container = ({ children, size }:{children: ReactNode, size:number }) => {
    return (
        <div className='container' style={
            size ?  {maxWidth: `${size}px`} : {}
        }>
            {children}
        </div>
    )
}