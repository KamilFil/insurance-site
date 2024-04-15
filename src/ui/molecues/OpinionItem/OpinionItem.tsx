import { StarRating } from "@/ui/molecues/StarRating/StarRating";
import './OpinionItem.css'
export interface OpinionProps {
  name: string;
  rating: number;
  opinion: string;
  img: string;
}
export const OpinionItem = (props: OpinionProps) => {
  const { name, rating, opinion, img } = props;

  return (
    <div className="opinion-item">
      <div className="opinion-item-img">
        <img
          alt={`Opinia ${name}`}
          src={`/img/${!img ? "avatar.png" : img} `}
        />
      </div>
      <div className="opinion-item-text">
        <h4>{name}</h4>
        <StarRating rating={rating} />
        <p>{opinion}</p>
      </div>
    </div>
  );
};
