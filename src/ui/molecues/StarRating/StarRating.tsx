import {Star} from "@/ui/atoms/Star/Star";

export const StarRating = ({rating}:{rating:number}) => {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if(i < rating) {
            stars.push(<Star key={i} active={true}/>)
            continue
        }
        stars.push(<Star key={i} active={false}/>)
    }
    return (
        <div className='star-item'>
            {stars}
        </div>
    )
}