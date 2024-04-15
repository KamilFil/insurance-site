import './Star.css'
export const Star = ({active}:{active:boolean}) => {
    return (
        <i className={!active ? 'star fa-solid fa-star' : "star--active fa-solid fa-star" }></i>
    )
}
