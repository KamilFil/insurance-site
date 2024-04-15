import { Container } from "@/ui/atoms/Container/Container";
import "./Opinion.css";
import {OpinionItem, type OpinionProps} from "@/ui/molecues/OpinionItem/OpinionItem";

interface Props {
  opinions: OpinionProps[] | null;
}




export const Opinion = ({ opinions }: Props) => {
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
