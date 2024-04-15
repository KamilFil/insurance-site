import { Container } from "@/ui/atoms/Container/Container";
import "./Opinion.css";
import {OpinionItem, type OpinionProps} from "@/ui/molecues/OpinionItem/OpinionItem";

interface Props {
  opinions: OpinionProps[] | null;
}


const dataOpinion = [
    {
        id: 1,
        name: "Marek L",
        rating: 2,
        opinion:
            "To ubezpieczenie na życie zmieniło moje podejście do planowania przyszłości. Jestem spokojniejszy, wiedząc, że w przypadku niespodziewanych zdarzeń, moja rodzina będzie miała zapewnione wsparcie finansowe.",
        img: "",
    },    {
        id: 1,
        name: "Marek L",
        rating: 2,
        opinion:
            "To ubezpieczenie na życie zmieniło moje podejście do planowania przyszłości. Jestem spokojniejszy, wiedząc, że w przypadku niespodziewanych zdarzeń, moja rodzina będzie miała zapewnione wsparcie finansowe.",
        img: "",
    },
]

export const Opinion = ({ opinions }: Props) => {
    opinions = dataOpinion;
  if (!opinions) return null;

  return (
    <section className="opinion" id="opinion">
      <Container size={1200}>
        <div className="opinion-items">
            {opinions.map((opinion, i) => (
                <OpinionItem key={i} name={opinion.name} rating={opinion.rating} opinion={opinion.opinion} img={opinion.img}/>
                )
            )}
        </div>
      </Container>
    </section>
  );
};
